export default {
  CALORIES_PROMPT: `Based on Weight, Height, Gender, Goal give me calories and proteins I need daily Consider Age as 28 in Json format and follow the schema:
    {
        calories: <>,
        proteins: <>
    }`,
  GENERATE_RECIPE_OPTION_PROMPT: `
Give me 3 different recipe variants using the ingredients or idea above. Add a relevant emoji befre the recipe name.
Respond with JSON only, no extra text, no markdown, following this schema:
{
  "recipes": [
    {
      "recipeName": "<string>",
      "description": "<string, max 2 lines>",
      "ingredients": ["<string>"],
    }
  ]
}`,
  GENERATE_COMPLETE_RECIPE_PROMPT: `
- As per recipeName and description give me recipeName, description, and the full recipe.
- Give emoji icons for each ingredient as icon, quantity along with the ingredient name.
- Give total calories as calories (only number), and cook time in minutes as cookTime (only number).
- Give a realistic image text prompt as per the recipe as imagePrompt.
- Give me a category list for the recipe from [Breakfast, Lunch, Dinner, Salad, Dessert, Fastfood, Drink, Cake].
- Give me the response in JSON format only, no extra text and no markdown.
- Schema format should be:
{
  "description": "string",
  "recipeName": "string",
  "calories": "number",
  "category": ["string"],
  "cookTime": "number",
  "imagePrompt": "string",
  "ingredients": [
    {
      "icon": "string",
      "ingredient": "string",
      "quantity": "string"
    }
  ],
  "serveTo": "number",
  "steps": ["string"]
}`,
  //   GENERATE_RECIPE_OPTION_PROMPT: `:Depends on user instructions create 3 different Recipe Variants with Recipe Name with emoji
  //     2 line description and main ingredients list in JSON format with fiels recipeName, description, ingredients(without size) only`,
};
