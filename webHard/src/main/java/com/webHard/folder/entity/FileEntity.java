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

import com.webHard.user.entity.UserEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@Table(name = "file")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FileEntity {
	
	@Id
	@GeneratedValue(generator = "uuid2")
	@Column(name="file_uuid", nullable = false)
	private UUID fileUuid;
	
	@Column(length=100, nullable = false)
	private String fileNm;
	
	@Column(length=255, nullable = false)
	private String filePath;
	
	@Column(length=100, nullable = false)
	private String fileExtension;
	
	@Column(nullable = false)
	private LocalDateTime createFileDt;
	
	@ManyToOne
	@JoinColumn(name="user_uuid")
	private UserEntity userUuid;
}
