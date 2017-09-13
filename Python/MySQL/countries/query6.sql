SELECT name, government_form, capital, life_expectancy
FROM countries
WHERE capital > 200
AND government_form = "Constitutional Monarchy"
AND life_expectancy > 75;