import React, { useEffect, useState } from "react";
import { Platform } from 'react-native';
import { PaperProvider } from "react-native-paper";
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
import GoalsScreen from "../screens/GoalsScreen";
import OnboardFlowScreen from "../screens/OnboardFlowScreen";
import { handleOnDone } from "../utils/storageFunctions"

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
  const [isFirstLaunch, setIsFirstLaunch] = useState(true);
  const [premium, setPremium] = useState(null)
  if (Platform.Version === 25) {
    console.log('Running on Nougat!');
  }
  const majorVersionIOS = parseInt(Platform.Version, 10);
  if (majorVersionIOS <= 9) {
    console.log("Work around a change in behavior");
  }

  useEffect(() => {
    if (!isFirstLaunch) handleOnDone()
  }, [isFirstLaunch])

  return (
    <PaperProvider>
      <NavigationContainer>
        {isFirstLaunch ? (
          <OnboardFlowScreen onDone={() => setIsFirstLaunch(false)} />
        ) : (
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
            <Tab.Screen name="Messages" component={MessageScreen} options={{ tabBarBadge: 3 }} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Settings" component={SettingsStackScreen} />
            {
              premium && (
                <Stack.Group screenOptions={{ headerShown: false }}>
                  <Stack.Screen name="SignIn" component={LoginScreen} />
                  <Stack.Screen name="SignUp" component={LoginScreen} />
                </Stack.Group>
              )
            }
          </Tab.Navigator>
        )}

      </NavigationContainer>
    </PaperProvider>
  );
};

export default AppNavigator;



