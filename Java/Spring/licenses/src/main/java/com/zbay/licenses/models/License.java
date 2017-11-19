package com.zbay.licenses.models;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name="licenses")
public class License {
	
    @Id
    @GeneratedValue
    private Long id;
    
    @Column
    @Size(min=6, max=6, message="Number must be 6 digits long!")
    private String number;
    
    @Column
    private Date expiration_date;
    
    @Column
    @Size(min=2, message="Please fill in the state field!")
    private String state;
    
	@Column(updatable = false)
    private Date created_at;
    
	@Column
    private Date updated_at;
	
	@OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="person_id")
    private Person person;
	
	@PrePersist
	void createdAt() {
		this.created_at = new Date();
	}
	
	@PreUpdate
	void updatedAt() {
		this.updated_at = new Date();
	}	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public Date getExpiration_date() {
		return expiration_date;
	}
	
	public String getExpirationString() {
		return new SimpleDateFormat("MM/dd/yyyy").format(this.expiration_date);
	}

	public void setExpiration_date(Date expiration_date) {
		this.expiration_date = expiration_date;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public Person getPerson() {
		return person;
	}

	public void setPerson(Person person) {
		this.person = person;
	}
    
    public License() {}

}
