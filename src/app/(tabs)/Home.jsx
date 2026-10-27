import { useRouter } from "expo-router";
import { useContext, useEffect } from "react";
import { View } from "react-native";
import { UserContext } from "../../../context/UserContext";
import GenerateRecipeCard from "../../components/GenerateRecipeCard";
import HomeHeader from "../../components/HomeHeader";
import TodayProgress from "../../components/TodayProgress";

const Home = () => {
  const { user } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (!user?.weight) {
      router.replace("/preference");
    }
  }, [user]);
  return (
    <View
      style={{
        padding: 15,
      }}
    >
      <HomeHeader />
      <TodayProgress />
      <GenerateRecipeCard />
    </View>
  );
};

export default Home;
