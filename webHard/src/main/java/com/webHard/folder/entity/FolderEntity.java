package com.webHard.folder.entity;

import java.time.LocalDateTime;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@Table(name = "folder")
@NoArgsConstructor
@AllArgsConstructor
public class FolderEntity {
	
	@Id
	@GeneratedValue(generator = "uuid2")
	@Column(name="folder_uuid", nullable = false)
	private UUID folderUuid;
	
	@Column(length=100, nullable = false)
	private String folderNm;
	
	@Column(length=255, nullable = false)
	private String folderPath;
	
	@Column(nullable = false)
	private LocalDateTime createFolderDt;
	/*
	@ManyToOne
	@JoinColumn(name="user_uuid")
	private UUID user_uuid;
	
	@ManyToOne
	@JoinColumn(name="com_uuid")
	private UUID com_uuid;*/
}
