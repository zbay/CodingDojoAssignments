SELECT title, description, release_year, rating, special_features, category.name AS genre, CONCAT(first_name, " ", last_name) AS actor_name
FROM film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON category.category_id = film_category.category_id
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON actor.actor_id = film_actor.actor_id
WHERE category.name = "Action"
AND actor.first_name = "SANDRA" AND actor.last_name = "KILMER";