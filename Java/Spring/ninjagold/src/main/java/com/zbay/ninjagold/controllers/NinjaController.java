package com.zbay.ninjagold.controllers;

import javax.servlet.http.HttpSession;
import java.util.Calendar;
import java.util.ArrayList;
import java.util.Random;
import java.text.SimpleDateFormat;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class NinjaController {
	
	@RequestMapping("/")
	public String root() {
		return "redirect:/Gold";
	}
	
	@RequestMapping("/Gold")
	public String index(HttpSession session) {
		if(session.getAttribute("gold") == null) {
			session.setAttribute("gold", new Double(0.0));
		}
		if(session.getAttribute("visits") == null) {
			session.setAttribute("visits", new ArrayList<String>());
		}
		return "index";
	}
	
	@RequestMapping(path="/visit", method=RequestMethod.POST)
	public String visit(HttpSession session, @RequestParam(value="destination") String destination) {
		Random random = new Random();
		Calendar cal = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat();
		
		String visitString = "You entered a ";
		double rando;
		if(destination.equals("Farm")) {
			rando = Math.floor(random.nextInt(11)) + 10;
			visitString += "farm and earned " + rando  + " gold. ";
		}
		else if(destination.equals("Cave")) {
			rando = Math.floor(random.nextInt(6)) + 5;
			visitString += "cave and earned " + rando  + " gold. ";
		}
		else if(destination.equals("House")) {
			rando = Math.floor(random.nextInt(3)) + 3;
			visitString += "farm and earned " + rando  + " gold. ";
		}
		else { //Casino
			visitString += "casino and ";
			rando = Math.floor(random.nextInt(100)) - 50;
			if(rando < 0) {
				visitString += "lost " + (rando * -1) + " gold. Ouch. ";
			}
			else {
				visitString += "earned " + rando + " gold. ";
			}
		}
		if(session.getAttribute("gold") == null) {
			session.setAttribute("gold", new Double(0.0));
		}
		if(session.getAttribute("visits") == null) {
			session.setAttribute("visits", new ArrayList<String>());
		}
		double gold = ((Double) session.getAttribute("gold")).doubleValue();
		session.setAttribute("gold", new Double(gold + rando));
		@SuppressWarnings("unchecked")
		ArrayList<String> visits = (ArrayList<String>) session.getAttribute("visits");
		visitString += "(" + new SimpleDateFormat("MMMMM dd, yyyy HH:mm a").format(cal.getTime()) + ")";
		visits.add(visitString);
		session.setAttribute("visits", visits);
		return "redirect:/Gold";
	}
	
}
