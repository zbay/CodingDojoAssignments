USE lead_gen_business;
SELECT MONTHNAME(charged_datetime) AS month, SUM(amount) AS revenue
FROM billing
WHERE MONTHNAME(charged_datetime) = "March"
AND YEAR(charged_datetime) = "2012"
GROUP BY MONTHNAME(charged_datetime);