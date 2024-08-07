package com.markMcgovern.safeTravels.models;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name="travel")
public class Travel {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotEmpty(message="Expense is required!")
    @Size(min = 2, max = 100, message="Name must be between 2 and 100 characters")
    private String expense;
    
    @NotEmpty(message="Vendor is required!")
    @Size(min = 2, max = 100, message="Name must be between 2 and 100 characters")
    private String vendor; 
    
    @NotNull
    @Min(value=0, message="Must be a positive number")
    private Double price;
    
    @NotEmpty(message="Description is required!")
    @Size(min = 5, max = 250, message="Name must be between 5 and 250 characters")
    private String description; 

    @Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;
    
    @PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
    @PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getExpense() {
		return expense;
	}
	public void setExpense(String expense) {
		this.expense = expense;
	}
	public String getVendor() {
		return vendor;
	}
	public void setVendor(String vendor) {
		this.vendor = vendor;
	}
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	public Date getUpdatedAt() {
		return updatedAt;
	}
	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}
	
	public Travel() {
		
	}
	

	public Travel(Long id,
			@NotEmpty(message = "Expense is required!") @Size(min = 2, max = 100, message = "Name must be between 2 and 100 characters") String expense,
			@NotEmpty(message = "Vendor is required!") @Size(min = 2, max = 100, message = "Name must be between 2 and 100 characters") String vendor,
			@NotEmpty(message = "Amount is required!") @Min(1) Double price,
			@NotEmpty(message = "Description is required!") @Size(min = 5, max = 250, message = "Name must be between 5 and 250 characters") String description,
			Date createdAt, Date updatedAt) {
	
		this.id = id;
		this.expense = expense;
		this.vendor = vendor;
		this.price = price;
		this.description = description;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
    
    
    
}
