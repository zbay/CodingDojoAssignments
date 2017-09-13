SELECT name, language, percentage FROM countries
JOIN languages ON countries.id = languages.country_id
WHERE language = 'Slovene' 
ORDER BY percentage DESC;