import { View, StyleSheet } from 'react-native'
import React from 'react'

export default function Card({ children, bg }) {
    const styles = StyleSheet.create({
        container: {
            marginTop: 24,
            padding: 20,
            borderRadius: 10,
            backgroundColor: bg ? bg : "#0CA962",
            marginBottom: 20,
        },
      });
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}