import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import {
  Button,
  Card,
  Text,
  TextInput,
} from "react-native-paper";

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
  
const AddBudgetScreen = ({ navigation, route }) => {
    const [task, setTask] = useState("");
    const [editIndex, setEditIndex] = useState(-1);
    const [tasks, setTasks] = useState([]);
    const [rent, setRent] = useState("");
    const [gym, setGym] = useState("");
    const [subscriptions, setSubscriptions] = useState([]);
    const [creditCards, setCreditCards] = useState([]);
    const [internet, setInternet] = useState("");
    const [phone, setPhone] = useState("");
    const [groceries, setGroceries] = useState("");     
    const [gas, setGas] = useState("");
    const [carInsurance, setCarInsurance] = useState("");
    const [healthInsurance, setHealthInsurance] = useState("");
    const [savings, setSavings] = useState("");
    const [haircuts, setHaircuts] = useState("");
    const [houseHold, setHouseHold] = useState("");
    const [lights, setLights] = useState("");
    const [loans, setLoans] = useState([]);
    const [miscellaneous, setMiscellaneous] = useState([]);
    const [business, setBusiness] = useState("");
    const [investment, setInvestment] = useState("");
    const [incomes, setIncomes] = useState([]);
    const [totalLiability, setTotalLiability] = useState("");
    const [spending, setSpending] = useState("");
    const [remaining, setRemaining ] = useState("");


    const handleSubmit = (e) => {
    };
    return (
      <SafeAreaView>
        <Text variant="headlineLarge">Add Budget</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter rent amount"
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter gym amount"
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter subscriptions"
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Credit Cards"
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter internet amount"
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter phone amount"
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter groceries amount"
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter gas amount"
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter car insurance amount"
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter health insurance amount"
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter savings amount"
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter haircurs amount"
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter house hold amount"
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter lights amount"
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter loan amounts"
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter miscellaneous amounts"
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter business amount"
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter investment amount"
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter incomes"
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
            <Text style={styles.addButtonText}>
              {editIndex !== -1 ? "Update Task" : "Add Task"}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
}

export default AddBudgetScreen;