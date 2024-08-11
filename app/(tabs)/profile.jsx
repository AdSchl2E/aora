import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, Text, TouchableOpacity } from "react-native";

import { icons } from "../../constants";

const Profile = () => {

  return (
    <SafeAreaView className="bg-primary">
      <View className="flex items-center">
        <Image
          source={icons.profile}
          className="w-28 h-28 mt-10"
          resizeMode="contain"
        />

        <View className="flex items-center mt-4">

          <View className="flex items-center">
            <Text className="text-2xl font-psemibold text-dark">
              Name
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => { router.push("/sign-in") }}
            className="flex items-center mt-2"
          >
            <Text className="text-sm font-pmedium text-gray">Déconnexion</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>

  );
};

export default Profile;
