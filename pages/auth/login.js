import React from "react";
import {
  Image,
  Keyboard,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import tw from "tailwind-react-native-classnames";
import LoginForm from "../../components/forms/loginForm";
import SocialConnect from "../../components/forms/socialConnect";
import { useAuth } from "../../contexts/authContext";
import styles from "../../styles/auth";
import { colors } from "../../styles/global";

export default function Login({ navigation }) {
  const { login } = useAuth();

  function toSignup() {
    navigation.navigate("Signup");
  }

  return (
    <ScrollView style={tw.style("", { backgroundColor: colors.bg1 })}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Image
              source={require("../../assets/solar-panel.png")}
              style={tw`w-32 h-32 mb-8`}
            />
            <Text style={styles.title}>Solar Stat</Text>
          </View>

          <View>
            <LoginForm />
            {/* <TouchableOpacity>
              <Text style={styles.authInstruction}>Forgot Password?</Text>
            </TouchableOpacity> */}
          </View>

          <SocialConnect />

          <TouchableOpacity onPress={toSignup}>
            <Text style={tw.style("", styles.authInstruction)}>
              Don't have an account? Create now!
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}
