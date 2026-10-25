import { FemaleSymbolIcon, MaleSymbolIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { Text, View } from "react-native";
import Input from "../../components/shared/Input";
import Colors from "../../shared/Colors";

const Preference = () => {
  return (
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
          <Input placeholder={"e.g 70"} label="Weight (kg)" />
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <Input placeholder={"e.g 70"} label="Height (ft)" />
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
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              padding: 15,
              borderColor: Colors.GRAY,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <HugeiconsIcon
              icon={MaleSymbolIcon}
              size={40}
              color={Colors.BLUE}
            />
          </View>
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              padding: 15,
              borderColor: Colors.GRAY,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <HugeiconsIcon
              icon={FemaleSymbolIcon}
              size={40}
              color={Colors.PINK}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Preference;
