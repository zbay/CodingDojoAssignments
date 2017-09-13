SELECT clients.client_id, sites.domain_name
FROM clients
JOIN sites ON clients.client_id = sites.client_id
WHERE clients.client_id = 10;