import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text, View, TextInput, TouchableOpacity } from "react-native";

import { icons, images } from "../../constants";
import { CustomButton, SearchInput, SelectInput, TimePicker } from "../../components";

const Home = () => {

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  const categories = [
    { id: 1, name: "Dentiste" },
    { id: 2, name: "Médecin" },
  ];

  return (
    <SafeAreaView className="bg-primary px-5 py-5 h-full">
      <View className="flex my-6 px-4 space-y-6">
        <View className="flex justify-between items-start flex-row mb-6">
          <View>
            <Text className="font-pmedium text-sm text-gray">
              Welcome Back
            </Text>
            <Text className="text-2xl font-psemibold text-dark">
              Name

            </Text>
          </View>

          <View className="mt-1.5">
            <Image
              source={images.logoSmall}
              className="w-9 h-10"
              resizeMode="contain"
            />
          </View>
        </View>

      </View>

      <View className="mt-5 flex justify-center bg-white px-5 py-5 rounded-3xl shadow-2xl">
        <View className="flex justify-center items-start">
          <Text className="text-xl font-semibold text-dark font-psemibold text-center mb-5 ml-3">
            Région ou ville
          </Text>
        </View>
        <View className="flex justify-center items-center">
          <SearchInput placeholder="Marseille" />
        </View>
      </View>

      <View className="mt-5 flex justify-center bg-white px-5 py-5 rounded-3xl shadow-2xl">
        <View className="flex justify-center items-start">
          <Text className="text-xl font-semibold text-dark font-psemibold text-center mb-5 ml-3">
            Professionels
          </Text>
        </View>
        <View className="flex justify-center items-center">
          <SelectInput categories={categories} />
        </View>
      </View>

      <View className="mt-5 flex justify-center bg-white px-5 py-5 rounded-3xl shadow-2xl">
        <View className="flex justify-center items-start">
          <Text className="text-xl font-semibold text-dark font-psemibold text-center mb-5 ml-3">
            Horaires
          </Text>
        </View>
        <View className="flex justify-center items-center">
          <TimePicker />
        </View>
      </View>

      <CustomButton
        title="Suivant"
        handlePress={() => { }}
        containerStyles="mt-10 w-80 self-center"
        isLoading={false}
      />

    </SafeAreaView >
  );
};

export default Home;
