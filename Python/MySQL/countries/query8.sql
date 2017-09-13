SELECT countries.region, COUNT(*) AS Countries
FROM countries
GROUP BY countries.region
ORDER BY Countries DESC;