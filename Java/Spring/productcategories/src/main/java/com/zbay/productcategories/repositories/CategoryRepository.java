package com.zbay.productcategories.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.zbay.productcategories.models.Category;
import com.zbay.productcategories.models.Product;

public interface CategoryRepository extends CrudRepository<Category, Long> {
	@Query(value="SELECT * FROM categories WHERE id NOT IN "
			+ "(SELECT id FROM categories c INNER JOIN categories_products cp ON c.id = cp.category_id WHERE cp.product_id = ?1)",
			nativeQuery=true)
	List<Category> findAllCategoriesNotOnProduct(Long id);
}
