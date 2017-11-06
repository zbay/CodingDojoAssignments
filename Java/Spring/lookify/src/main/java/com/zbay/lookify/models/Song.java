package com.zbay.lookify.models;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

@Entity
@Table(name="songs")
public class Song {

    @Id
    @GeneratedValue
    private Long id;
    
    @Column
	@Size(min=5, message="Song title must be at least 5 characters!")
	private String name;
   
    @Column
	@Size(min=2, message="Artist name must be at least 5 characters!")
	private String artist;
    
    @Column
    @Min(1)
    @Max(10)
    private int rating;
    
    public Song() {
    	this.name = "Untitled";
    	this.artist = "Anonymous";
    	this.rating = 1;
    }
    
    public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getArtist() {
		return artist;
	}

	public void setArtist(String artist) {
		this.artist = artist;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public Song(String name, String artist, int rating) {
    	this.name = name;
    	this.artist = artist;
    	this.rating = rating;    	
    }
}