package com.zbay.dojos.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name="dojos")
public class Dojo {
    @Id
    @GeneratedValue
    private Long id;
  
    @Column
	@Size(min=1, max=45, message="Dojo name must be between 1 and 45 characters!!")
	private String name;

	@Column(updatable = false)
    private Date created_at;
	
	@Column
    private Date updated_at;
	
	@OneToMany(mappedBy="dojo", fetch = FetchType.LAZY)
	private List<Ninja> ninjas;
	
	
}
