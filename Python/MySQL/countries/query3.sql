SELECT cities.name, cities.population
FROM cities
JOIN countries
ON countries.id = cities.country_id
WHERE cities.population > 500000
AND countries.name = "Mexico";