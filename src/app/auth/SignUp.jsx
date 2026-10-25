import { useMutation } from "convex/react";
import { Link } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { Alert, Image, Text, View } from "react-native";
import { UserContext } from "../../../context/UserContext";
import { api } from "../../../convex/_generated/api";
import { auth } from "../../../services/FirebaseConfig";
import Button from "../components/shared/Button";
import Input from "../components/shared/Input";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createNewUser = useMutation(api.Users.CreateNewUser);
  const { user, setUser } = useContext(UserContext);

  const onSignIn = () => {
    if (!name || !email || !password) {
      Alert.alert("Missing Fields!", "Enter All field Values");
      return;
    }

    // const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        if (user) {
          const result = await createNewUser({
            name: name,
            email: email,
          });
          console.log(result);
          setUser(result);
        }

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);

        // ..
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

      <Text style={{ fontSize: 35, fontWeight: "bold" }}>
        Create a new Account
      </Text>
      <View
        style={{
          marginTop: 20,
          width: "100%",
          alignItems: "center",
        }}
      >
        <Input placeholder={"Full Name"} onChangeText={setName} value={name} />
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
        <Button title={"Create Account"} onPress={() => onSignIn()} />

        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            marginTop: 15,
          }}
        >
          Already have an account ?{" "}
        </Text>

        <Link href="/auth/SignIn">
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              marginTop: 5,
              fontWeight: "bold",
            }}
          >
            Sign In Here
          </Text>
        </Link>
      </View>
    </View>
  );
};

export default SignUp;
