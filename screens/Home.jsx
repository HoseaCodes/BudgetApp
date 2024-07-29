import React from "react";
import {
  FlatList,
  Image,
  Platform,
  SectionList,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import FadeInView from "../components/examples/FadeInView";
import ImageCarousel from "../components/examples/ImageCarousel";
import Icon from "../components/icons/home";
import { Avatar, Button, Badge, Card, Text } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 4,
    backgroundColor: "#FAFCFD",
  },
  innerContainer: {
    padding: 30,
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
  lightText: {
    color: "#B8B8B8",
  },
  largeText: {
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontSize: 16,
  },
});

const LeftContent = (props) => <Avatar.Icon {...props} icon="transfer-up" />;
const MiddleLeftContent = (props) => <Avatar.Icon {...props} icon="wallet" />;
const MiddleRightContent = (props) => (
  <Avatar.Icon {...props} icon="newspaper" />
);
const RightContent = (props) => <Avatar.Icon {...props} icon="apps" />;


const HomeScreen = ({ navigation }) => {
  const onPressButton = () => {
    console.log("Button pressed");
  };
  return (
    <SafeAreaView style={styles}>
      <View style={styles.innerContainer}>
        <View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={styles.lightText}>Hi, Dominique</Text>
              <Text style={{ fontSize: 16, paddingTop: 4 }}>
                Here is your budget plan
              </Text>
            </View>
            <View>
              <Badge>3</Badge>
              <View
                style={{
                  backgroundColor: "#EAEDEE",
                  width: 43,
                  borderRadius: 50,
                  padding: 10,
                }}
              >
                <Icon name="notifications-outline" size="24" color="black" />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 24,
            padding: 20,
            borderRadius: 10,
            backgroundColor: "#0CA962",
            marginBottom: 20,
          }}
        >
          <View>
            <Text style={{ color: "white", paddingBottom: 4 }}>My Budget</Text>
            <Text style={{ color: "white", fontWeight: 600, fontSize: 18 }}>
              $1,200.00
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              gap: 14,
            }}
          >
            <TouchableOpacity onPress={onPressButton}>
              <View style={styles.buttonContainer}>
                <Icon name="arrow-up-circle-outline" size="24" color="black" />
                <Text style={{ color: "black", fontSize: 14 }}>Add Income</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressButton}>
              <View style={styles.buttonContainer}>
                <Icon
                  name="arrow-down-circle-outline"
                  size="24"
                  color="black"
                />
                <Text style={{ color: "black", fontSize: 14 }}>
                  Add Spending
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <Button
            style={{
              alignSelf: "flex-start",
              marginTop: 10,
              backgroundColor: "rgba(0, 0, 0, 0.2)",
            }}
            icon="star"
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            Basic Plan
          </Button>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Card
              style={{
                margin: 10,
                marginLeft: 0,
                alignItems: "center",
              }}
            >
              <Card.Title left={LeftContent} />
            </Card>
            <Text variant="titleMedium">Transfer</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Card style={{ margin: 10, alignItems: "center" }}>
              <Card.Title left={MiddleLeftContent} />
            </Card>
            <Text variant="titleMedium">Invest</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Card style={{ margin: 10, alignItems: "center" }}>
              <Card.Title left={MiddleRightContent} />
            </Card>
            <Text variant="titleMedium">Bill</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Card style={{ margin: 10, alignItems: "center" }}>
              <Card.Title left={RightContent} />
            </Card>
            <Text variant="titleMedium">Transfer</Text>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontWeight: 700 }} variant="headlineSmall">Budget Overview</Text>
        </View>
        <View>
          <View>
            <Text>Incomes</Text>
            <Text>$1,200.00</Text>
            <View>
              <Text>+2.5</Text>
              <Text>Icon</Text>
            </View>
          </View>
          <View>
            <Text>Spending</Text>
            <Text>$1,000.00</Text>
            <View>
              <Text>+2.5</Text>
              <Text>Icon</Text>
            </View>
          </View>
          <View>
            <Text>Remaining</Text>
            <Text>$200.00</Text>
            <View>
              <Text>+2.5</Text>
              <Text>Icon</Text>
            </View>
          </View>
        </View>
        {/* <View>
            <Text>My Plans</Text>
            <Button>See all</Button>
          </View> */}
        <View>
          <View>
            <View>
              <Text>Self Healing</Text>
              {/* <View>Icon</View> */}
            </View>
            <Text>Staycation in Bali</Text>
            <Text>$200.00</Text>
          </View>
          <View>
            <View>
              <View>
                <Text>Webinar</Text>
                {/* <View>Icon</View> */}
              </View>
              <Text>Law of UX</Text>
              <Text>$150.00</Text>
            </View>
          </View>
        </View>
        {/* <View>
            <Text>Transactions</Text>
            <Button>See all</Button>
          </View> */}
        <View>
          <View>
            <View>
              {/* <View>Icon</View> */}
              <View>
                <Text>Repairing Car</Text>
                <Text>May 1, 2024</Text>
              </View>
            </View>
            <Text>Icon</Text>
          </View>
          <View>
            <View>
              {/* <View>Icon</View> */}
              <View>
                <Text>Buying A Car</Text>
                <Text>March 1, 2024</Text>
              </View>
            </View>
            <Text>Icon</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
