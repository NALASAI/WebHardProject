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
@Table(name = "file")
@NoArgsConstructor
@AllArgsConstructor
public class File {
	
	@Id
	@GeneratedValue(generator = "uuid2")
	@Column(nullable = false)
	private UUID file_uuid;
	
	@Column(length=100, nullable = false)
	private String file_nm;
	
	@Column(length=255, nullable = false)
	private String file_path;
	
	@Column(length=100, nullable = false)
	private String file_extension;
	
	@Column(nullable = false)
	private LocalDateTime create_file_dt;
	
	@ManyToOne
	@JoinColumn(name="user_uuid")
	private UUID user_uuid;
}
