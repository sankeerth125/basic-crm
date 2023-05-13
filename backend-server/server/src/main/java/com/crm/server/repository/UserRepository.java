package com.crm.server.repository;

import com.crm.server.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Long> {

    //@Query(value = "SELECT COUNT(*) FROM myDatabase.users WHERE username = :username", nativeQuery = true) can use manual query this way
    int countByUsername(@Param("username") String username);
}
