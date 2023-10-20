const recipesData = [
  {
    chefId: 1,
    recipes: [
      {
        name: "Spaghetti Carbonara",
        ingredients: [
          "200g spaghetti",
          "100g pancetta",
          "2 large eggs",
          "50g Pecorino cheese",
          "50g Parmesan cheese",
          "2 cloves of garlic",
          "Freshly ground black pepper",
        ],
        cookingMethod:
          "1. Cook spaghetti al dente. 2. Sauté pancetta and garlic until crisp. 3. Beat eggs, cheese, and pepper. 4. Mix all ingredients together. 5. Serve hot.",
        rating: 4.8,
      },
      {
        name: "Chicken Alfredo",
        ingredients: [
          "2 boneless, skinless chicken breasts",
          "8 oz fettuccine pasta",
          "1 cup heavy cream",
          "1 cup grated Parmesan cheese",
          "2 cloves of garlic",
          "Salt and pepper to taste",
        ],
        cookingMethod:
          "1. Cook chicken until browned. 2. Cook pasta al dente. 3. In a pan, combine cream, cheese, and garlic. 4. Toss pasta and chicken in the sauce. 5. Season with salt and pepper.",
        rating: 4.7,
      },
      {
        name: "Vegetable Stir-Fry",
        ingredients: [
          "2 cups mixed vegetables (bell peppers, broccoli, carrots, etc.)",
          "1/2 cup tofu or chicken (optional)",
          "2 tbsp soy sauce",
          "1 tbsp vegetable oil",
          "1 clove garlic",
          "1 tsp ginger",
          "1 tsp honey",
        ],
        cookingMethod:
          "1. Heat oil and sauté garlic and ginger. 2. Add tofu/chicken and cook. 3. Add vegetables and stir-fry. 4. Stir in soy sauce and honey. 5. Serve with rice or noodles.",
        rating: 4.5,
      },
      // Add more recipes for chef 1 if needed
    ],
  },
  {
    chefId: 2,
    recipes: [
      {
        name: "Pizza Margherita",
        ingredients: [
          "Pizza dough",
          "Tomato sauce",
          "Fresh mozzarella cheese",
          "Fresh basil leaves",
          "Olive oil",
          "Salt and pepper",
        ],
        cookingMethod:
          "1. Roll out pizza dough. 2. Spread tomato sauce. 3. Add mozzarella and basil. 4. Drizzle with olive oil, season with salt and pepper. 5. Bake until crust is golden.",
        rating: 4.9,
      },
      {
        name: "Caesar Salad",
        ingredients: [
          "Romaine lettuce",
          "Croutons",
          "Grated Parmesan cheese",
          "Caesar dressing",
          "Anchovy fillets (optional)",
          "Lemon juice",
          "Olive oil",
        ],
        cookingMethod:
          "1. Toss lettuce, croutons, and cheese. 2. Blend dressing, anchovies, lemon juice, and olive oil. 3. Drizzle over the salad. 4. Toss and serve.",
        rating: 4.6,
      },
      {
        name: "Beef Tacos",
        ingredients: [
          "1 lb ground beef",
          "Taco shells",
          "Taco seasoning mix",
          "Lettuce, tomato, cheese, sour cream (toppings)",
          "Salsa",
          "Avocado (optional)",
        ],
        cookingMethod:
          "1. Brown ground beef. 2. Add seasoning and water. 3. Fill taco shells. 4. Add toppings. 5. Serve with salsa and avocado if desired.",
        rating: 4.4,
      },
      // Add more recipes for chef 2 if needed
    ],
  },
  {
    chefId: 3,
    recipes: [
      {
        name: "Mushroom Risotto",
        ingredients: [
          "1 1/2 cups Arborio rice",
          "4 cups chicken or vegetable broth",
          "1 cup white wine",
          "1 lb mushrooms",
          "1 onion",
          "2 cloves garlic",
          "Butter and Parmesan cheese",
          "Fresh thyme",
          "Salt and pepper",
        ],
        cookingMethod:
          "1. Sauté mushrooms, onion, and garlic. 2. Add rice, wine, and thyme. 3. Gradually add hot broth. 4. Stir and cook until creamy. 5. Season with salt, pepper, butter, and Parmesan.",
        rating: 4.7,
      },
      {
        name: "Tofu and Vegetable Curry",
        ingredients: [
          "1 block tofu",
          "Mixed vegetables (e.g., bell peppers, carrots, peas)",
          "Curry paste",
          "Coconut milk",
          "Soy sauce",
          "Rice or naan (serving)",
          "Cilantro (garnish)",
        ],
        cookingMethod:
          "1. Sauté tofu and vegetables. 2. Add curry paste, coconut milk, and soy sauce. 3. Simmer until veggies are tender. 4. Serve over rice or with naan, garnished with cilantro.",
        rating: 4.5,
      },
      {
        name: "Chocolate Chip Cookies",
        ingredients: [
          "2 1/4 cups all-purpose flour",
          "1/2 cup granulated sugar",
          "1 cup brown sugar",
          "1 cup butter",
          "2 large eggs",
          "1 tsp vanilla extract",
          "1 tsp baking soda",
          "2 cups chocolate chips",
        ],
        cookingMethod:
          "1. Cream butter and sugars. 2. Add eggs and vanilla. 3. Combine dry ingredients, then mix in chocolate chips. 4. Drop spoonfuls on a baking sheet. 5. Bake until golden.",
        rating: 4.8,
      },
    ],
  },
  {
    chefId: 4,
    recipes: [
      {
        name: "Chicken Noodle Soup",
        ingredients: [
          "2 boneless, skinless chicken breasts",
          "8 cups chicken broth",
          "2 cups egg noodles",
          "Carrots, celery, onion",
          "Garlic, thyme, bay leaves",
          "Salt and pepper",
        ],
        cookingMethod:
          "1. Cook chicken in broth with vegetables, garlic, thyme, and bay leaves. 2. Remove chicken, shred it. 3. Cook noodles in the broth. 4. Add chicken back in. 5. Season with salt and pepper.",
        rating: 4.6,
      },
      {
        name: "Pancakes",
        ingredients: [
          "1 cup all-purpose flour",
          "2 tbsp sugar",
          "1 tsp baking powder",
          "1/2 tsp baking soda",
          "1/4 tsp salt",
          "1 cup buttermilk",
          "1 egg",
          "2 tbsp melted butter",
          "Maple syrup (serving)",
        ],
        cookingMethod:
          "1. Whisk dry ingredients. 2. Mix buttermilk, egg, and melted butter. 3. Combine wet and dry ingredients. 4. Cook pancakes on a griddle. 5. Serve with maple syrup.",
        rating: 4.7,
      },
      {
        name: "Grilled Steak",
        ingredients: [
          "2 bone-in ribeye steaks",
          "Salt and pepper",
          "Olive oil",
          "Fresh rosemary and thyme",
          "Garlic cloves",
        ],
        cookingMethod:
          "1. Season steaks with salt and pepper. 2. Rub with olive oil, rosemary, thyme, and garlic. 3. Grill to desired doneness. 4. Rest before serving.",
        rating: 4.9,
      },
    ],
  },
  {
    chefId: 5,
    recipes: [
      {
        name: "Salmon with Lemon-Dill Sauce",
        ingredients: [
          "4 salmon fillets",
          "2 lemons",
          "Fresh dill",
          "Olive oil",
          "Salt and pepper",
          "1/4 cup Greek yogurt",
          "1 clove garlic",
        ],
        cookingMethod:
          "1. Season salmon with olive oil, salt, and pepper. 2. Grill or bake until flaky. 3. Mix Greek yogurt, lemon juice, garlic, and dill for the sauce. 4. Serve salmon with the sauce.",
        rating: 4.7,
      },
      {
        name: "Caprese Bruschetta",
        ingredients: [
          "Baguette slices",
          "Tomatoes",
          "Fresh mozzarella cheese",
          "Fresh basil leaves",
          "Balsamic glaze",
          "Olive oil",
          "Garlic cloves",
          "Salt and pepper",
        ],
        cookingMethod:
          "1. Toast baguette slices. 2. Rub with garlic. 3. Top with sliced tomatoes, mozzarella, and basil. 4. Drizzle with balsamic glaze, olive oil, salt, and pepper.",
        rating: 4.6,
      },
      {
        name: "Berry and Spinach Smoothie",
        ingredients: [
          "1 cup spinach",
          "1/2 cup mixed berries (strawberries, blueberries, raspberries)",
          "1 banana",
          "1/2 cup Greek yogurt",
          "1 cup almond milk",
          "Honey (optional)",
        ],
        cookingMethod:
          "1. Blend spinach, berries, banana, Greek yogurt, and almond milk until smooth. 2. Add honey for sweetness if desired. 3. Serve as a healthy smoothie.",
        rating: 4.9,
      },
    ],
  },
  {
    chefId: 6,
    recipes: [
      {
        name: "Lemon Herb Roasted Chicken",
        ingredients: [
          "Whole chicken",
          "Lemons",
          "Fresh rosemary and thyme",
          "Garlic cloves",
          "Olive oil",
          "Salt and pepper",
        ],
        cookingMethod:
          "1. Rub chicken with olive oil, salt, pepper, and lemon zest. 2. Stuff with lemon halves, herbs, and garlic. 3. Roast until golden and cooked through.",
        rating: 4.8,
      },
      {
        name: "Shrimp Scampi",
        ingredients: [
          "1 lb large shrimp",
          "Linguine pasta",
          "Butter",
          "Olive oil",
          "Garlic cloves",
          "White wine",
          "Lemon juice",
          "Fresh parsley",
          "Red pepper flakes",
          "Salt and pepper",
        ],
        cookingMethod:
          "1. Cook linguine. 2. Sauté shrimp in butter and olive oil. 3. Add garlic, white wine, lemon juice, and red pepper flakes. 4. Toss with pasta and garnish with parsley.",
        rating: 4.7,
      },
      {
        name: "Mango Salsa",
        ingredients: [
          "2 ripe mangoes",
          "Red onion",
          "Fresh cilantro",
          "Lime juice",
          "Jalapeño pepper",
          "Salt and pepper",
        ],
        cookingMethod:
          "1. Dice mangoes and red onion. 2. Chop cilantro and jalapeño. 3. Mix with lime juice, salt, and pepper. 4. Serve as a refreshing salsa.",
        rating: 4.5,
      },
    ],
  },
];

export default recipesData;
