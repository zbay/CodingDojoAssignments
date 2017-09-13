SELECT title, description, release_year, rating, special_features, category.name AS genre, rental_rate
FROM film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
WHERE rental_rate = 2.99
AND category.name = "Drama";