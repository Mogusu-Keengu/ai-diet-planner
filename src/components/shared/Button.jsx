import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import Colors from "../../shared/Colors";

const Button = ({ title, onPress, icon, loading = false }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      style={{
        padding: 20,
        backgroundColor: Colors.PRIMARY,
        width: "100%",
        borderRadius: 10,
      }}
    >
      {loading ? (
        <ActivityIndicator color={Colors.WHITE} />
      ) : (
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            color: Colors.WHITE,
          }}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
