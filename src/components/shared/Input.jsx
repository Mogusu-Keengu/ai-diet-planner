import { Text, TextInput, View } from "react-native";

const Input = ({
  placeholder,
  password = false,
  onChangeText,
  value,
  label = "",
}) => {
  return (
    <View>
      <Text
        style={{
          fontWeight: "medium",
          textAlign: "center",
          fontSize: 18,
        }}
      >
        {label}
      </Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        secureTextEntry={password}
        onChangeText={(value) => onChangeText(value)}
        style={{
          padding: 15,
          borderWidth: 1,
          borderRadius: 10,
          fontSize: 20,
          width: "90%",
          paddingVertical: 15,
          marginTop: 2,
        }}
      />
    </View>
  );
};

export default Input;
