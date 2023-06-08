package com.webHard.folder.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webHard.folder.entity.FolderEntity;


public interface FolderRepository extends JpaRepository<FolderEntity,UUID>{
	
}
