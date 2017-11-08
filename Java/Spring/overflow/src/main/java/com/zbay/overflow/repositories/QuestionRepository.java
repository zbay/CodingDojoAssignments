package com.zbay.overflow.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.zbay.overflow.models.Question;

public interface QuestionRepository extends CrudRepository<Question, Long> {
	List<Question> findAll();
}
