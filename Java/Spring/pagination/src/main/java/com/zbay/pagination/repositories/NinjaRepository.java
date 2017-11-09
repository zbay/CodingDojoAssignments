package com.zbay.pagination.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.zbay.pagination.models.Ninja;

public interface NinjaRepository extends PagingAndSortingRepository<Ninja, Long> {
	Page<Ninja> findAll(Pageable pageable);
}
