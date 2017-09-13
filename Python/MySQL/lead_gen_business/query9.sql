SELECT CONCAT(clients.first_name, " ", clients.last_name) AS client_name, SUM(billing.amount) AS total_revenue,
  MONTHNAME(billing.charged_datetime) AS month_charge, YEAR(billing.charged_datetime) AS year_charge
FROM clients
JOIN billing ON billing.client_id = clients.client_id
GROUP BY CONCAT(clients.first_name, " ", clients.last_name), MONTHNAME(billing.charged_datetime), YEAR(billing.charged_datetime);