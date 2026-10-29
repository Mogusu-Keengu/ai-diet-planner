import { useQuery } from "convex/react";
import { useLocalSearchParams } from "expo-router";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { api } from "../../../convex/_generated/api";
import RecipeIngredients from "../../components/RecipeIngredients";
import RecipeIntro from "../../components/RecipeIntro";
import Colors from "../../shared/Colors";
export default function RecipeDetail() {
  const { recipeId } = useLocalSearchParams();
  console.log(recipeId); //jh74et3twmq7nf6c8cdvgg7pn98h6yj5

  const recipeDetail = useQuery(api.Recipes.GetRecipeById, {
    id: recipeId == undefined && "jh74et3twmq7nf6c8cdvgg7pn98h6yj5",
  });
  console.log("recipeDetail", recipeDetail);

  return (
    <FlatList
      data={[]}
      renderItem={() => null}
      ListHeaderComponent={
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: "#fff",
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 20,
            backgroundColor: Colors.WHITE,
          }}
        >
          {/* Recipe Intro */}
          <RecipeIntro recipeDetail={recipeDetail} />
          {/* {Recipe Ingredients} */}
          <RecipeIngredients recipeDetail={recipeDetail} />
          {/* cooking steps */}
        </SafeAreaView>
      }
    ></FlatList>
  );
}
