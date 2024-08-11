import { useState } from "react";
import { router, usePathname } from "expo-router";
import { View, TouchableOpacity, Image, TextInput, Alert } from "react-native";

import { icons } from "../constants";

import DateTimePicker from '@react-native-community/datetimepicker';

const TimePicker = ({ initialQuery, placeholder }) => {

    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [receiptDate, setReceiptDate] = useState("");

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        if (event.type == "dismissed") {
            setShow(false)
            return null;
        } else {
            setShow(false)
            let tempDate = new Date(currentDate);
            let fDate = tempDate.getHours() + ":" + (tempDate.getMinutes() < 10 ? '0' : '') + tempDate.getMinutes();
            setReceiptDate(fDate);
            return;
        }
    };

    return (
        <TouchableOpacity onPress={() => setShow(true)} className="flex flex-row items-center space-x-4 w-full h-16 px-4 bg-gray-100 rounded-2xl border-2 border-dark-200 focus:border-secondary">

            <TextInput
                className="text-base mt-0.5 text-dark flex-1 font-pregular"
                editable={false}
                value={receiptDate}
                placeholder="9:00"
                placeholderTextColor="gray"
                style={{ color: receiptDate ? "black" : "gray" }}
            />

            <View>

                {show && (
                    <DateTimePicker
                        testID='dateTimePicker'
                        value={date}
                        mode={'time'}
                        display='default'
                        onChange={onChange}
                        is24Hour
                    />)}

                <Image source={icons.clock} className="w-5 h-5" resizeMode="contain" />

            </View>


        </TouchableOpacity>
    );
};

export default TimePicker;
