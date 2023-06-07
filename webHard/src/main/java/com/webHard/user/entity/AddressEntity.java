package com.webHard.user.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "tbl_address")
@ToString
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddressEntity {
	
	@Id
	@OneToOne(mappedBy = "addrUuid")
	private String addrUuid;
	
	@Column(length = 11, nullable = false)
	private int zipNo;
	
	@Column(length = 100, nullable = false)
	private String doroCd;
	
	@Column(length = 100, nullable = false)
	private String detailCd;
	
}
