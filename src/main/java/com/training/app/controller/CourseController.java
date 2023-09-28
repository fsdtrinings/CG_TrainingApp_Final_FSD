package com.training.app.controller;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.training.app.dto.CourseAdminResponseDTO;
import com.training.app.dto.CourseDTO;
import com.training.app.entity.Course;
import com.training.app.repository.course.CourseRepository;
import com.training.app.service.courese.CourseService;
import com.training.app.util.CourseDTOConvertor;

@RestController
@RequestMapping("/app")
@CrossOrigin(origins = {"http://localhost:2002", "http://localhost:4200"},allowedHeaders = "*")
public class CourseController {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	CourseService courseService;
	
	@Autowired
	CourseDTOConvertor courseDTOConvertor;
	
	
	public CourseController() {
		logger.info("---Course Controller Called --");
		logger.warn("---Course Controller Called --");
		
		System.out.println("Course Controller Called");
	}
	// localhost:8080/app/welcome
	@GetMapping("/welcome")
	public String sayHello()
	{
		LocalDateTime todayDate = LocalDateTime.now();
		return "Welcome "+todayDate;
	}

	@PostMapping("/course")
	public ResponseEntity<?> addCourse(@RequestBody Course course)
	{
		Course savedCourse = courseService.addCourse(course);
		
		CourseAdminResponseDTO responseDTO = courseDTOConvertor.getCourseAdminResponseDTO(savedCourse);
		
		return new ResponseEntity<CourseAdminResponseDTO>(responseDTO,HttpStatus.OK);
	}
	
	
	@GetMapping("/courses")
	public ResponseEntity<List<CourseDTO>> getAllCourse()
	{
		List<Course> allCourses = courseService.getAllCourses(); // give us raw data (complete information , which we cannot share with users directly)
		// Converting into DTO form , which we can share with user
		List<CourseDTO> allCourseDTO = new ArrayList<>();
		
		for (Course course : allCourses) {
			
			allCourseDTO.add(courseDTOConvertor.getCourseDTO(course));
			
		}
		
		return new ResponseEntity<List<CourseDTO>>(allCourseDTO,HttpStatus.OK);
	}

	@GetMapping("/course")
	public ResponseEntity<CourseDTO> getCourseById(@RequestParam int id)
	{
		Course courseFromDB = courseService.getCourseById(id);
		CourseDTO dto = courseDTOConvertor.getCourseDTO(courseFromDB);
		
		return new ResponseEntity<CourseDTO>(dto,HttpStatus.OK);
	}
	
	@GetMapping("/course/name/{name}")
	public ResponseEntity<CourseDTO> getCourseByName(@PathVariable String name)
	{
		Course courseFromDB = courseService.getCourseByName(name);
		CourseDTO dto = courseDTOConvertor.getCourseDTO(courseFromDB);
		
		return new ResponseEntity<CourseDTO>(dto,HttpStatus.OK);
	}
	
	@GetMapping("/course/category/{category}")
	public ResponseEntity<List<CourseDTO>> getCourseByCategory(@PathVariable String category)
	{
		List<Course> allCourses = courseService.getCoursesByCategory(category);
		List<CourseDTO> allCourseDTO = new ArrayList<>();
		
		for (Course course : allCourses) {
			
			allCourseDTO.add(courseDTOConvertor.getCourseDTO(course));
			
		}
		
		return new ResponseEntity<List<CourseDTO>>(allCourseDTO,HttpStatus.OK);
	}
	
	
}//end class



















