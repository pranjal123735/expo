import * as React from 'react';
import { Button,Provider,Portal,Dialog,RadioButton ,MD3Colors,Divider} from 'react-native-paper';
import { StyleSheet, Text, View,SafeAreaView,ScrollView,Paragraph,Modal,TextInput } from 'react-native';

import CustomButton from '../components/button';

import {STYLES} from '../STYLES/STYLES'
import Cards from '../components/cards';
import DialogBox from '../components/dialogBox';
import InputFiledSlide from '../components/inputFieldSlide';
import CustomIconButton from '../components/iconButton';

export function NotesScreen() {

  const [visible, setVisible] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [note, setNote] = React.useState('');
  
  const ref = React.useRef();
  const refpass = React.useRef();


  const handleAppClick=()=>{
    console.log("111111111111")
  }

  const handleDialogHide = () => {
    setVisible(false);
  };

  const showDialog=()=>{
    console.log("dhdshdsh")
    setVisible(true)
  }

  const handleInputChange = (text) => {
    setEmail(text)
  };

    return (
      <View style={styles.container}>
        <SafeAreaView style={STYLES.NOTESCREEN_CONTAINER}>
            <View style={STYLES.NOTESSCREEN_PARENT}>
              <View style={STYLES.NOTESSCREEN_PARENT_TEXT_CONTAINER}>
                <Text style={STYLES.NOTESCREEN_TEXT}>Notes</Text>
              </View>
            </View>
            <View style={STYLES.NOTESCREEN_INPUTFIELD}>
              <InputFiledSlide  ref={refpass} textName="Subject:" value={email} onChangeText={handleInputChange}/>
              <View style={{height:"70%"}}>
                <TextInput
                  editable
                  multiline={true}
                  // maxLength={5000}
                  onChangeText={(text)=>setNote(text)}
                  value={note}
                  style={[STYLES.INPUT_FIELD_SLIDER_CONTAINER_PARAGRAPH]}
                  textAlignVertical="top"
                  placeholder='Write here'
                />
                <View style={{ position: 'absolute', bottom: 0 }}>
                <Divider style={{ marginVertical: 10, height: '2%',color:'red' }} />
                </View>
                <View style={{ position: 'absolute', bottom: 0}}>
                      <View style={[STYLES.NOTESCREEN_ICON, {left:20,} ]}>
                        <CustomIconButton icon="camera" onPress={() => handleAppClick('Whatsapp')} iconColor={MD3Colors.primary50} size={25} />
                        <CustomIconButton icon="lock-open" onPress={() => handleAppClick('Whatsapp')}  iconColor={MD3Colors.primary50} size={25} />
                        <CustomIconButton icon="delete" onPress={() => handleAppClick('Whatsapp')} iconColor={MD3Colors.primary50} size={20} />
                        {/* <CustomIconButton icon="format-color-text" onPress={() => handleAppClick('Whatsapp')} iconColor={MD3Colors.primary50} size={25} /> */}
                      </View>
                </View>
                <View style={{ position: 'absolute', bottom: 0, right:20, }}>
                <Divider style={{ marginVertical: 10, height: '2%',color:'red' }} />
                      <CustomIconButton icon="content-copy" onPress={() => handleAppClick('Whatsapp')} iconColor={MD3Colors.primary50} size={25} />
                </View>
              </View>
              {/* <View style={STYLES.NOTESCREEN_ICON}>
                  <CustomIconButton icon="camera" onPress={() => handleAppClick('Whatsapp')} iconColor={MD3Colors.primary50} size={25} />
                  <CustomIconButton icon="lock-open" onPress={() => handleAppClick('Whatsapp')}  iconColor={MD3Colors.primary50} size={25} />
                  <CustomIconButton icon="delete" onPress={() => handleAppClick('Whatsapp')} iconColor={MD3Colors.primary50} size={25} />
                  <CustomIconButton icon="format-color-text" onPress={() => handleAppClick('Whatsapp')} iconColor={MD3Colors.primary50} size={25} />
              </View> */}
              <View style={STYLES.NOTESCREEN_BUTTON_CONTAINER}>
                <View style={STYLES.NOTESCREEN_BUTTON_PARENT} >
                  <CustomButton buttonText="Add note" icon="note"  onPress={()=>{showDialog()}}/>
                </View>
              </View>
            </View>
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