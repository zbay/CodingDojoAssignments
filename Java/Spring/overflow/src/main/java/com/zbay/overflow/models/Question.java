//wednesday: keys => templates => repos => services => controllers

package com.zbay.overflow.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name="questions")
public class Question {
	
    @Id
    @GeneratedValue
    private Long id;
    
    @Column
    @Size(min=1, max=255, message="Question size: 1 to 255 please!")
    private String question;
    
    @ManyToMany(fetch=FetchType.LAZY)
    @JoinTable(
    		name="tags_questions",
    		joinColumns=@JoinColumn(name="question_id"),
    		inverseJoinColumns = @JoinColumn(name="tag_id")
    )
    private List<Tag> tags;
    
	@OneToMany(mappedBy="question", fetch=FetchType.LAZY)
    private List<Answer> answers;
	
	@Column(updatable = false)
    private Date created_at;
	
	@Column
    private Date updated_at;
	
	public String tagString() {
		String tags = "";
		for(int i = 0; i < this.tags.size(); i++) {
			tags += this.tags.get(i).getSubject();
			if(i < this.tags.size()-1) {
				tags += ", ";
			}
		}
		return tags;
	}

	public List<Answer> getAnswers() {
		return answers;
	}

	public void setAnswers(List<Answer> answers) {
		this.answers = answers;
	}
	
	public Question() {}
	
    public List<Tag> getTags() {
		return tags;
	}

	public void setTags(List<Tag> tags) {
		this.tags = tags;
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public Date getCreated_at() {
		return created_at;
	}

	public void setCreated_at(Date created_at) {
		this.created_at = created_at;
	}

	public Date getUpdated_at() {
		return updated_at;
	}

	public void setUpdated_at(Date updated_at) {
		this.updated_at = updated_at;
	}
}
