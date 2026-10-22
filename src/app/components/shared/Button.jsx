import Colors from "@/app/shared/Colors";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: 20,
        backgroundColor: Colors.PRIMARY,
        width: "100%",
        borderRadius: 10,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          color: Colors.WHITE,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
