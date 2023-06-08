package com.webHard.folder.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.webHard.folder.dto.FileDto;
import com.webHard.folder.service.impl.FileServiceImpl;

@Controller
public class FileController {
	
	@Autowired
	private FileServiceImpl fileServiceImpl;

	@ResponseBody
	@PutMapping("/api/putTest")
	public String test(FileDto fileDto) {
		System.out.println("확인");
		fileServiceImpl.putTest();
		
		return "성공";
	}
}
