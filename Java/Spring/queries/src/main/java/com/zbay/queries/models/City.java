package com.zbay.queries.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

@Entity
@Table(name="countries")
public class City {
    @Id
    @GeneratedValue
    private Long id;
    
    @Column
    @Size(max=35)
    private String name;
    
    @Column
    @Size(max=3)
    private String country_code;
    
    @Column
    @Size(max=20)
    private String district;
    
    @Column
    @Min(0)
    private int population;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="country_id")
    private Country country;    
    
}
