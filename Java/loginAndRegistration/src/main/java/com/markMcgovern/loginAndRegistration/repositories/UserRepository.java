package com.markMcgovern.loginAndRegistration.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.markMcgovern.loginAndRegistration.models.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    
    public Optional<User> findByEmail(String email);
    
    public List<User>findAll();
    
}
