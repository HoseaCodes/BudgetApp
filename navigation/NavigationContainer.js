import React, { useEffect, useState } from "react";
import { AppRegistry } from "react-native";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import {
  Button,
  FlatList,
  Image,
  Platform,
  SectionList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
// import FlexDirectionBasics from "./components/examples/FlexDirectionBasics";
// import JustifyContentBasics from "./components/examples/JustifyContentBasics";
// import AlignItemsLayout from "./components/examples/AlignItemsLayout";
// import AlignSelfLayout from "./components/examples/AlignSelfLayout";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "../screens/Home";
import ProfileScreen from "../screens/Profile";
import BudgetScreen from "../screens/Budget";
import MessageScreen from "../screens/Messages";
import DetailsScreen from "../screens/Details";
import SettingsScreen from "../screens/Settings";
import HelpScreen from "../screens/Help";
import InviteScreen from "../screens/Invite";
import LoginScreen from "../screens/Login";
import OnboardingScreen from "../screens/Onboarding";
import storage from "../config/Storage";
import GoalsScreen from "../screens/GoalsScreen";

const logo = {
  uri: "https://reactnative.dev/img/tiny_logo.png",
  width: 64,
  height: 64,
};

// export default function App() {
//   const [text, setText] = useState("");
//   if (Platform.Version === 25) {
//     console.log('Running on Nougat!');
//   }
//   const majorVersionIOS = parseInt(Platform.Version, 10);
//   if (majorVersionIOS <= 9) {
//     console.log("Work around a change in behavior");
//   }
//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <Image source={logo} />
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Try editing me! 🎉</Text>
//         <View>
//           <Text>Some more text</Text>
//           <Image
//             source={{
//               uri: "https://reactnative.dev/docs/assets/p_cat2.png",
//             }}
//             style={{ width: 200, height: 200 }}
//           />
//         </View>
//         <TextInput
//           style={{
//             height: 40,
//             borderColor: "gray",
//             borderWidth: 1,
//           }}
//           onChangeText={(newText) => setText(newText)}
//           defaultValue={text}
//           placeholder="You can type in me"
//         />
//         <Text style={{ padding: 10, fontSize: 42 }}>
//           {text
//             .split(" ")
//             .map((word) => word && "🍕")
//             .join(" ")}
//         </Text>
//         <Cat name="Maru" />
//         <Cat name="Jellylorum" />
//         <Cat name="Spot" />
//         <Image
//           source={{
//             uri: "https://reactnative.dev/docs/assets/p_cat1.png",
//           }}
//           style={{ width: 200, height: 200 }}
//         />
//         <Text>Hello, I am your cat!</Text>
//         <CatFood name="Munkustrap" />
//         <CatFood name="Spot" />
//         {/* <FlatListBasics /> */}
//         {/* <SectionListBasics /> */}
//         <Text style={styles.red}>just red</Text>
//         <Text style={styles.bigBlue}>just bigBlue</Text>
//         <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
//         <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
//         <FixedDimensionsBasics />
//         <Text>Dimensions</Text>
//         <View style={{ flex: 1 }}>
//           <View style={{ flex: 1, backgroundColor: "powderblue" }} />
//           <View style={{ flex: 2, backgroundColor: "skyblue" }} />
//           <View style={{ flex: 3, backgroundColor: "steelblue" }} />
//         </View>
//         <FlexDirectionBasics />
//         <JustifyContentBasics />
//         <AlignItemsLayout />
//         <AlignSelfLayout />
//         <StatusBar style="auto" />
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     ...Platform.select({
//       ios: {
//         backgroundColor: "red",
//       },
//       android: {
//         backgroundColor: "green",
//       },
//       default: {
//         // other platforms, web for example
//         backgroundColor: "blue",
//       },
//     }),
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
//   sectionHeader: {
//     paddingTop: 2,
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingBottom: 2,
//     fontSize: 14,
//     fontWeight: "bold",
//     backgroundColor: "rgba(247,247,247,1.0)",
//   },
//   bigBlue: {
//     color: "blue",
//     fontWeight: "bold",
//     fontSize: 30,
//   },
//   red: {
//     color: "red",
//   },
// });

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const GoalStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Welcome" }}
      />
      <HomeStack.Screen name="Onboarding" component={OnboardingScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}
function GoalStackScreen() {
  return (
    <GoalStack.Navigator>
      <GoalStack.Screen
        name="Goal"
        component={GoalsScreen}
        options={{ title: "My Goals" }}
      />
    </GoalStack.Navigator>
  );
}


function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
      <SettingsStack.Group screenOptions={{ presentation: "modal" }}>
        <SettingsStack.Screen name="Help" component={HelpScreen} />
        <SettingsStack.Screen name="Invite" component={InviteScreen} />
      </SettingsStack.Group>
    </SettingsStack.Navigator>
  );
}

const AppNavigator = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    storage
      .load({
        key: "loginState",
        autoSync: true,
      })
      .then((value) => {
        console.log("here");
        if (value == null) {
          storage.save({
            key: "loginState", // Note: Do not use underscore("_") in key!
            data: {
              from: "some other site",
              userid: "some userid",
              token: "some token",
            },
            expires: null,
          });
          setIsFirstLaunch(true);
        } else {
          setIsFirstLaunch(false);
        }
      })
      .catch((err) => {
        console.warn(err.message);
        setIsFirstLaunch(true);
        console.log("setting first launch");
        switch (err.name) {
          case "NotFoundError":
            setIsFirstLaunch(true);
            break;
          case "ExpiredError":
            console.log("ExpiredError");
            break;
        }
      });
  }, []);

  if (isFirstLaunch === null) return <DetailsScreen />;
  return (
    <PaperProvider>
      <NavigationContainer>
        {/* {isFirstLaunch ? ( */}
        {/* <HomeStack.Group>
          <HomeStack.Screen name="Onboarding" component={OnboardingScreen} />
        </HomeStack.Group> */}
        {/* ) : ( */}
        {/* // Screens for logged in users
        // <Stack.Group>
        //   <Stack.Screen name="Home" component={Home} />
        //   <Stack.Screen name="Profile" component={Profile} />
        // </Stack.Group> */}

        {/* // Auth screens
        // <Stack.Group screenOptions={{ headerShown: false }}>
        //   <Stack.Screen name="SignIn" component={SignIn} />
        //   <Stack.Screen name="SignUp" component={SignUp} />
        // </Stack.Group> */}
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Goal") {
                iconName = focused ? "card" : "card-outline";
              } else if (route.name === "Budget") {
                iconName = focused ? "journal" : "journal-outline";
              } else if (route.name === "Messages") {
                iconName = focused ? "mail" : "mail-outline";
              } else if (route.name === "Profile") {
                iconName = focused ? "person" : "person-outline";
              } else if (route.name === "Settings") {
                iconName = focused ? "settings" : "settings-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Goal" component={GoalStackScreen} />
          <Tab.Screen name="Budget" component={BudgetScreen} />
          <Tab.Screen
            name="Messages"
            component={MessageScreen}
            options={{ tabBarBadge: 3 }}
          />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Settings" component={SettingsStackScreen} />
        </Tab.Navigator>
        {/* // )} */}
        {/* <HomeStack.Group screenOptions={{ presentation: "modal" }}>
        <HomeStack.Screen name="Help" component={HelpScreen} />
        <HomeStack.Screen name="Invite" component={InviteScreen} />
      </HomeStack.Group> */}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default AppNavigator;



