package com.webHard.folder.service.impl;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webHard.folder.entity.FileEntity;
import com.webHard.folder.repository.FileRepository;
import com.webHard.folder.service.FileService;

@Service
public class FileServiceImpl implements FileService{
	
	@Autowired
	private FileRepository fileRepository;

	public void putTest() {
		
		LocalDateTime ldt = LocalDateTime.now();
		
		FileEntity fileEntity = FileEntity.builder().fileNm("a")
		.fileExtension("a").
		filePath("a").
		createFileDt(ldt).
		userUuid(UUID.randomUUID()).
		build();
		
		fileRepository.save(fileEntity);
	}

}
