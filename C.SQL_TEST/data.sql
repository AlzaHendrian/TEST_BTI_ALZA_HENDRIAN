-- RESULTS1

SELECT DISTINCT item FROM `asset`;

-- RESULTS2

SELECT user_id, GROUP_CONCAT(item SEPARATOR ', ') AS asset
FROM asset
GROUP BY user_id;
