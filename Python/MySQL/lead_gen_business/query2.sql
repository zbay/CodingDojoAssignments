SELECT clients.client_id, SUM(amount) AS revenue
FROM billing
JOIN clients ON billing.client_id = clients.client_id
WHERE clients.client_id = 2
GROUP BY clients.client_id;