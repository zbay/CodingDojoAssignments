SELECT film.title, film.description, film.release_year
FROM film
JOIN film_actor ON film_actor.film_id = film.film_id
WHERE actor_id = 5;