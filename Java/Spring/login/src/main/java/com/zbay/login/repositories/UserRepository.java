package com.zbay.login.repositories;

import org.springframework.data.repository.CrudRepository;
import com.zbay.login.models.User;

public interface UserRepository extends CrudRepository<User, Long> {
    User findByEmail(String email);
}
