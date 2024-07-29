import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { DataTable } from "react-native-paper";
import { Avatar, Button, Card, Text, TextInput } from "react-native-paper";
import Modal from "react-native-modal";
import AddBudgetScreen from "./AddBudget";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   text: {
//     fontSize: 25,
//     fontWeight: "500",
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 7,
    color: "green",
  },
  input: {
    borderWidth: 3,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 18,
  },
  addButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    fontSize: 18,
  },
  itemList: {
    fontSize: 19,
  },
  taskButtons: {
    flexDirection: "row",
  },
  editButton: {
    marginRight: 10,
    color: "green",
    fontWeight: "bold",
    fontSize: 18,
  },
  deleteButton: {
    color: "red",
    fontWeight: "bold",
    fontSize: 18,
  },
});

const LeftContent = (props) => <Avatar.Icon {...props} icon="credit-card" />;

const BudgetScreen = ({ navigation, route }) => {
  const [text, setText] = useState("");
  const [budgetItem, setBudgetItem] = useState("");
  const [budget, setBudget] = useState([]);
  const [monthlyBudget, steMonthlyBudget] = useState({
    May: {
      rent: 500,
      gym: 100,
      subscription: {
        netflix: 10,
        spotify: 10,
        hulu: 10,
      },
      creditCards: {
        chase: 50,
        discover: 50,
        amex: 50,
      },
      internet: 50,
      phone: 50,
      groceries: 200,
      gas: 100,
      carInsurance: 50,
      healthInsurance: 50,
      savings: 100,
      haircuts: 50,
      houseHoldItems: 50,
      lights: 50,
      loans: {
        student: 100,
        car: 50,
        personal: 50,
      },
      misc: {
        gifts: 50,
        eatingOut: 50,
        shopping: 50,
      },
      investments: 50,
      business: 50,
      totalLiability: 1270,
      incomes: {
        salary: 1000,
        sideHustle: 200,
      },
      spending: 1000,
      remaining: 200,
    },
  });
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleAddTask = () => {
    if (task) {
      if (editIndex !== -1) {
        // Edit existing task
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = task;
        setTasks(updatedTasks);
        setEditIndex(-1);
      } else {
        // Add new task
        setTasks([...tasks, task]);
      }
      setTask("");
    }
  };

  const handleEditTask = (index) => {
    const taskToEdit = tasks[index];
    setTask(taskToEdit);
    setEditIndex(index);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  const renderItem = ({ item, index }) => (
    <View style={styles.task}>
      <Text style={styles.itemList}>{item}</Text>
      <View style={styles.taskButtons}>
        <TouchableOpacity onPress={() => handleEditTask(index)}>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteTask(index)}>
          <Text style={styles.deleteButton}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles}>
      <ScrollView style={{ padding: 40 }}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
            <Text style={styles.addButtonText}>Show modal</Text>
          </TouchableOpacity>
          <Modal coverScreen={true} scrollHorizontal={true} isVisible={isModalVisible}>
            <ScrollView>
              <AddBudgetScreen />
              <Text>Hello!</Text>
              <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
                <Text style={styles.addButtonText}>Hide modal</Text>
              </TouchableOpacity>
            </ScrollView>
          </Modal>
          <Text style={styles.heading}>Geeksforgeeks</Text>
          <Text style={styles.title}>ToDo App</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter task"
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
            <Text style={styles.addButtonText}>
              {editIndex !== -1 ? "Update Task" : "Add Task"}
            </Text>
          </TouchableOpacity>
          <FlatList
            data={tasks}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View>
          <Text variant="headlineSmall">Monthly Budget</Text>
          <Text variant="bodySmall">Last Updated: May 8th, 2024</Text>
          {Object.keys(monthlyBudget).map((month, index) => (
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Budget Items</DataTable.Title>
                <DataTable.Title numeric>Current Expenses</DataTable.Title>
              </DataTable.Header>
              <DataTable.Row>
                <DataTable.Cell>Rent</DataTable.Cell>
                <DataTable.Cell numeric>
                  ${monthlyBudget[month].rent}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Gym</DataTable.Cell>
                <DataTable.Cell numeric>
                  ${monthlyBudget[month].gym}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Netflix</DataTable.Cell>
                <DataTable.Cell numeric>
                  ${monthlyBudget[month].subscription.netflix}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Spotify</DataTable.Cell>
                <DataTable.Cell numeric>
                  ${monthlyBudget[month].subscription.spotify}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Hulu</DataTable.Cell>
                <DataTable.Cell numeric>
                  ${monthlyBudget[month].subscription.hulu}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Chase Credit Card</DataTable.Cell>
                <DataTable.Cell numeric>
                  ${monthlyBudget[month].creditCards.chase}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Discover Credit Card</DataTable.Cell>
                <DataTable.Cell numeric>
                  ${monthlyBudget[month].creditCards.discover}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Amex Credit Card</DataTable.Cell>
                <DataTable.Cell numeric>
                  ${monthlyBudget[month].creditCards.amex}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Internet</DataTable.Cell>
                <DataTable.Cell numeric>
                  ${monthlyBudget[month].internet}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Groceries</DataTable.Cell>
                <DataTable.Cell numeric>
                  ${monthlyBudget[month].groceries}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Gas</DataTable.Cell>
                <DataTable.Cell numeric>
                  ${monthlyBudget[month].gas}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Car Insurance</DataTable.Cell>
                <DataTable.Cell numeric>
                  ${monthlyBudget[month].carInsurance}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Health Insurance</DataTable.Cell>
                <DataTable.Cell numeric>
                  ${monthlyBudget[month].healthInsurance}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Savings</DataTable.Cell>
                <DataTable.Cell numeric>
                  ${monthlyBudget[month].savings}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Haircuts</DataTable.Cell>
                <DataTable.Cell numeric>
                  ${monthlyBudget[month].haircuts}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>House Hold Items</DataTable.Cell>
                <DataTable.Cell numeric>
                  ${monthlyBudget[month].houseHoldItems}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Lights</DataTable.Cell>
                <DataTable.Cell numeric>
                  ${monthlyBudget[month].lights}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Student Loans</DataTable.Cell>
                <DataTable.Cell numeric>
                  ${monthlyBudget[month].loans.student}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Car Loans</DataTable.Cell>
                <DataTable.Cell numeric>
                  ${monthlyBudget[month].loans.car}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Personal Loans</DataTable.Cell>
                <DataTable.Cell numeric>
                  ${monthlyBudget[month].loans.personal}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Gifts</DataTable.Cell>
                <DataTable.Cell numeric>
                  ${monthlyBudget[month].misc.gifts}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Eating Out</DataTable.Cell>
                <DataTable.Cell numeric>
                  ${monthlyBudget[month].misc.eatingOut}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Shopping</DataTable.Cell>
                <DataTable.Cell numeric>
                  ${monthlyBudget[month].misc.shopping}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Investments</DataTable.Cell>
                <DataTable.Cell numeric>
                  ${monthlyBudget[month].investments}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Business</DataTable.Cell>
                <DataTable.Cell numeric>
                  ${monthlyBudget[month].business}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Salary</DataTable.Cell>
                <DataTable.Cell numeric>
                  ${monthlyBudget[month].incomes.salary}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Side Hustle</DataTable.Cell>
                <DataTable.Cell numeric>
                  ${monthlyBudget[month].incomes.sideHustle}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Total Liability</DataTable.Cell>
                <DataTable.Cell numeric>
                  ${monthlyBudget[month].totalLiability}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Spending</DataTable.Cell>
                <DataTable.Cell numeric>
                  ${monthlyBudget[month].spending}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Remaining</DataTable.Cell>
                <DataTable.Cell numeric>
                  ${monthlyBudget[month].remaining}
                </DataTable.Cell>
              </DataTable.Row>

              {/* <DataTable.Pagination
                page={page}
                numberOfPages={Math.ceil(items.length / itemsPerPage)}
                onPageChange={(page) => setPage(page)}
                label={`${from + 1}-${to} of ${items.length}`}
                numberOfItemsPerPageList={numberOfItemsPerPageList}
                numberOfItemsPerPage={itemsPerPage}
                onItemsPerPageChange={onItemsPerPageChange}
                showFastPaginationControls
                selectPageDropdownLabel={"Rows per page"}
              /> */}
            </DataTable>
          ))}

          {/* {Object.keys(monthlyBudget).map((month, index) => (
            <View key={index}>
              <Text>{month}</Text>
              <Text>Rent: ${monthlyBudget[month].rent}</Text>
              <Text>Gym: ${monthlyBudget[month].gym}</Text>
              <Text>Netflix: ${monthlyBudget[month].subscription.netflix}</Text>
              <Text>Spotify: ${monthlyBudget[month].subscription.spotify}</Text>
              <Text>Hulu: ${monthlyBudget[month].subscription.hulu}</Text>
              <Text>
                Chase Credit Card: ${monthlyBudget[month].creditCards.chase}
              </Text>
              <Text>
                Discover Credit Card: $
                {monthlyBudget[month].creditCards.discover}
              </Text>
              <Text>
                Amex Credit Card: ${monthlyBudget[month].creditCards.amex}
              </Text>
              <Text>Internet: ${monthlyBudget[month].internet}</Text>
              <Text>Groceries: ${monthlyBudget[month].groceries}</Text>
              <Text>Gas: ${monthlyBudget[month].gas}</Text>
              <Text>Car Insurance: ${monthlyBudget[month].carInsurance}</Text>
              <Text>
                Health Insurance: ${monthlyBudget[month].healthInsurance}
              </Text>
              <Text>Savings: ${monthlyBudget[month].savings}</Text>
              <Text>Haircuts: ${monthlyBudget[month].haircuts}</Text>
              <Text>
                House Hold Items: ${monthlyBudget[month].houseHoldItems}
              </Text>
              <Text>Lights: ${monthlyBudget[month].lights}</Text>
              <Text>Student Loans: ${monthlyBudget[month].loans.student}</Text>
              <Text>Car Loans: ${monthlyBudget[month].loans.car}</Text>
              <Text>
                Personal Loans: ${monthlyBudget[month].loans.personal}
              </Text>
              <Text>Gifts: ${monthlyBudget[month].misc.gifts}</Text>
              <Text>Eating Out: ${monthlyBudget[month].misc.eatingOut}</Text>
              <Text>Shopping: ${monthlyBudget[month].misc.shopping}</Text>
              <Text>Investments: ${monthlyBudget[month].investments}</Text>
              <Text>Business: ${monthlyBudget[month].business}</Text>
              <Text>Salary: ${monthlyBudget[month].incomes.salary}</Text>
              <Text>
                Side Hustle: ${monthlyBudget[month].incomes.sideHustle}
              </Text>
              <Text>
                Total Liability: ${monthlyBudget[month].totalLiability}
              </Text>
              <Text>Spending: ${monthlyBudget[month].spending}</Text>
              <Text>Remaining: ${monthlyBudget[month].remaining}</Text>
            </View>
          ))} */}
        </View>
        <Card>
          <Card style={{ margin: 10 }}>
            <Card.Title
              title="Salary"
              // subtitle="Card Subtitle"
              left={LeftContent}
            />
            <TextInput
              label="$"
              placeholder="0.00"
              value={text}
              onChangeText={(text) => setText(text)}
            />
          </Card>
          <Card style={{ margin: 10 }}>
            <Card.Title title="Freelance" left={LeftContent} />
            <TextInput
              label="$"
              placeholder="0.00"
              value={text}
              onChangeText={(text) => setText(text)}
            />
          </Card>
          <Card.Content>
            {/* <Text variant="titleLarge">Card title</Text> */}
            {/* <Text variant="bodyMedium">Card content</Text> */}
          </Card.Content>
          {/* <Card.Cover source={{ uri: "https://picsum.photos/700" }} /> */}
          <Card.Actions style={{ alignSelf: "center" }}>
            <Button
              icon="plus"
              mode="contained"
              onPress={() => console.log("Pressed")}
            >
              Add new categories
            </Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BudgetScreen;
