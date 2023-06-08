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
public class Folder {
	
	@Id
	@GeneratedValue(generator = "uuid2")
	@Column(nullable = false)
	private UUID folder_uuid;
	
	@Column(length=100, nullable = false)
	private String folder_nm;
	
	@Column(length=255, nullable = false)
	private String folder_path;
	
	@Column(nullable = false)
	private LocalDateTime create_folder_dt;
	
	@ManyToOne
	@JoinColumn(name="user_uuid")
	private UUID user_uuid;
	
	@ManyToOne
	@JoinColumn(name="user_uuid")
	private UUID com_uuid;
}
