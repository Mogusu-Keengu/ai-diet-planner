import { TextInput } from "react-native";

const Input = ({ placeholder, password = false, onChangeText, value }) => {
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      secureTextEntry={password}
      onChange={(value) => onChangeText(value)}
      style={{
        padding: 15,
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 20,
        width: "90%",
        paddingVertical: 15,
        marginTop: 15,
      }}
    />
  );
};

export default Input;
