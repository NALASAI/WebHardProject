package com.webHard.user.entity;

import java.time.LocalDateTime;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

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
	@GeneratedValue(generator = "uuid2")
	@GenericGenerator(name = "uuid2", strategy = "uuid2")
	@Column(name = "addr_uuid")
	private UUID addrUuid;
	
	@Column(length = 11, nullable = false)
	private int zipNo;
	
	@Column(length = 100, nullable = false)
	private String doroCd;
	
	@Column(length = 100, nullable = false)
	private String detailCd;
	
}
