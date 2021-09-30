import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import tw from "tailwind-react-native-classnames";
import CustomTextInput from "../../components/forms/customTextInput";
import firebase from "../../config/firebaseConfig";
import { useAuth } from "../../contexts/authContext";
import { colors, fonts } from "../../styles/global";

const DataInput = () => {
  const [power, setPower] = useState()
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null)

  const {currentUser} = useAuth()

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const onSubmit = () => {
    let db = firebase.firestore()

    db.collection("users").doc(currentUser.uid)
      .onSnapshot(snapshot => {
        console.log(snapshot.data())
      })
  }

  useEffect(() => {

  }, [date])

  return (
    <View>
      <View style={tw`items-center justify-center`}>
        <Text
          style={tw.style("text-lg mt-12 mb-4", {
            fontFamily: fonts.regular,
            color: colors.primary,
          })}
        >
          Generated Energy (kW-hr)
        </Text>
        <CustomTextInput
          placeholder="eg, 700"
          onChangeText={setPower}
          value={power}
          icon="ios-sunny-outline"
        />

        {error && <Text style={tw.style("text-red-400 my-2 mr-auto px-10", {fontFamily: fonts.semibold})}>{error}</Text>}

        <View style={tw`flex-row items-center mt-6 mr-auto px-10`}>
          <Text style={tw.style("mr-2", {fontFamily: fonts.regular})}>Select Date:</Text>
          <TouchableOpacity onPress={() => setShow(true)}>
            <Text style={tw.style("mr-2 bg-white rounded shadow px-4 py-2", {fontFamily: fonts.semibold})}>{moment(date).format("DD/MM/YYYY")}</Text>
          </TouchableOpacity>
        </View>

        <View>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={"date"}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>

        <TouchableOpacity
          style={tw.style("text-white px-6 py-3 mt-8 rounded shadow", {
            backgroundColor: colors.primary,
          })}
          onPress={onSubmit}
        >
          <Text style={tw.style("text-white", { fontFamily: fonts.semibold })}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DataInput;

const styles = StyleSheet.create({});
