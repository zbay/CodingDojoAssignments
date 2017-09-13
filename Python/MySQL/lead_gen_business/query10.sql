SELECT CONCAT(clients.first_name, " ", clients.last_name) AS client_name, GROUP_CONCAT(sites.domain_name) AS sites
FROM clients
LEFT JOIN sites ON sites.client_id = clients.client_id
GROUP BY CONCAT(clients.first_name, " ", clients.last_name);