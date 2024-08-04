package com.dixithproject.fullstackbackend.repository;

import com.dixithproject.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

//User Entity and the Long is the datatype of the primary key
public interface UserRepository extends JpaRepository<User,Long>
{

}
