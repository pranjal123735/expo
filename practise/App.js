import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import Button from '@mui/material/Button';
import CustomButton from './components/button';
import MyComponent from './components/bottomNav';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NotesScreen } from './screens/notesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#e4f5f4" />
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={MyComponent}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Notes" component={NotesScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
