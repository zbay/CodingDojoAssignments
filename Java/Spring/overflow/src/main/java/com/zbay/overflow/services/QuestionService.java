package com.zbay.overflow.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.zbay.overflow.models.Answer;
import com.zbay.overflow.models.Question;
import com.zbay.overflow.models.Tag;
import com.zbay.overflow.repositories.AnswerRepository;
import com.zbay.overflow.repositories.QuestionRepository;
import com.zbay.overflow.repositories.TagRepository;

@Service
public class QuestionService {
	private QuestionRepository questionRepository;
	private AnswerRepository answerRepository;
	private TagRepository tagRepository;
	
	public QuestionService(QuestionRepository questionRepository, AnswerRepository answerRepository, TagRepository tagRepository) {
		this.questionRepository = questionRepository;
		this.answerRepository = answerRepository;
		this.tagRepository = tagRepository;
	}
	
	public Question newQuestion(String questionString, String[] tags) {
		Question question = new Question();
		question.setQuestion(questionString);
		ArrayList<Tag> tagList = new ArrayList<Tag>();
		int tagsLength = tags.length;
		if(tagsLength > 3) {
			tagsLength = 3;
		}
		for(int i = 0; i < tagsLength; i++) {
			tagList.add(getTagBySubject(tags[i]));
		}
		question.setTags(tagList);
		this.questionRepository.save(question);
		return question;
	}
	
	public void newAnswer(String answerString, Long id) {
		Question question = this.questionRepository.findOne(id);
		Answer answer = new Answer();
		answer.setAnswer(answerString);
		answer.setQuestion(question);
		this.answerRepository.save(answer);
	}
	
	public Tag getTagBySubject(String subject) { // creates tag if it doesn't exist. returns the tag in either case
		if(this.tagRepository.findTagByName(subject).size() == 0) {
			Tag newTag = new Tag();
			newTag.setSubject(subject);
			this.tagRepository.save(newTag);
			return newTag;
		}
		else {
			return this.tagRepository.findTagByName(subject).get(0);
		}
	}
	
	public List<Question> getAllQuestions() {
		return this.questionRepository.findAll();
	}
	
	public Question getQuestionById(Long id) {
		return this.questionRepository.findOne(id);
	}
}
