package com.webHard.folder.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webHard.folder.entity.File;


public interface FileRepository extends JpaRepository<File,UUID> {
	
}
