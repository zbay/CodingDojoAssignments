SELECT countries.name, COUNT(*) AS cities 
FROM countries
JOIN cities ON countries.id = cities.country_id
GROUP BY countries.id
ORDER BY cities DESC;