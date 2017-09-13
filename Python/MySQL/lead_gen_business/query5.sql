SELECT COUNT(leads.leads_id) AS num_leads, sites.domain_name
FROM sites
JOIN leads ON leads.site_id = sites.site_id
WHERE leads.registered_datetime BETWEEN "2011-01-01" AND "2011-02-15"
GROUP BY sites.domain_name;