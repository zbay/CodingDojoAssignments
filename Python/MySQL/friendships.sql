INSERT INTO users (first_name, last_name, created_at, updated_at) 
VALUES('alan', 'anderson', NOW(), NOW()), ('bob', 'barker', NOW(), NOW()),
('chris', 'carson', NOW(), NOW()), ('dan', 'donaldson', NOW(), NOW());

INSERT INTO friendships
VALUES (1, 1, 2, NOW(), NOW()), (2, 1, 3, NOW(), NOW()), (3, 2, 4, NOW(), NOW());

SELECT users.first_name, users.last_name, user2.first_name AS friend_first_name, user2.last_name AS friend_last_name FROM users 
JOIN friendships ON users.id = friendships.user_id
JOIN users as user2 ON user2.id = friendships.friend_id
ORDER BY friend_last_name ASC;