package com.webHard.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webHard.user.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

}
