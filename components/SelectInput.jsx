import { useState } from "react";
import { router, usePathname } from "expo-router";
import { View, TouchableOpacity, Image, TextInput, Alert } from "react-native";

import { icons } from "../constants";

import { Picker } from '@react-native-picker/picker';

const SelectInput = ({ initialQuery, categories }) => {

    const [selectedProfession, setSelectedProfession] = useState();

    return (
        <View className="flex flex-row items-center space-x-4 w-full h-16 bg-gray-100 rounded-2xl border-2 border-dark-200 focus:border-secondary">

            <Picker
                style={{ height: "100%", width: "100%" }}
                className="text-base mt-0.5 text-dark flex-1 font-pregular"

                selectedValue={selectedProfession}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedProfession(itemValue)
                }>
                {categories.map((category) => (
                    <Picker.Item
                        key={category.id}
                        label={category.name}
                        value={category.name}
                    />
                ))}
            </Picker>


        </View>
    );
};

export default SelectInput;
