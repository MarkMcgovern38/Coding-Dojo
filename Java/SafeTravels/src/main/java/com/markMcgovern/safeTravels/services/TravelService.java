package com.markMcgovern.safeTravels.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.markMcgovern.safeTravels.models.Travel;
import com.markMcgovern.safeTravels.repositories.TravelRepository;

@Service
public class TravelService {
	
	@Autowired
	private TravelRepository travelRepo;
	
	public List<Travel> getAllTravel(){
		return travelRepo.findAll();
	}
	
	public Travel createTravel(Travel t) {
		
		return travelRepo.save(t);
	}
	
	public Travel getById(Long id) {
		Optional<Travel>someTravel= travelRepo.findById(id);
		
		if(someTravel.isEmpty()) {
		return null;
		}
		
		return someTravel.get();
	}

	public void deleteTravel(Long id) {
		
		travelRepo.deleteById(id);
	}
	

}
