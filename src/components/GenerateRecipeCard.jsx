import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity } from "react-native";
import Colors from "../shared/Colors";

const GenerateRecipeCard = () => {
  return (
    <LinearGradient
      colors={[Colors.BLUE, Colors.PRIMARY]}
      style={{
        marginTop: 15,
        padding: 15,
        borderRadius: 10,
      }}
    >
      <Text
        style={{
          fontSize: 23,
          fontWeight: "bold",
          color: Colors.WHITE,
        }}
      >
        Need Meal Ideas ? ✨
      </Text>
      <Text
        style={{
          color: Colors.WHITE,
          fontWeight: 18,
          opacity: 0.8,
          marginTop: 7,
        }}
      >
        Let Our AI generate personalized recipes just for you !
      </Text>
      <TouchableOpacity
        style={{
          padding: 12,
          backgroundColor: Colors.WHITE,
          marginTop: 10,
          borderRadius: 8,
          width: 190,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 7,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: Colors.PRIMARY,
          }}
        >
          Generate with AI
        </Text>
        <HugeiconsIcon icon={ArrowRight02Icon} color={Colors.PRIMARY} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default GenerateRecipeCard;
