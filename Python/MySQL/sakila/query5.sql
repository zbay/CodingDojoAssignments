SELECT title, description, release_year, rating, special_features
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE rating = "G"
AND actor.actor_id = 15
AND special_features LIKE "%behind the scenes";