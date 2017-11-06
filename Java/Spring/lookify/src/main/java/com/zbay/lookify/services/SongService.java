package com.zbay.lookify.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.zbay.lookify.models.Song;
import com.zbay.lookify.repositories.SongRepository;

@Service
public class SongService {
	private SongRepository songRepository;
	
    public SongService(SongRepository songRepository) {
    	this.songRepository = songRepository;
    }
	
    public List<Song> allSongs(){
    	return songRepository.findAll();
    }
    
    public List<Song> songsByArtist(String search){
    	return songRepository.findByArtistContaining(search);
    }
    
    public List<Song> topSongs(){
    	return songRepository.findTop10ByOrderByRatingDesc();
    }
    
    public void deleteSong(Long id) {
    	songRepository.delete(id);
    }
 
    public void newSong(Song newSong) {
    	songRepository.save(newSong);
    }
    
    public Song getSongById(Long id) {
    	return songRepository.findOne(id);
    }
}
