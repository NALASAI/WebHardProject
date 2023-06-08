package com.webHard.user.entity;

import java.time.LocalDateTime;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.data.annotation.CreatedDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;



@Entity
@Table(name = "tbl_user")
@ToString
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserEntity {
	
	@Id
	@GeneratedValue(generator = "uuid2")
	@GenericGenerator(name = "uuid2", strategy = "uuid2")
	@Column(name = "user_uuid")
	private UUID userUuid;
	
	@Column(name = "user_id", length = 100, nullable = false, unique = true)
	private String userId;
	
	@Column(length = 100, nullable = false)
	private String userPwd;
	
	@Column(length = 100, nullable = false)
	private String userNm;
	
	@Column(length = 11, columnDefinition = "char", nullable = false, unique = true)
	private String userTel;
	
	@Column(length = 11, nullable = false)
	private int authorithy;
	
	@Column(nullable = false)
	@CreatedDate
	private LocalDateTime regDt;
	
	@Column(length = 100, nullable = false)
	private String comNm;
	
	@OneToOne
	@JoinColumn(name = "addr_uuid")
	private AddressEntity addressEntity;
}
