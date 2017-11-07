package com.zbay.licenses.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.zbay.licenses.models.Person;

public interface PersonRepository extends CrudRepository<Person, Long> {
	@Query(value="SELECT * FROM persons WHERE id NOT IN (SELECT person_id FROM licenses)", nativeQuery=true)
	List<Person> findAllUnlicensedPersons();
}
