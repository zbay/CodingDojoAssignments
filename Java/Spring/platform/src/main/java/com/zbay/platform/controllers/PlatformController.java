package com.zbay.platform.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PlatformController {
	
	@RequestMapping("/")
	public String index(Model model) {
		model.addAttribute("title", "");
		return "lesson";
	}
	
	@RequestMapping("m/{chapter}/0553/{lessonNumber}")
	public String lesson(@PathVariable String chapter, @PathVariable String lessonNumber, Model model) {
		if(chapter.equals("38") && lessonNumber.equals("0733")) {
			model.addAttribute("title", "Setting up your servers");
		}
		if(chapter.equals("38") && lessonNumber.equals("0342")) {
			model.addAttribute("title", "Punch Cards");
		}
		if(chapter.equals("26") && lessonNumber.equals("0348")) {
			model.addAttribute("title", "Advanced Fortran Intro");
		}
		return "lesson";
	}

	@RequestMapping("m/{chapter}/0483/{assignmentNumber}")
	public String assignment(@PathVariable String chapter, @PathVariable String assignmentNumber, Model model) {
		if(chapter.equals("38") && assignmentNumber.equals("0345")) {
			model.addAttribute("title", "Coding Forms");
		}
		if(chapter.equals("26") && assignmentNumber.equals("2342")) {
			model.addAttribute("title", "Fortran to Binary");
		}
		return "assignment";
	}
}