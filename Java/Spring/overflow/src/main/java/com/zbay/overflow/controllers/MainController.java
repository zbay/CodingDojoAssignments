package com.zbay.overflow.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.zbay.overflow.models.Answer;
import com.zbay.overflow.models.Question;
import com.zbay.overflow.services.QuestionService;

@Controller
public class MainController {
	
	/*
	@InitBinder
	public void initBinder(WebDataBinder binder) {
	
		// where class of desired input is List, and named tags, convert from String element to something of List type
        binder.registerCustomEditor(List.class, "tags", new CustomCollectionEditor(List.class) {                
	               
	        public void setAsText(String element) {
	        	// information coming from the form
	        	String[] listOfTagString = element.split(", ");
	        	List<Tag> listOfTags = new ArrayList<Tag>();
	        	
	        	int maxLength = listOfTagString.length > 2 ? 3 : listOfTagString.length;
	        	
	        	for(int i = 0; i < maxLength; i++) {
	        		listOfTags.add(tagService.findOrCreateTag(listOfTagString[i]));
	        	}
	        	
	        	// set the value of the element to be a list of tags
	        	setValue(listOfTags);
	        }
        }); 
	}
	 */
	
	private final QuestionService questionService;
	
	public MainController(QuestionService questionService) {
		this.questionService = questionService;
	}

    @RequestMapping("/")
    public String home() {
    	return "redirect:/questions";
    }
    
    @RequestMapping("/questions")
    public String dashboard(Model model) {
    	model.addAttribute("questions", this.questionService.getAllQuestions());
    	return "dashboard";
    }
    
    @RequestMapping(path="/questions/new", method=RequestMethod.GET)
    public String newQuestion(Model model) {
    	model.addAttribute("question", new Question());
    	return "newQuestion";
    }
    
    @RequestMapping(path="/questions/new", method=RequestMethod.POST)
    public String createQuestion(@RequestParam(value="tags", required=true) String tags,
    		@RequestParam(value="question", required=true) String question, Model model) {
    		boolean error = false;
        	if(tags.length() == 0) {
        		model.addAttribute("tagError", "Please enter one to three tags, comma separated!");
        		error = true;
        	}
        	if(question.length() == 0 || question.length() > 255){
        		model.addAttribute("questionError", "Question must be between 1 and 255 characters!!");
        		error = true;
        	}
        	if(error) {
        		return "newQuestion";
        	}
        	String[] tagStrings =  tags.split(",");
        	Question questionInstance = this.questionService.newQuestion(question, tagStrings);
        	return "redirect:/questions/" + questionInstance.getId();
    }
    
    @RequestMapping(path="/questions/{id}", method=RequestMethod.GET)
    public String question(Model model, @PathVariable("id") long id) {
    	model.addAttribute("question", this.questionService.getQuestionById(id));
    	model.addAttribute("response", new Answer());
    	return "question";
    }
 
    @RequestMapping(path="/questions/{id}", method=RequestMethod.POST)
    public String answerQuestion(@RequestParam(value="answer", required=true) String answer, Model model, @PathVariable("id") long id) {
        if (answer.length() == 0 || answer.length() > 255) {
        	model.addAttribute("answerError", "Answer must be between 1 and 255 characters!!");
        }
        else {
        	this.questionService.newAnswer(answer, id);
        }
        model.addAttribute("question", this.questionService.getQuestionById(id));
    	return "question";
    }
    
}
 