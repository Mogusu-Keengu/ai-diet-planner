import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { GenerateAIRecipe } from "../../services/AiModel";
import Colors from "../shared/Colors";
import Prompt from "../shared/Prompt";
import LoadingDialog from "./LoadingDialog";

const RecipeOptionList = ({ recipeOption }) => {
  const [loading, setLoading] = useState(false);
  const onRecipeOptionSelect = async (recipe) => {
    console.log("PRESSED");
    setLoading(true);
    const PROMPT =
      "RecipeName" +
      recipe?.recipeName +
      "Description: " +
      recipe?.description +
      Prompt.GENERATE_COMPLETE_RECIPE_PROMPT;

    try {
      const result = await GenerateAIRecipe(PROMPT);
      const raw = result.choices[0].message.content;
      const clean = raw.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);
      console.log(parsed);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Select Recipe
      </Text>

      <View>
        {recipeOption?.map((item, index) => (
          <TouchableOpacity
            onPress={() => {
              onRecipeOptionSelect(item);
            }}
            key={index}
            style={{
              padding: 15,
              borderWidth: 0.2,
              borderRadius: 15,
              marginTop: 15,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {item?.recipeName}
            </Text>
            <Text
              style={{
                color: Colors.GRAY,
              }}
            >
              {item?.description}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <LoadingDialog loading={loading} />
    </View>
  );
};

export default RecipeOptionList;
