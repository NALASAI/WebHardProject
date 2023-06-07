package com.webHard.user.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

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
	@Column(length = 100, nullable = false)
	private String userUuid;
	
	@Column(length = 100, nullable = false, unique = true)
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
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="addr_uuid")
	private AddressEntity addrUuid;
	
}
