package com.training.app.controller;

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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.app.dto.CourseTrainerDTO;
import com.training.app.dto.InstructorCourseDTO;
import com.training.app.dto.InstructorDTODefaultResponse;
import com.training.app.dto.InstructorRegisterRequestDTO;
import com.training.app.dto.InstructorSearchResponseDTO;
import com.training.app.dto.LoginDTO;
import com.training.app.dto.LoginResponseDTO;
import com.training.app.dto.StatusDTO;
import com.training.app.dto.UpdatePasswordDTO;
import com.training.app.entity.Course;
import com.training.app.entity.Instructor;
import com.training.app.exceptions.InvalidRecordException;
import com.training.app.service.courese.CourseService;
import com.training.app.service.instructor.InstructorService;
import com.training.app.util.DTOToTrainerConvertor;
import com.training.app.util.InstructorDTOConvertor;
import com.training.app.util.InstructorSearchResponseDTOConvertor;

@RestController
@RequestMapping("/trainer")
@CrossOrigin(origins = {"http://localhost:2002", "http://localhost:4200"},allowedHeaders = "*")
public class IntructorRestController {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	InstructorService instructorService;
	
	@Autowired
	InstructorDTOConvertor dtoConvertor;
	
	@Autowired
	DTOToTrainerConvertor dtoConvertorToTrainer;
	
	@Autowired
	InstructorSearchResponseDTOConvertor instructorSearchResponseDTOConvertor;
	
	@Autowired
	CourseService courseService;
	
	
	public IntructorRestController() {
		logger.info("Instructor Rest Controller called");
		System.err.println("Instructor Rest Controller called");
	}
	
	
	@PostMapping("/loginauth")
	public LoginResponseDTO verifyUser(@RequestBody LoginDTO loginDto)throws Exception
	{
		String name =  instructorService.verifyTrainer(loginDto.getPassword(), loginDto.getUsercode());
		if(name != null)
		{
			return new LoginResponseDTO(name, true);
		}
		else throw new Exception("Invalid Username/Password");
	}
	

	@PostMapping("/register")
	public ResponseEntity<InstructorDTODefaultResponse> saveTrainer(@RequestBody Instructor intructor)
	{
		Instructor savedInstructror = instructorService.registerTrainer(intructor);
		logger.info(" --->> Instructor saved "+savedInstructror);
		
		InstructorDTODefaultResponse dtoObj = dtoConvertor.convertTo(savedInstructror);
		
		logger.info(" --->> Instructor after saved dto "+dtoObj);
		
		return new ResponseEntity<InstructorDTODefaultResponse>(dtoObj,HttpStatus.OK);
	}
	
	@GetMapping("/{code}")
	public ResponseEntity<InstructorSearchResponseDTO> getTrainerById(@PathVariable int code)throws InvalidRecordException
	{
		 Instructor savedInstructor  =  instructorService.getInstructorById(code);
		 if(savedInstructor != null)
		 {
			 InstructorSearchResponseDTO dto  =  instructorSearchResponseDTOConvertor.getInstructorSearchDTO(savedInstructor);
			 return new ResponseEntity<InstructorSearchResponseDTO>(dto,HttpStatus.OK);
		 }
		 else throw new InvalidRecordException(code,code+" not found");
	}
	
	@GetMapping("/list")
	public ResponseEntity<List<InstructorDTODefaultResponse>> getAllTrainers()
	{
		List<Instructor> allInstructorsInDB = instructorService.getAllTrainer();
		
		List<InstructorDTODefaultResponse> dtoList = new ArrayList<>();
		for (Instructor instructor : allInstructorsInDB) {
			
			InstructorDTODefaultResponse dtoObj = dtoConvertor.convertTo(instructor);
			dtoList.add(dtoObj);
		}
		
		return new ResponseEntity<List<InstructorDTODefaultResponse>>(dtoList,HttpStatus.OK);
	}
	
	
	@PutMapping("/resetpassword")
	public ResponseEntity<StatusDTO> updatePassword(@RequestBody UpdatePasswordDTO dto)throws Exception
	{
		int codeId = dto.getCodeId();
		String oldPassword = dto.getOldPassword();
		String newPassword = dto.getNewPassword();
		StatusDTO statusdto = new StatusDTO();
		boolean status = instructorService.updatePassword(codeId, oldPassword, newPassword);
		
		if(status == true)
		{
			
			statusdto.setMsg(newPassword.substring(0,3)+"***");
			statusdto.setStatus(true);
			
		}
		else
		{
			statusdto.setMsg("Error !!!");
			statusdto.setStatus(false);
		}
		return new ResponseEntity<StatusDTO>(statusdto,HttpStatus.OK);
	}
	
	@PutMapping("/{tid}/course/{cid}")
	public ResponseEntity<CourseTrainerDTO> updateTrainerWithCourse(@PathVariable int tid,@PathVariable int cid)
	{
		Instructor updatedInstructor = instructorService.updateCourse(tid, cid);
		CourseTrainerDTO dto = new CourseTrainerDTO();
		if(updatedInstructor.getCourse() != null)
		{
			Course savedCourse = courseService.getCourseById(cid);
			
			dto.setCourseName(savedCourse.getCourseName());
			dto.setTrainerName(updatedInstructor.getInsName());
			dto.setStatus(true);
			return new ResponseEntity<CourseTrainerDTO>(dto,HttpStatus.OK);
		}
		else {
			dto.setCourseName("");
			dto.setTrainerName("");
			dto.setStatus(false);
			return new ResponseEntity<CourseTrainerDTO>(dto,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/course/{cname}")
	public ResponseEntity<List<InstructorCourseDTO>> getAllTrainersByCourse(@PathVariable String cname)
	{
		List<InstructorCourseDTO> allTrainers = instructorService.getInstructorByCourseName(cname);
		
		
		return new ResponseEntity<List<InstructorCourseDTO>>(allTrainers,HttpStatus.OK); 
		
		
	}
	
	
}//end class











