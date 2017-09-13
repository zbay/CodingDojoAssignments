SELECT store.store_id, first_name, last_name, email, address
FROM customer
JOIN address ON customer.address_id = address.address_id
JOIN city ON address.city_id = city.city_id
JOIN store ON store.store_id = customer.store_id
WHERE city.city_id IN (1, 42, 312, 459)
AND store.store_id = 1;