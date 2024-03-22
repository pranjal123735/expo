import * as React from 'react';
import { Button,Provider,Portal,Dialog,RadioButton,MD3Colors } from 'react-native-paper';
import { StyleSheet, Text, View,SafeAreaView,ScrollView,Paragraph,Modal, } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native'

import CustomButton from '../components/button';

import {STYLES} from '../STYLES/STYLES'
import Cards from '../components/cards';
import DialogBox from '../components/dialogBox';
import CustomIconButton from '../components/iconButton';

export function HomeScreen() {

  const [visible, setVisible] = React.useState(false);
  const navigation = useNavigation();

  const handleDialogHide = () => {
    setVisible(false);
  };

  const showDialog=()=>{
    console.log("dhdshdsh")
    setVisible(true)
  }

  const hideDialog = () => {
    setVisible(false);
    // onHide(false);
  };


  

    return (
      <View style={styles.container}>
        <SafeAreaView style={STYLES.HOMESCREEN_CONTAINER}>
          {visible && <DialogBox  visible={visible} setVisible={setVisible} onHide={handleDialogHide} >
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
            </DialogBox>}
            <View style={STYLES.HOMESCREEN_PARENT}>
                <Text style={STYLES.HOMESCREEN_TEXT}>Create Task:</Text>
                <View style={STYLES.HOMESCREEN_CHILD}>
                    <CustomButton buttonText="Add new task" icon="tab-plus"  onPress={()=>{showDialog()}}/>
                    <CustomButton buttonText="Add notes" icon="note" onPress={()=>{navigation.navigate("Notes")}} />
                </View>
            </View>
            <ScrollView>
                <View style={STYLES.CARD}>
                    <Cards cardTitle="Metting" cardSubTtitle="HOME" />
                </View>
            </ScrollView>
        </SafeAreaView>
      </View>
    );
  }

  const styles = StyleSheet.create({
    dialogContainer: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      elevation: 5,
    },
    modalText: {
      marginBottom: 10,
      fontSize: 18,
    },
  });