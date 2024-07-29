import React from "react";
import { Text, View } from "react-native";
import LayoutAnimations from "../components/examples/LayoutAnimations";
import Fetch from "../components/examples/Fetch";

const MessageScreen = ({ navigation, route }) => {
    return (
        <View>
            <Text>Message Screen</Text>
            <LayoutAnimations />
            <Fetch />
        </View>
    );
};

export default MessageScreen;