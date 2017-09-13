SELECT clients.client_id, MONTHNAME(sites.created_datetime) AS month, YEAR(sites.created_datetime) AS year, COUNT(*) AS num_websites
FROM clients
JOIN sites ON clients.client_id = sites.site_id
WHERE clients.client_id IN (1, 20)
GROUP BY clients.client_id, MONTHNAME(sites.created_datetime), YEAR(sites.created_datetime);