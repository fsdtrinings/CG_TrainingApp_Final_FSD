package com.training.app.controller;

import java.util.ArrayList;
import java.util.List;

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

import com.training.app.dto.ExceptionDTOResponse;
import com.training.app.dto.LoginDTO;
import com.training.app.dto.LoginResponseDTO;
import com.training.app.dto.StudentResponseDTO;
import com.training.app.dto.StudentResponseDetailedDTO;
import com.training.app.dto.UpdatePasswordDTO;
import com.training.app.entity.Student;
import com.training.app.exceptions.InvalidInputDataException;
import com.training.app.service.student.IStudentService;
import com.training.app.util.StudentDTOConvertor;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = {"http://localhost:2002", "http://localhost:4200"},allowedHeaders = "*")
public class StudentRestController {

	@Autowired
	IStudentService studentService;
	
	@Autowired
	StudentDTOConvertor dtoConvertor;
	
	
	@PostMapping("/loginauth")
	public LoginResponseDTO verifyUser(@RequestBody LoginDTO loginDto)
	{
		String name =  studentService.verifyStudent(loginDto.getPassword(), loginDto.getUsercode());
		if(name != null)
		{
			return new LoginResponseDTO(name, true);
		}
		else return new LoginResponseDTO("fail", false);
	}
	
	
	@PostMapping("/register")
	public ResponseEntity<StudentResponseDTO> registrationOfStudent(@RequestBody Student student)throws Exception
	{
		Student savedStudent = studentService.addStudent(student);
		if(savedStudent != null)
		{
			StudentResponseDTO dto = dtoConvertor.getStudentDTO(savedStudent);
			return new ResponseEntity<StudentResponseDTO>(dto,HttpStatus.OK);
		}
		
		return null;
	}
	@GetMapping("/list")
	public ResponseEntity<List<StudentResponseDetailedDTO>> getAllStudents()
	{
		List<Student>  allStudents = studentService.getAllStudents();
		List<StudentResponseDetailedDTO> stuDtoList = new ArrayList<>();
		
		if(allStudents != null && allStudents.isEmpty() == false)
		{
			
		
			for (Student student : allStudents) {
				StudentResponseDetailedDTO dto = dtoConvertor.getDetailedStudentDTO(student);
				stuDtoList.add(dto);
			}
		}
		
		return new ResponseEntity<List<StudentResponseDetailedDTO>>(stuDtoList,HttpStatus.OK);
	}
	
	@PutMapping("/{sid}/course/{cid}")
	public ResponseEntity<StudentResponseDetailedDTO> updateCourseByStudentId(@PathVariable int sid,@PathVariable int cid)throws Exception
	{
		
		// call service layer & update student with course
		
		Student updatedStudent = studentService.updateCourseByStudentid(sid, cid);
		if(updatedStudent != null)
		{
			StudentResponseDetailedDTO dto = dtoConvertor.getDetailedStudentDTO(updatedStudent);
			return new ResponseEntity<StudentResponseDetailedDTO>(dto,HttpStatus.OK);
			
		}
		
		return null;
		
		
	}
	
	@GetMapping("/{sid}")
	public ResponseEntity<StudentResponseDetailedDTO> getStudentById(@PathVariable int sid)throws Exception
	{
		
			Student savedStudent = studentService.getStudentById(sid);
			StudentResponseDetailedDTO dto = dtoConvertor.getDetailedStudentDTO(savedStudent);
			return new ResponseEntity<StudentResponseDetailedDTO>(dto,HttpStatus.OK);
		
		
	}
	
	
	@PutMapping("/resetpassword")
	public boolean updatePassword(@RequestBody UpdatePasswordDTO dto)throws Exception
	{
		int codeId = dto.getCodeId();
		String oldPassword = dto.getOldPassword();
		String newPassword = dto.getNewPassword();
		
		boolean status = studentService.updatePassword(codeId, oldPassword, newPassword);
		return status;
	}
	
}//end class















