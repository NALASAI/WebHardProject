package com.webHard.folder.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.webHard.folder.dto.FolderDto;
import com.webHard.folder.service.FolderService;

@Controller
public class FolderController {
	
	private FolderService folderService;
	
	@Autowired
	public FolderController(FolderService folderService) {
		this.folderService = folderService;
	}

	@ResponseBody
	@PostMapping("/api/moveItem")
	public String moveItem(@RequestBody FolderDto folderDto) {
		System.out.println(folderDto);
		
		return "성공";
	}
}


