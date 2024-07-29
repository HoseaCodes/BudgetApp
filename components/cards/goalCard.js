import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Divider, IconButton, MD3Colors } from 'react-native-paper';

export const GoalCard = ({ item }) => {
    const styles = StyleSheet.create({
        itemContainer: {
          padding: 10,
          backgroundColor: "#fff"
        },
        itemText: {
          fontSize: 16,
        },
        itemDateText: {
            fontSize: 14,
            paddingTop: 10,
            color: '#B5BCD8'
        },
        itemMoneyText: {
            fontSize: 16,
            fontWeight: 'bold'
        },
        goalContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 20,
            paddingBottom: 20
        }
      });
  return (
    <View style={styles.itemContainer}>
        <Divider/>
        <View style={styles.goalContainer}>
            <IconButton
                icon="cash"
                iconColor={MD3Colors.primary50}
                size={20}
                mode="contained-tonal"
                onPress={() => console.log('Pressed')}
                />
            <View>
                <Text style={styles.itemText}>{item.name}</Text>
                <Text style={styles.itemDateText}>{new Date().toLocaleDateString('en-us', { year:"numeric", month:"short"})}</Text>
            </View>
            <View>
                <Text style={styles.itemText}>Target: <Text style={styles.itemMoneyText}>${item.target}</Text></Text>
                  <Text style={styles.itemText}>Current: {' '}
                      {
                          item.target > item.current ?
                          <Text style={{color: "red", fontSize: 16}}>-</Text>
                          :
                          <Text style={{color: "green", fontSize: 16}}>+</Text>
                      }
                      <Text style={styles.itemMoneyText}>{' '}${item.current}</Text>
                  </Text>
            </View>
        </View>
        <Divider/>
    </View>
  )
}

