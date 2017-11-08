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
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name="tags")
public class Tag {
	
    @Id
    @GeneratedValue
    private Long id;
    
    @Column(unique=true)
    @Size(min=1, max=255, message="Tag size: 1 to 255, please!")
    private String subject;
    
	@Column(updatable = false)
    private Date created_at;
	
	@Column
    private Date updated_at;
    
    @ManyToMany(fetch=FetchType.LAZY)
    @JoinTable(
    		name="tags_questions",
    		joinColumns=@JoinColumn(name="tag_id"),
    		inverseJoinColumns = @JoinColumn(name="question_id")
    )
    private List<Question> questions;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
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
