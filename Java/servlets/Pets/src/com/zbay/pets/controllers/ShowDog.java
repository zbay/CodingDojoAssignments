package com.zbay.pets.controllers;
import java.io.IOException;
import javax.servlet.ServletException;
//import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.RequestDispatcher;
import com.zbay.pets.models.*;

public class ShowDog extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String name = request.getParameter("name");
		String breed = request.getParameter("breed");
		int weight = Integer.parseInt(request.getParameter("weight"));
		Dog dog = new Dog(name, breed, weight);
		request.setAttribute("dog", dog);
        RequestDispatcher view = request.getRequestDispatcher("/WEB-INF/showDog.jsp");
        view.forward(request, response);
	}
}
