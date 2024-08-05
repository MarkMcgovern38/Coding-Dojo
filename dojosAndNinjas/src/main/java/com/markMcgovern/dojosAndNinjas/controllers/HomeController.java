package com.markMcgovern.dojosAndNinjas.controllers;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.markMcgovern.dojosAndNinjas.models.Dojo;
import com.markMcgovern.dojosAndNinjas.models.Ninjas;
import com.markMcgovern.dojosAndNinjas.services.DojoService;
import com.markMcgovern.dojosAndNinjas.services.NinjaService;

import jakarta.validation.Valid;




@Controller
public class HomeController {
	
	@Autowired
	private DojoService dServ;
	
	@Autowired
	private NinjaService nServ;

	@GetMapping("/")
	public String index(Model model) {
		
		List<Dojo>allDojos = dServ.getAllDojo();
		model.addAttribute("allDojos", allDojos);

		return "index.jsp";
	}
	
	@GetMapping("/dojos/new")
	public String newDojoPage(@ModelAttribute("dojo") Dojo dojo) {
	
		return "newDojo.jsp";
	}
	
	@PostMapping("/dojos/new")
	public String createDojo(
			@Valid @ModelAttribute("dojo") Dojo dojo,
			BindingResult result,
			Model model
			) {
		if(result.hasErrors()) {
			return "newDojo.jsp";
		}else {
			dServ.createDojo(dojo);
			return "redirect:/";
		}
		
		
	}
	
	@GetMapping("/ninjas/new")
	public String newNinjaPage(
			Model model,
			@ModelAttribute("ninja") Ninjas ninja) {
		model.addAttribute("dojos", dServ.getAllDojo());
		return "newNinja.jsp";
	}
	
	@PostMapping("/ninjas/new")
	public String createNinja(
			@Valid @ModelAttribute("ninja") Ninjas ninja,
			BindingResult result,
			Model model
			) {
		if(result.hasErrors()) {
			model.addAttribute("dojos", dServ.getAllDojo());
			return "newNinja.jsp";
		}else {
			nServ.createNinja(ninja);
			return "redirect:/";
		}
		
		
	}
	
	
	@GetMapping("/dojos/{id}")
	public String showDojo(@PathVariable("id") Long id, Model model) {
		model.addAttribute("dojo", dServ.getById(id));
		return "showDojo.jsp";
	}
	
}
