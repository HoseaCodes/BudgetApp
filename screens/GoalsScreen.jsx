import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import axios from 'axios';
import Card from '../components/cards/card';
import Input from '../components/input/input';
import { GoalCard } from '../components/cards/goalCard';
import { Button } from "react-native-paper";

const GoalsScreen = () => {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [target, setTarget] = useState('');

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    try {
      const response = await axios.get('http://localhost:3001/goals');
      setGoals(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching goals:', error);
      setError('Error fetching goals: ', error.message);
      setLoading(false);
    }
  };

  const addGoal = async () => {
    if (name && target) {
      try {
        const response = await axios.post('http://localhost:3001/goals', {
          name,
          target: parseFloat(target),
          current: 0,
          achieved: false
        });
        setGoals([...goals, response.data]);
        setName('');
        setTarget('');
        setError('');
      } catch (error) {
        console.error('Error adding goal:', error);
        setError('Error adding goal: ', error.message);
      }
    } else {
      setError('Please enter a goal name and target amount');
    }
  };


  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles}>
      <View style={styles.container}>
        <Card bg={"#FAFCFD"}>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          <Input
            placeholder="Goal Name"
            value={name}
            onChange={setName}
          />
          <Input
            placeholder="Target Amount"
            value={target}
            onChange={setTarget}
            rest={keyboardType = "numeric"}
          />
          <Button
            style={{
              marginTop: 10,
              backgroundColor: "#0CA962",
            }}
            icon="arrow-up-circle-outline"
            mode="contained"
            onPress={addGoal}
          >
            Add Goal
          </Button>
        </Card>
        <FlatList
          data={goals}
          keyExtractor={(item) => item.id.toString()}
          renderItem={GoalCard}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    // backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default GoalsScreen;
