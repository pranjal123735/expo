import React, { useState } from 'react';
import { View,Text,StyleSheet,Modal } from 'react-native';
import { Button, Paragraph, Dialog, Portal,MD3Colors } from 'react-native-paper';
import CustomButton from './button';
import CustomIconButton from './iconButton';
import { STYLES } from '../STYLES/STYLES';

const DialogBox = ({ visible, setVisible, onHide}) => {
  // const showDialog = () => setVisible(true);
  const hideDialog = () => {
    setVisible(false);
    onHide(false);
  };

  const showDialog=()=>{
    console.log("djsdhjh")
  }

  return (
      <Modal
        animationType="slide" // You can adjust animation type as needed
        transparent={true}
        visible={visible}
        onRequestClose={hideDialog} 
      >
        <View style={STYLES.MODAL_CONTAINER}>
            <View style={STYLES.MODAL_TASK_BUTTON_CONTAINER}>
              <View style={STYLES.MODAL_TASK_BUTTON}>
                <CustomButton buttonText="Meeting" icon="briefcase"  onPress={()=>{showDialog()}}/>
              </View>
              <View style={STYLES.MODAL_TASK_BUTTON}>
                <CustomButton buttonText="Birthday" icon="cake"  onPress={()=>{showDialog()}}/>
              </View>
              <View style={STYLES.MODAL_TASK_BUTTON}>
                <CustomButton buttonText="Others" icon="briefcase"  onPress={()=>{showDialog()}}/>
              </View>
            </View>
            
            <View style={STYLES.MODAL_CLOSE_ICON}>
                <CustomIconButton icon="window-close" onPress={()=>{hideDialog()}} iconColor={MD3Colors.error50} />
            </View>
        </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    textAlign:'left',
    color:'white',
    marginBottom: 10,
    fontSize: 18,
  },
});

export default DialogBox;
