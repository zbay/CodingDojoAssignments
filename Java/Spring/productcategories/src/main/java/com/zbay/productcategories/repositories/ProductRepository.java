package com.zbay.productcategories.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.zbay.productcategories.models.Category;
import com.zbay.productcategories.models.Product;

public interface ProductRepository extends CrudRepository<Product, Long> {
	@Query(value="SELECT * FROM products WHERE id NOT IN "
			+ "(SELECT id FROM products p INNER JOIN categories_products cp ON p.id = cp.product_id WHERE cp.category_id = ?1)",
			nativeQuery=true)
	List<Product> findAllProductsNotInCategory(Long id);
}
