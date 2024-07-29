import React from "react";
import { Alert, StatusBar, Button, View } from "react-native";
import Icon from "../components/icons/home";
import FontAwesomeIcon from "../components/icons/fontAwesome";

// import { Button, Icon } from "react-native-elements";
import Onboarding from "react-native-onboarding-swiper";

const Dots = ({ selected }) => {
  let backgroundColor;
  backgroundColor = selected ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.3)";
  return (
    <View
      style={{
        width: 5,
        height: 5,
        marginHorizontal: 3,
        backgroundColor,
        borderRadius: 5,
      }}
    />
  );
};

const Skip = ({ ...props }) => {
  <Button title="Skip" color={"#000"} {...props} />;
};

const Next = ({ ...props }) => {
  <Button title="Next" color={"#000"} {...props} />;
};

const Done = ({ ...props }) => {
  <Button title="Done" color={"#000"} {...props} />;
};

const OnboardingScreen = ({ navigation }) => (
  <Onboarding
    showDone={false}
    SkipButtonComponent={Skip}
    NextButtonComponent={Next}
    DoneButtonComponent={Done}
    DotComponent={Dots}
    onSkip={() => Alert.alert("Skipped")}
    onDone={() => Alert.alert("Done")}
    pages={[
      {
        title: "Hey!",
        subtitle: "Welcome to $App!",
        backgroundColor: "#003c8f",
        image: (
          <FontAwesomeIcon
            name="hand-peace-o"
            type="font-awesome"
            size={100}
            color="white"
          />
        ),
      },
      {
        title: "Send Messages",
        subtitle: "You can reach everybody with us",
        backgroundColor: "#5e92f3",
        image: (
          <FontAwesomeIcon
            name="paper-plane-o"
            type="font-awesome"
            size={100}
            color="white"
          />
        ),
      },
      {
        title: "Get Notified",
        subtitle: "We will send you notification as soon as something happened",
        backgroundColor: "#1565c0",
        image: (
          <FontAwesomeIcon
            name="bell-o"
            type="font-awesome"
            size={100}
            color="white"
          />
        ),
      },
      {
        title: "That's Enough",
        subtitle: (
          <Button
            title={"Get Started"}
            containerViewStyle={{ marginTop: 20 }}
            backgroundColor={"white"}
            borderRadius={5}
            textStyle={{ color: "#003c8f" }}
            onPress={() => {
              //   Alert.alert("done");
              //   StatusBar.setBarStyle("default");
              console.log(navigation);

              navigation.navigate("Home", { screen: "Home" });
            }}
          />
        ),
        backgroundColor: "#003c8f",
        image: (
          <FontAwesomeIcon
            name="rocket"
            type="font-awesome"
            size={100}
            color="white"
          />
        ),
      },
    ]}
  />
);

export default OnboardingScreen;
