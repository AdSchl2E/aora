import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import { CustomButton, Loader } from "../components";
import { useGlobalContext } from "../context/GlobalProvider";

const Welcome = () => {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-primary h-full">
      <Loader isLoading={loading} />

      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">

          <View className="relative mt-5">

            <Image
              source={images.cards}
              className="w-60 h-60"
              resizeMode="contain"
            />

            <Text className="text-3xl text-black font-bold text-center">
              Commencez à prospecter !
            </Text>

          </View>

          <Text className="text-sm font-pregular text-gray mt-7 text-center">
            Planification de vos trajets de prospection en quelques clics
          </Text>

          <CustomButton
            title="Go !"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-80 mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#ecedff" style="dark" />
    </SafeAreaView>
  );
};

export default Welcome;
