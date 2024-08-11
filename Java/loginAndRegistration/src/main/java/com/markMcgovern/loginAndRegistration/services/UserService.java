package com.markMcgovern.loginAndRegistration.services;

import java.util.List;
import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.markMcgovern.loginAndRegistration.models.LoginUser;
import com.markMcgovern.loginAndRegistration.models.User;
import com.markMcgovern.loginAndRegistration.repositories.UserRepository;
    

    
@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepo;
    
    // TO-DO: Write register and login methods!
    public User register(User newUser,BindingResult result) {
        // TO-DO: Additional validations!
    	

    	
    	Optional<User> exists = userRepo.findByEmail(newUser.getEmail());
    	
    	
    	if(exists.equals(null)) {
    		result.rejectValue("email","Matches","Email already in use");
    	}
    	
    	if(!newUser.getConfirm().equals(newUser.getPassword())) {
    		result.rejectValue("confirm","Matches", "Passwords do not match");
    	}
    	
    	if(result.hasErrors()) {
    		return null;
    	}
    	
    	String hashed = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
    	newUser.setPassword(hashed);
    	
    	return userRepo.save(newUser);
    }
    
    public List<User>getAllUsers( ){
    	return userRepo.findAll();
    }
    
    public User login(LoginUser newLoginObject, BindingResult result) {
    	
        // TO-DO: Additional validations

    	Optional<User> exists = userRepo.findByEmail(newLoginObject.getEmail());
    	if(exists.isEmpty()) {
    		result.rejectValue("email","Matches", "email does not exist");
    	}else {
    		if(!BCrypt.checkpw(newLoginObject.getPassword(), exists.get().getPassword())){
	    		result.rejectValue("password", "Matches", "Invalid Password!");
	    	}	
    	}

    	if(result.hasErrors()) {
    		return null;
    	}

    	return exists.get();
    	
        
    }
    
	public User getById(Long id) {
		
		Optional<User> result = userRepo.findById(id);
		if(result.isPresent()) {
			return result.get();
		}
		
		return null;
	}
}
