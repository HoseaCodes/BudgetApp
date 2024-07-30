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
import { StatusBar } from "expo-status-bar";

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
  const [task, setTask] = useState("");
  const [amount, setAmount] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleAddTask = () => {
    if (task && amount) {
      const newTask = { task, amount: parseFloat(amount) };
      if (editIndex !== -1) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = newTask;
        setTasks(updatedTasks);
        setEditIndex(-1);
      } else {
        setTasks([...tasks, newTask]);
      }
      setTask("");
      setAmount("");
    }
  };

  const handleEditTask = (index) => {
    const taskToEdit = tasks[index];
    setTask(taskToEdit.task);
    setAmount(taskToEdit.amount.toString());
    setEditIndex(index);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <SafeAreaView style={styles}>
      <ScrollView style={{ padding: 40 }}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
            <Text style={styles.addButtonText}>Add More Budget Items</Text>
          </TouchableOpacity>
          <Modal coverScreen={true} scrollHorizontal={true} isVisible={isModalVisible}>
            <ScrollView>
              <AddBudgetScreen />
              <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
                <Text style={styles.addButtonText}>Hide modal</Text>
              </TouchableOpacity>
            </ScrollView>
          </Modal>
        </View>
        <View>
          <Text variant="headlineSmall">Monthly Budget</Text>
          <Text variant="bodySmall">Last Updated: May 8th, 2024</Text>
          <DataTable>
            {
              tasks.map((taskItem, index) => (
                <DataTable.Row key={index}>
                  <DataTable.Cell>{taskItem.task}</DataTable.Cell>
                  <DataTable.Cell numeric>
                    ${taskItem.amount.toFixed(2)}
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <View style={styles.taskButtons}>
                      <TouchableOpacity onPress={() => handleEditTask(index)}>
                        <Text style={styles.editButton}>Edit</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => handleDeleteTask(index)}>
                        <Text style={styles.deleteButton}>Delete</Text>
                      </TouchableOpacity>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))
            }
          </DataTable>
        </View>
        <Card style={{ marginBottom: 50 }}>
          <Card style={{ margin: 10 }}>
            <Card.Title
              title={task ? task : "Budget Item"}
              left={LeftContent}
            />
            <TextInput
              label="Budget Item"
              placeholder="Enter Item"
              value={task}
              onChangeText={(text) => setTask(text)}
              keyboardType="numeric"
            />
            <TextInput
              label="$"
              placeholder="0.00"
              value={amount}
              onChangeText={(text) => setAmount(text)}
              keyboardType="numeric"
            />
          </Card>
          <Card.Actions style={{ alignSelf: "center" }}>
            <Button
              icon="plus"
              mode="contained"
              onPress={handleAddTask}
            >
              Add new categories
            </Button>
          </Card.Actions>
        </Card>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default BudgetScreen;
