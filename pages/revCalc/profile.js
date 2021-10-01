import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import tw from "tailwind-react-native-classnames";
import firebase from "../../config/firebaseConfig";
import { useAuth } from "../../contexts/authContext";
import { fonts } from "../../styles/global";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  const { logout, currentUser } = useAuth();

  useEffect(() => {
    let db = firebase.firestore();
    let userRef = db.collection("users").doc(currentUser.uid)

    userRef.onSnapshot(snapshot => {
      if (snapshot.data()) {
        setProfile(snapshot.data())
      }
    })
  }, [currentUser]);

  return (
    <View style={tw`items-center justify-center`}>
      <Text>Profile</Text>

      <Text>{profile.fullname}</Text>

      <TouchableOpacity
        style={tw.style("bg-gray-300 px-6 py-3")}
        onPress={logout}
      >
        <Text style={tw.style("", { fontFamily: fonts.semibold })}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
