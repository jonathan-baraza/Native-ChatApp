import { useState, useEffect, useLayoutEffect, useCallback } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import { auth, database } from "../config/firebase";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { GiftedChat } from "react-native-gifted-chat";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const navigation: any = useNavigation();
  const onSignOut = () => {
    signOut(auth)
      .then((res) => {
        console.log("sign out response");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{ marginRight: 10 }} onPress={onSignOut}>
          <AntDesign
            name="logout"
            size={24}
            color={"gray"}
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useLayoutEffect(() => {
    const collectionRef = collection(database, "chats");
    const q = query(collectionRef, (ref) => ref.orderBy("createdAt", "desc"));

    const unsubscribe=onSnapshot(q,snapshot=>{
      console.log("snapshot");
      setMessages(snapshot.docs.map(doc=>(
        _id:doc.id,
        createdAt:doc.data().createdAt,
        text:doc.data().text,
        user:doc.data().user
      )))
    })
    return ()=>unsubscribe();
  }, []);
  return <GiftedChat />;
};

export default Chat;
