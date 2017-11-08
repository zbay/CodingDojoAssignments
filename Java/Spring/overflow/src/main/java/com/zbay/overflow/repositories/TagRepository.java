package com.zbay.overflow.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.zbay.overflow.models.Tag;

public interface TagRepository extends CrudRepository<Tag, Long> {
	@Query(value="SELECT * FROM tags WHERE subject = ?1", nativeQuery=true)
	List<Tag> findTagByName(String tag);
}
