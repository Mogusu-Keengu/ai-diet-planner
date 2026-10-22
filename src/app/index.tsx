import { Dimensions, Image, Text, View } from "react-native";
import Button from "./components/shared/Button";
import Colors from "./shared/Colors";
export default function Index() {
  return (
    <View>
      <Image
        source={require("../../assets/images/bg1.png")}
        style={{
          width: "100%",
          height: Dimensions.get("screen").height,
        }}
      />

      <View
        style={{
          position: "absolute",
          height: Dimensions.get("screen").height,
          backgroundColor: "#0707075e",
          width: "100%",
          display: "flex",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Image
          source={require("../../assets/images/bg2.png")}
          style={{
            width: 150,
            height: 150,
            marginTop: 100,
          }}
        />

        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: Colors.WHITE,
          }}
        >
          AI Diet Planner
        </Text>

        <Text
          style={{
            textAlign: "center",
            marginHorizontal: 20,
            fontSize: 20,
            color: Colors.WHITE,
            marginTop: 15,
            opacity: 0.8,
          }}
        >
          Craft delicious, Healthy ,mean plans tailored just for you. Achieve
          your goal with ease!
        </Text>
      </View>
      <View
        style={{
          position: "absolute",
          width: "100%",
          bottom: 25,
          padding: 20,
        }}
      >
        <Button
          title={"Get Started"}
          onPress={() => console.log("Button Clicked")}
        />
      </View>
    </View>
  );
}
