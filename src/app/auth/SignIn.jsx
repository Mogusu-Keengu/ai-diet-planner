import { useConvex } from "convex/react";
import { Link } from "expo-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { Alert, Image, Text, View } from "react-native";
import { UserContext } from "../../../context/UserContext";
import { api } from "../../../convex/_generated/api";

import Button from "../components/shared/Button";
import Input from "../components/shared/Input";

const SignIn = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const convex = useConvex();
  const { user, setUser } = useContext(UserContext);

  const onSignIn = () => {
    if (!email || !password) {
      Alert.alert("Missing Fields!", "Enter All field Values");
      return;
    }

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user.email);

        // ...
        const userData = await convex.query(api.Users.GetUser, {
          email: user.email.toLowerCase().trim(),
        });
        console.log(userData);
        setUser(userData);
      })
      .catch((error) => {
        console.error("Sign in error:", error);
        Alert.alert("Authentication Failed", "Incorrect email and password");
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Image
        source={require("../../../assets/images/bg2.png")}
        style={{
          width: 150,
          height: 150,
          marginTop: 60,
        }}
      />

      <Text style={{ fontSize: 35, fontWeight: "bold" }}>Welcome Back</Text>
      <View
        style={{
          marginTop: 20,
          width: "100%",
          alignItems: "center",
        }}
      >
        <Input placeholder={"Email"} onChangeText={setEmail} value={email} />
        <Input
          placeholder={"Password"}
          password={true}
          onChangeText={setPassword}
          value={password}
        />
      </View>

      <View
        style={{
          marginTop: 55,
          width: "90%",
        }}
      >
        <Button title={"Sign In"} onPress={() => onSignIn()} />

        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            marginTop: 15,
          }}
        >
          Don't have an account ?{" "}
        </Text>

        <Link href="/auth/SignUp">
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              marginTop: 5,
              fontWeight: "bold",
            }}
          >
            Create New Account
          </Text>
        </Link>
      </View>
    </View>
  );
};

export default SignIn;
