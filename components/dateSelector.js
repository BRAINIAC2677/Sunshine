import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { colors, fonts } from "../styles/global";

const DateSelector = ({date, setDate}) => {


  
  const [show, setShow] = useState(false);
  const [formatDate, setFormatDate] = useState(new Date(parseInt(date.slice(0,4)), parseInt(date.slice(4,6)), parseInt(date.slice(6,8))))

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || formatDate;
    setShow(Platform.OS === "ios");
    setDate(moment(currentDate).format("YYYYMMDD"));
    setFormatDate(currentDate)
  };

  return (
    <View>
      <View style={tw`flex-row items-center`}>
        <TouchableOpacity onPress={() => setShow(true)}>
          <Text
            style={tw.style("mr-2 rounded shadow px-2 py-1", {
              fontFamily: fonts.semibold,
              color: colors.text3,
              backgroundColor: colors.secondaryBg
            })}
          >
            {moment(formatDate).format("DD/MM/YYYY")}
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={formatDate}
            mode={"date"}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
    </View>
  );
};

export default DateSelector;

const styles = StyleSheet.create({});
