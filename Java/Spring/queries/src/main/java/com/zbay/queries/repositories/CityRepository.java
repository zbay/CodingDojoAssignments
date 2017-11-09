package com.zbay.queries.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.zbay.queries.models.City;

public interface CityRepository extends CrudRepository<City, Long>{
	@Query(value="SELECT ci FROM Country co"
			+ " JOIN co.cities ci"
			+ " WHERE co.name = 'Mexico'"
			+ " AND ci.population > 500000"
			+ " ORDER BY ci.population DESC")
	List<City> findBigMexicanCities();
	
	@Query(value="SELECT co, ci" 
			+ " FROM Country co JOIN co.cities ci"
			+ " WHERE co.name = 'Argentina'"
			+ " AND ci.district = 'Buenos Aires'"
			+ " AND ci.population > 50000")
	List<Object[]> findBigBuenosAiresSuburbs();
}
