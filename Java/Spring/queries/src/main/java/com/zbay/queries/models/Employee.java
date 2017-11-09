package com.zbay.queries.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name="employees")
public class Employee {
    @Id
    @GeneratedValue
    private Long id;
    
    @Column
    @Size(max=255)
    private String first_name;
    
    @Column
    @Size(max=255)
    private String last_name;
    
    public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public Employee getEmployer() {
		return employer;
	}

	public void setEmployer(Employee employer) {
		this.employer = employer;
	}

	public List<Employee> getEmployees() {
		return employees;
	}

	public void setEmployees(List<Employee> employees) {
		this.employees = employees;
	}

	@ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="employer_id")
    private Employee employer;
    
    @OneToMany(mappedBy="employer", fetch=FetchType.LAZY)
    private List<Employee> employees;

    
	
}
