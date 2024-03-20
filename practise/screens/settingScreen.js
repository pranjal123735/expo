import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
export function SettingsScreen() {
    return (
      <View style={styles.container}>
        <Text variant="headlineMedium">Settings!</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });