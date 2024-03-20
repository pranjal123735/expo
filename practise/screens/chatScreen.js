import { React, useRef, useState } from 'react'
import { Button, IconButton,Dialog,Paragraph } from 'react-native-paper';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, ToastAndroid } from 'react-native';

import CustomIconButton from '../components/iconButton';
import ChatTextInput from '../components/inputField';
import Chips from '../components/chips';

import { STYLES } from '../STYLES/STYLES'

export function ChatScreen() {
  const [selectedApps, setSelectedApps] = useState([]);

  const handleAppClick = (app) => {
    if(!selectedApps.includes(app))
    {
      setSelectedApps([...selectedApps, app]); 
    }
    else
    {
      ToastAndroid.showWithGravity(
        'Already selected',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    }
  };

  const removeMessageType = (type) => {
    setSelectedApps(selectedApps.filter(selectedApp => selectedApp !== type));
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={STYLES.CHATSCREEN_CONTAINER}>
        <View style={STYLES.HOMESCREEN_PARENT}>
          <Text style={STYLES.HOMESCREEN_TEXT}>Message Types:</Text>
          <View style={STYLES.HOMESCREEN_CHILD}>
            <CustomIconButton icon="whatsapp" onPress={() => handleAppClick('Whatsapp')} />
            <CustomIconButton icon="facebook-messenger" onPress={() => handleAppClick('Facebook Messenger')} />
            <CustomIconButton icon="gmail" onPress={() => handleAppClick('Gmail')} />
            <CustomIconButton icon="microsoft-teams" onPress={() => handleAppClick('Microsoft Teams')} />
            <CustomIconButton icon="slack" onPress={() => handleAppClick('Slack')} />
            <CustomIconButton icon="message" onPress={() => handleAppClick('Message')} />
          </View>
        </View>
        <View style={STYLES.CHATSCREEN_PARENT}>
          <View style={STYLES.CHATSCREEN_TEXTFIELD}>
            <ChatTextInput />
          </View>
        </View>
        <View style={STYLES.CHATSCREEN_MESSAGE_MEDIUM_CONTAINER}>
          <Text style={STYLES.CHATSCREEN_MESSAGE_MEDIUM_TEXT}>Send Message Through:</Text>
          {selectedApps.map((app, index) => (
            <View style={STYLES.CHATSCREEN_MESSAGE_MEDIUM}>
              <Chips text={app} onPress={() => removeMessageType(app)} />
            </View>
          ))}
        </View>
      </SafeAreaView>
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