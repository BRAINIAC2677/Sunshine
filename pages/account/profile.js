import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import tw from "tailwind-react-native-classnames";
import firebase from "../../config/firebaseConfig";
import { useAuth } from "../../contexts/authContext";
import { colors, fonts } from "../../styles/global";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  const { logout, currentUser } = useAuth();

  useEffect(() => {
    let db = firebase.firestore();
    let userRef = db.collection("users").doc(currentUser.uid);

    userRef.onSnapshot((snapshot) => {
      if (snapshot.data()) {
        setProfile(snapshot.data());
      }
    });
  }, [currentUser]);

  return (
    <View
      style={tw.style("flex h-full items-center justify-center", {
        backgroundColor: colors.primaryBg,
      })}
    >
      <Image
          source={require("../../assets/solar-panel.png")}
          style={tw`w-32 h-32 mb-8`}
        />

      <Text
        style={tw.style("text-xl my-4", {
          fontFamily: fonts.semibold,
          color: colors.text3,
        })}
      >
        Welcome {profile?.fullname}
      </Text>

      <Text
        style={tw.style("mb-8 mx-12 text-center", {
          fontFamily: fonts.regular,
          color: colors.text3,
        })}
      >
        Let us build a cleaner world by using solar energy. We help you analyzing solar data and information of solar panels.
      </Text>

      

      <TouchableOpacity
        style={tw.style("px-6 py-3 rounded shadow", {backgroundColor: colors.accent})}
        onPress={logout}
      >
        <Text style={tw.style("", { fontFamily: fonts.semibold, color: "black" })}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
