SELECT products.name, products.price, users.name, users.email FROM `products`
	INNER JOIN `users` 
    ON products.user_id = users.id
    WHERE products.id = 4


    SELECT products.name, products.price, users.name, users.email FROM `products`
	INNER JOIN `users` 
    ON products.user_id = users.id
    WHERE users.name LIKE "%Khan"


    -- %khan  ends with word `khan`
    -- khan%  starts with word `khan`
    -- %khan%  word `khan` exists in between