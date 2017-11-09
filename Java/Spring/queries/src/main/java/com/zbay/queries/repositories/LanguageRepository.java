package com.zbay.queries.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.zbay.queries.models.Language;

public interface LanguageRepository extends CrudRepository<Language, Long>{
	@Query(value="SELECT c, l FROM Country c"
			+ " JOIN Country.languages l"
			+ " WHERE l.percentage > 89"
			+ " ORDER BY l.percentage DESC")
	List<Language> findPopularLanguages();
}
