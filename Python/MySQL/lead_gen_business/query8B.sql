USE lead_gen_business;
SELECT clients.client_id, CONCAT(clients.first_name, " ", clients.last_name) AS client_name,
 sites.domain_name AS website, COUNT(leads.leads_id) AS number_of_leads
FROM clients
LEFT JOIN sites ON sites.client_id = clients.client_id
LEFT JOIN leads ON leads.site_id = sites.site_id
GROUP BY clients.client_id, sites.domain_name;