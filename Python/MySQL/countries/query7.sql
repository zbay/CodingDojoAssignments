SELECT countries.name, cities.name, district, cities.population
FROM cities
JOIN countries
ON cities.country_id = countries.id
WHERE countries.name = "Argentina"
AND district = "Buenos Aires"
AND cities.population > 500000;