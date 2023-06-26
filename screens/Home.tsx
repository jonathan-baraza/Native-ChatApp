import { View, Text, StyleSheet, StatusBar } from "react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const Home = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <FontAwesome name="search" size={24} color="blue" />,
      headerRight: () => <FontAwesome name="search" size={24} color="blue" />,
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
});
export default Home;
