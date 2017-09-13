SELECT clients.client_id, CONCAT(clients.first_name, " ", clients.last_name) AS client_name, COUNT(leads.leads_id) AS num_leads, MONTHNAME(leads.registered_datetime) AS month_generated
FROM clients
JOIN sites ON sites.client_id = clients.client_id
JOIN leads ON leads.site_id = sites.site_id
WHERE leads.registered_datetime BETWEEN "2011-01-01" AND "2011-06-30"
GROUP BY clients.client_id, MONTHNAME(leads.registered_datetime);