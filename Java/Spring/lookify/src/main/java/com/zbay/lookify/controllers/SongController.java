package com.zbay.lookify.controllers;

import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.zbay.lookify.models.Song;
import com.zbay.lookify.services.SongService;

@Controller
public class SongController {
	private final SongService songService;
	
    public SongController(SongService songService){
        this.songService = songService;
    }
    
    @RequestMapping("/")
    public String home() {
    	return "index";
    }

    @RequestMapping("/dashboard")
    public String dashboard(Model model) {
    	List<Song> songs = songService.allSongs();
    	model.addAttribute("songs", songs);
    	return "dashboard";
    }
    
    @PostMapping("/search")
    public String search(@RequestParam(value="artistText") String artistText) {
    	if(artistText.length() > 0) {
    		return "redirect:/search/artist/" + artistText;	
    	}
    	else {
    		return "redirect:/dashboard";
    	}
    }
    
    @RequestMapping("/search/topTen")
    public String topTen(Model model) {
    	List<Song> songs = songService.topSongs();
    	model.addAttribute("songs", songs);
    	return "topten";
    }
    
    @RequestMapping("/search/artist/{artistText}")
    public String searchResults(Model model, @PathVariable("artistText") String artistText) {
    	List<Song> artistSongs = songService.songsByArtist(artistText);
    	model.addAttribute("artistText", artistText);
    	model.addAttribute("songs", artistSongs);
    	return "search";
    }
    
    @RequestMapping(path="songs/new", method=RequestMethod.GET)
    public String newSongForm(Model model) {
    	model.addAttribute("song", new Song());
    	return "new";
    }
   
    @RequestMapping(path="songs/new", method=RequestMethod.POST)
    public String newSong(@Valid @ModelAttribute("song") Song song, BindingResult result, Model model) {
        if (result.hasErrors()) {
            return "new";
        }
        else{
        	this.songService.newSong(song);
        	return "redirect:/dashboard";
        }
    }
    
    @RequestMapping(path="/songs/{id}", method=RequestMethod.GET)
    public String song(@PathVariable("id") long id, Model model) {
    	Song song = songService.getSongById(id);
    	model.addAttribute("song", song);
    	return "song";
    }
    
    @RequestMapping("/songs/delete/{id}")
    public String deleteSong(@PathVariable("id") long id, final HttpServletRequest request) {
    	this.songService.deleteSong(id);
    	final String referer = request.getHeader("referer");
    	// if referer contains dashboard, return dashboard. If it contains search, return everything after 8080/
    	if(referer.indexOf("/search") > -1){
    		return "redirect:/" + referer.substring(referer.indexOf("/search/") + 1);
    	}
    	else {
    		return "redirect:/dashboard";
    	}
    }
    
}