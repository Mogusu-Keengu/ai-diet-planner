import { CalendarAdd01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { useState } from "react";
import { Text, View } from "react-native";
import Button from "../components/shared/Button";
import Colors from "../shared/Colors";

const TodaysMealPlan = () => {
  const [mealPlan, setMealPlan] = useState();
  return (
    <View
      style={{
        marginTop: 15,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Today's Meal Plan
      </Text>

      {!mealPlan && (
        <View
          style={{
            display: "flex",
            alignItems: "center",
            padding: 20,
            backgroundColor: Colors.WHITE,
            marginTop: 15,
            borderRadius: 15,
          }}
        >
          <HugeiconsIcon
            icon={CalendarAdd01Icon}
            size={40}
            color={Colors.PRIMARY}
          />
          <Text
            style={{
              fontSize: 18,
              color: Colors.GRAY,
              marginTop: 20,
              textAlign: "center",
              marginBottom: 20,
            }}
          >
            You Don't have any meal plan for the Today.
          </Text>

          <Button title={"Create New Meal Plan"} />
        </View>
      )}
    </View>
  );
};

export default TodaysMealPlan;
