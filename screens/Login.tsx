import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <View className="flex-1">
      <Image
        className="w-[100%] h-[35vh]"
        source={require("../assets/backImage.png")}
        resizeMode="cover"
      />
      <View className="bg-white rounded-tl-[45px]  flex-1 py-8 px-6 -top-20">
        <Text className="text-[#ed6d01] my-8 text-center mx-auto text-3xl font-bold">
          Log In
        </Text>
        <TextInput
          className="bg-[#f3f5f7] p-3 rounded-xl px-5"
          placeholder="Enter Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          className="bg-[#f3f5f7] p-3 mt-6 rounded-xl px-5"
          placeholder="Enter Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <Text>Email:{email}</Text>
        <Text>Passoword:{password}</Text>

        <TouchableOpacity
          activeOpacity={0.7}
          className="bg-[#ed6d01] p-3 mt-12 justify-center items-center rounded-xl"
        >
          <Text className="text-white">Log In</Text>
        </TouchableOpacity>
        <View className="flex-row justify-center mt-6">
          <Text>Don't have an account?</Text>
          <Text className="text-[#ed6d01] ml-2">Sign Up</Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
