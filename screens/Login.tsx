import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation, ParamListBase } from "@react-navigation/native";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigation: any = useNavigation();
  return (
    <View className="flex-1 bg-white">
      <Image
        className="w-[100%] h-[40vh]"
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
          textContentType="emailAddress"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          className="bg-[#f3f5f7] p-3 mt-6 rounded-xl px-5"
          placeholder="Enter Password"
          textContentType="password"
          autoCapitalize="none"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          activeOpacity={0.7}
          className="bg-[#ed6d01] p-3 mt-12 justify-center items-center rounded-xl"
        >
          <Text className="text-white">Log In</Text>
        </TouchableOpacity>
        <View className="flex-row justify-center mt-6">
          <Text>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("signup")}
            activeOpacity={0.7}
            className=" ml-1"
          >
            <Text className="text-[#ed6d01]">Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
