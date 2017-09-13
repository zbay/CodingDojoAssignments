SELECT first_name, last_name, email, address
FROM customer
JOIN address
ON customer.address_id = address.address_id
WHERE city_id = 312;