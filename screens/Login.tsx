import { View, Text, Image } from "react-native";
import React from "react";

const Login = () => {
  return (
    <View className="flex-1">
      <Image
        className="w-[100%] h-[30vh]"
        source={require("../assets/backImage.png")}
        resizeMode="cover"
      />
      <View className="bg-white rounded-tl-[45px]  flex-1 p-8 -top-16">
        <Text className="text-[#ed6d01]">Login</Text>
      </View>
    </View>
  );
};

export default Login;
