import {
  Dumbbell01Icon,
  FemaleSymbolIcon,
  MaleSymbolIcon,
  PlusSignSquareIcon,
  WeightScaleIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { useMutation } from "convex/react";
import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { UserContext } from "../../../context/UserContext";
import { api } from "../../../convex/_generated/api";
import { CalculateCaloriesAI } from "../../../services/AiModel";
import Button from "../../components/shared/Button";
import Input from "../../components/shared/Input";
import Colors from "../../shared/Colors";
import Prompt from "../../shared/Prompt";

const Preference = () => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [gender, setGender] = useState();
  const [goal, setGoal] = useState();
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);
  const UpdateUserPref = useMutation(api.Users.UpdateUserPref);

  const onContinue = async () => {
    if (!weight || !height || !gender || !goal) {
      Alert.alert("Fill All details", "Enter all the details to continue");
      return;
    }

    const data = {
      uid: user?._id,
      weight: weight,
      height: height,
      gender: gender,
      goal: goal,
    };
    // calculate calories
    const PROMPT = JSON.stringify(data) + "\n" + Prompt.CALORIES_PROMPT;
    console.log(PROMPT);

    const AIResult = await CalculateCaloriesAI(PROMPT);
    console.log(AIResult.choices[0].message.content);
    const AIResp = AIResult.choices[0].message.content;
    const JSONContent = JSON.parse(
      AIResp.replace("```json", "").replace("```", ""),
    );
    console.log(JSONContent);

    const result = await UpdateUserPref({ ...data, ...JSONContent });

    setUser((prev) => ({ ...prev, ...data, ...JSONContent }));

    console.log(result);
    router.replace("/(tabs)/Home");
  };
  return (
    //SECTION 1
    <View
      style={{
        padding: 20,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 30,
        }}
      >
        Tell us about yourself
      </Text>
      <Text
        style={{
          fontSize: 16,
          textAlign: "center",
          color: Colors.GRAY,
          marginBottom: 15,
        }}
      >
        This helps us create your personalized meal plan
      </Text>
      {/* SECTION1 */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Input
            placeholder={"e.g 70"}
            label="Weight (kg)"
            onChangeText={setWeight}
          />
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <Input
            placeholder={"e.g 70"}
            label="Height (ft)"
            onChangeText={setHeight}
          />
        </View>
      </View>

      {/* SECTION 2 */}
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontWeight: "medium",
            fontSize: 18,
          }}
        >
          Gender
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => setGender("Male")}
            style={{
              flex: 1,
              borderWidth: 1,
              padding: 15,
              borderColor: gender == "Male" ? Colors.PRIMARY : Colors.GRAY,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <HugeiconsIcon
              icon={MaleSymbolIcon}
              size={40}
              color={Colors.BLUE}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setGender("Female")}
            style={{
              flex: 1,
              borderWidth: 1,
              padding: 15,
              borderColor: gender == "Female" ? Colors.PINK : Colors.GRAY,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <HugeiconsIcon
              icon={FemaleSymbolIcon}
              size={40}
              color={Colors.PINK}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* SECTION 3 */}
      <View
        style={{
          marginTop: 15,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "medium",
          }}
        >
          What's Your Goal ?
        </Text>
        <TouchableOpacity
          onPress={() => setGoal("Weight Loss")}
          style={[
            styles.goalContainer,
            {
              borderColor: goal == "Weight Loss" ? Colors.PRIMARY : Colors.GRAY,
            },
          ]}
        >
          <HugeiconsIcon icon={WeightScaleIcon} />
          <View>
            <Text style={styles.goalText}>Weight Loss</Text>
            <Text>Reduce body fat & get leaner</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setGoal("Muscle Gain")}
          style={[
            styles.goalContainer,
            {
              borderColor: goal == "Muscle Gain" ? Colors.PRIMARY : Colors.GRAY,
            },
          ]}
        >
          <HugeiconsIcon icon={Dumbbell01Icon} />
          <View>
            <Text style={styles.goalText}>Muscle Gain</Text>
            <Text>Build Muscle & get Stronger</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setGoal("Weight Gain")}
          style={[
            styles.goalContainer,
            {
              borderColor: goal == "Weight Gain" ? Colors.PRIMARY : Colors.GRAY,
            },
          ]}
        >
          <HugeiconsIcon icon={PlusSignSquareIcon} />
          <View>
            <Text style={styles.goalText}>Weight Gain</Text>
            <Text>Increase healthy body mass</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginTop: 50,
        }}
      >
        <Button onPress={onContinue} title={"Continue"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  goalContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 15,
    marginTop: 10,
  },
  goalText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  goalSubText: {
    color: Colors.GRAY,
  },
});

export default Preference;
