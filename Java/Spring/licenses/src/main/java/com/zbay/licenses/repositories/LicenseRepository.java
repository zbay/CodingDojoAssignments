package com.zbay.licenses.repositories;

import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

import com.zbay.licenses.models.License;

@Repository
public interface LicenseRepository extends CrudRepository<License, Long> {

}
