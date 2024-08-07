package com.markMcgovern.safeTravels.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;


import com.markMcgovern.safeTravels.models.Travel;
import com.markMcgovern.safeTravels.services.TravelService;

import jakarta.validation.Valid;

@Controller
public class HomeController {
	
	@Autowired
	private TravelService tServ;

	@GetMapping("/")
	public String index(Model model) {
		List<Travel>allTravels = tServ.getAllTravel();
		model.addAttribute("myTravel", new Travel());
		model.addAttribute("myTravelDataFromController", allTravels);
		return "index.jsp";
	}
	
	@GetMapping("/expenses")
	public List<Travel> getAll(){
		return tServ.getAllTravel();
	}
	
	
	@PostMapping("/")
	public String createTravel(
			@Valid @ModelAttribute("myTravel") Travel travel,
			BindingResult result,
			Model model
			) {
		
		List<Travel>allTravels = tServ.getAllTravel();
	    if(result.hasErrors()) {
	    	
	    	model.addAttribute("myTravelDataFromController", allTravels);
	    	return "index.jsp";
	    }
	        
		
		tServ.createTravel(travel);
		return "redirect:/";
	}

	
	
	@GetMapping("/expenses/{id}")
	public String getOneById(
		@PathVariable(value = "id")Long id,
		Model model) {
		
		Travel thisTravel = tServ.getById(id);
		model.addAttribute("travel", thisTravel);
		
		return "expense.jsp";
	}
	
	@GetMapping("/expenses/edit/{id}")
	public String updateTravelPage(
		@PathVariable("id") Long id,
		Model model) {
		
		Travel thisTravel = tServ.getById(id);
		model.addAttribute("travel", thisTravel);
		
		return "updatepage.jsp";
	}
	
	
    @PutMapping("/expenses/{id}")
    public String update(@Valid @ModelAttribute("travel") Travel travel,
    		BindingResult result,
    		Model model) {
        if (result.hasErrors()) {
            
            return "updatepage.jsp";
        } else {
            
        	tServ.createTravel(travel);
            return "redirect:/";
        }
    }
    
    @DeleteMapping("/expenses/{id}")
    public String destroy(@PathVariable("id") Long id) {
        tServ.deleteTravel(id);
        return "redirect:/";
    }

		
	

}
