import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GenerateAIRecipe } from "../../../services/AiModel";
import RecipeOptionList from "../../components/RecipeOptionList";
import Button from "../../components/shared/Button";
import Colors from "../../shared/Colors";
import Prompt from "../../shared/Prompt";

const GenerateAiRecipe = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeOption, setRecipeOption] = useState([]);
  const GenerateRecipeOptions = async () => {
    setLoading(true);
    try {
      const PROMPT = input + Prompt.GENERATE_RECIPE_OPTION_PROMPT;
      const result = await GenerateAIRecipe(PROMPT);
      console.log(result.choices[0].message);
      const raw = result.choices[0].message.content;
      const clean = raw.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);
      setRecipeOption(parsed.recipes ?? []);
      console.log(recipeOption);

      //   setRecipes(parsed.recipes ?? []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      //   console.log(error);
      console.log("Status:", error.status);
      console.log("Details:", JSON.stringify(error.error, null, 2));
    }
    //Make ai call to generate recipe options
  };
  useEffect(() => {
    console.log(recipeOption);
  }, [recipeOption]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: Colors.WHITE,
      }}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            backgroundColor: Colors.WHITE,
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            AI Recipe Generator
          </Text>
          <Text
            style={{
              marginTop: 5,
              color: Colors.GRAY,
              fontSize: 16,
            }}
          >
            Generate Personalized recipes using AI
          </Text>

          <TextInput
            //   value={input}
            onChangeText={(value) => setInput(value)}
            style={styles.textArea}
            placeholder="Enter your ingredient or recipe"
          />
          <Button
            onPress={GenerateRecipeOptions}
            title={"Generate Recipe"}
            loading={loading}
          />
        </View>
        {recipeOption?.length > 0 && (
          <RecipeOptionList recipeOption={recipeOption} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textArea: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 20,
    marginTop: 15,
    marginBottom: 25,
    height: 150,
    textAlignVertical: "top",
    backgroundColor: Colors.WHITE,
  },
});

export default GenerateAiRecipe;
