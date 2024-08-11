import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text, View } from "react-native";

import { images } from "../../constants";

const Home = () => {

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  // one flatlist
  // with list header
  // and horizontal flatlist

  //  we cannot do that with just scrollview as there's both horizontal and vertical scroll (two flat lists, within trending)

  return (
    <SafeAreaView className="bg-primary">
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
    </SafeAreaView>
  );
};

export default Home;
