package com.webHard.folder.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webHard.folder.entity.Folder;


public interface FolderRepository extends JpaRepository<Folder,UUID>{
	
}
