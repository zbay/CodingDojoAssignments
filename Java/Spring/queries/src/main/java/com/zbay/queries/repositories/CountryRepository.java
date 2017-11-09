package com.zbay.queries.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.zbay.queries.models.City;
import com.zbay.queries.models.Country;
import com.zbay.queries.models.Language;

public interface CountryRepository extends CrudRepository<Country, Long>{
	@Query(value="SELECT c FROM Country c"
			+ " JOIN c.languages l WHERE language = 'Slovene'"
			+ " ORDER BY percentage DESC")
	List<Country> findCountriesSpeakingSlovene();
	
	@Query(value="SELECT co.name AS name, COUNT(*) AS count"
			+ " FROM cities ci"
			+ " JOIN countries co ON co.id = ci.country_id"
			+ " GROUP BY co.name", 
			nativeQuery=true)
	List<Object[]> findCitiesPerCountryCount();

	
	@Query(value="SELECT c FROM Country c" + 
			"WHERE c.surface_area < 502 AND c.population > 100000")
	List<Country> findSmallDenseCountries();
	
	@Query(value="SELECT c FROM Country c"
			+ " WHERE c.government_form = 'Constitutional Monarchy'"
			+ " AND c.life_expectancy > 75"
			+ " AND c.capital > 200")
	List<Country> findOldMonarchies();
	
	@Query(value="SELECT COUNT(*) AS count, co.region AS region"
			+ " FROM countries co GROUP BY co.region"
			+ " ORDER BY count DESC", nativeQuery=true)
	List<Object[]> findCount();
}
