package com.groupxyz.SpringBootCRUD.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.groupxyz.SpringBootCRUD.Dto.Student;

public interface StudentRepository extends JpaRepository<Student, Integer> {

}