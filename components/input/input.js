import { TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function Input({ placeholder, value, onChange, rest }) {
    const styles = StyleSheet.create({
        input: {
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 10,
          marginBottom: 10,
          paddingLeft: 8,
        },
      });
  return (
    <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        {...rest}
    />
  )
}