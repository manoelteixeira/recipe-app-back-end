-- db/seed.sql
\c recipe_app;

INSERT INTO recipes(name,image,ingredients,instructions,serving,prepare_time,is_favorite) VALUES
('Adana Kebap',
'https://headbangerskitchen.com/wp-content/uploads/2022/12/ADANAKEBAB-H1.jpg',
'{"Ground beef","Red Bell Pepper", "Salt", Urfa Pepper}',
'{
"Start by either hand chopping or using a chopper to chop the peppers.",
"Season the mixture with salt, urfa pepper. Then run it through the food processor for a pastier more melt in the mouth kebab or leave as is after mixing for a more meaty kebab texture.",
"Leave in the fridge to get cold. Once cool then skewer the meat and cook.",
"Best to pan fry using some oil on a grill pan. Alternatively if you can cook over a barbecue or coals then do that, baste with some butter while cooking if you are.",
Serve with the salad once cooked. They don’t take very long to cook, the meat will be nice and firm that will indicate that it’s cooked.
}',
6,20,TRUE),
('Pão de Queijo',
'https://receitasnotadez.com.br/wp-content/uploads/2020/04/pao-de-queijo-brazilian-cheese-bread-3028981-hero-01-350503d3d0304dee952f75f6cca3fe8f-2048x1152.jpg',
'{"Sour Tapioca", "Milk", "Egg", "Salt", "Water", "Oil", "Parmesan cheese"}',
'{
"In a saucepan, boil the water and add the milk, oil and salt.",
"Add the tapica to little until give league. It may be that you do not need to use the 800g, so put it slowly and sove the dough until you drop out of your hand: this is the point.",
"When the dough is lukewarm, add the parmesan cheese, the eggs and mix well.",
"Use your hands and roll balls 2 cm in diameter.",
"Arrange the balls on an oil-rold baking sheet, leaving a space between them.",
"Bake in medium oven (180 C/ 360 F), preheated, for about 40 minutes."
}',
 3, 40, TRUE),
('Homemade Pizza',
'https://cdn.loveandlemons.com/wp-content/uploads/2019/06/homemade-pizza.jpg',
'{"Pizza sauce", "Fresh Bocconcini Mozzarella", "Cherry tomatoes", "Basil", "Red Pepper", "Extra-virgin olive oil"}',
'{
"Preheat the oven to 500°F.",
"Spread the pizza sauce onto the dough.",
"Top with the fresh mozzarella and tomatoes.",
"Bake for 10 to 12 minutes, or until the crust is browned."
}',
3, 80, FALSE);

