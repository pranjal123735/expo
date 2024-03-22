import * as React from 'react';
import { Button,Provider,Portal,Dialog,RadioButton ,MD3Colors,Divider,Checkbox} from 'react-native-paper';
import { StyleSheet, Text, View,ScrollView,Paragraph,Modal,TextInput ,TouchableOpacity, Image,PermissionsAndroid,SafeAreaView,Alert,Platform,TouchableHighlight} from 'react-native';
import {CameraScreen} from 'react-native-camera-kit'
// import { SafeAreaView } from 'react-native-safe-area-context';

import CustomButton from '../components/button';

import {STYLES} from '../STYLES/STYLES'
import Cards from '../components/cards';
import DialogBox from '../components/dialogBox';
import InputFiledSlide from '../components/inputFieldSlide';
import CustomIconButton from '../components/iconButton';
import Chips from '../components/chips';

export function NotesScreen() {

  const [visible, setVisible] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [note, setNote] = React.useState('');
  const [photo, setPhoto] = React.useState(null);
  const [isPermitted, setIsPermitted] = React.useState(false);
  const [captureImages, setCaptureImages] = React.useState([]);
  
  const ref = React.useRef();
  const refpass = React.useRef();
  

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs camera permission',
        },
      );
      // If CAMERA Permission is granted
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const requestExternalWritePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'External Storage Write Permission',
          message: 'App needs write permission',
        },
      );
      // If WRITE_EXTERNAL_STORAGE Permission is granted
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      alert('Write permission err', err);
    }
    return false;
  };

  const requestExternalReadPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Read Storage Permission',
          message: 'App needs Read Storage Permission',
        },
      );
      // If READ_EXTERNAL_STORAGE Permission is granted
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      alert('Read permission err', err);
    }
    return false;
  };

  const openCamera = async () => {
    if (Platform.OS === 'android') {
      if (await requestCameraPermission()) {
        if (await requestExternalWritePermission()) {
          if (await requestExternalReadPermission()) {
            setIsPermitted(true);
          } else alert('READ_EXTERNAL_STORAGE permission denied');
        } else alert('WRITE_EXTERNAL_STORAGE permission denied');
      } else alert('CAMERA permission denied');
    } else {
      setIsPermitted(true);
    }
  };

  const onBottomButtonPressed = (event) => {
    const images = JSON.stringify(event.captureImages);
    if (event.type === 'left') {
      setIsPermitted(false);
    } else if (event.type === 'right') {
      setIsPermitted(false);
      setCaptureImages(images);
    } else {
      Alert.alert(
        event.type,
        images,
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
  };
  
  
  const takePicture = async (camera) => {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      setPhoto(data.uri);
    }
  };


  const handleAppClick=()=>{
    console.log("111111111111")
  }

  const handleDialogHide = () => {
    setVisible(false);
  };


  const handleInputChangePassword = (text) => {
    setPassword(text)
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
        {isPermitted ? (
        <View style={{flex: 1}}>
          <CameraScreen
            // Buttons to perform action done and cancel
            actions={{
              rightButtonText: 'Done',
              leftButtonText: 'Cancel'
            }}
            onBottomButtonPressed={
              (event) => onBottomButtonPressed(event)
            }
            // flashImages={{
            //   // Flash button images
            //   on: require('../assets/icon.png'),
            //   off: require('../assets/icon.png'),
            //   auto: require('../assets/icon.png'),
            // }}
            cameraFlipImage={require('../assets/icon.png')}
            // captureButtonImage={require('../assets/capture.png')}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.titleText}>React Native Camera</Text>
          <Text style={styles.textStyle}>{captureImages}</Text>
          <TouchableHighlight
            onPress={openCamera}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonTextStyle}>Open Camera</Text>
          </TouchableHighlight>
        </View>
      )}
            {visible && <DialogBox  visible={visible} setVisible={setVisible} onHide={handleDialogHide} >
              <Text style={{color:'white',marginBottom:'5%'}}>Create Password For Note Security</Text>
              <TextInput
                      editable
                      multiline={false}
                      // maxLength={5000}
                      onChangeText={(text)=>setPassword(text)}
                      value={password}
                      style={[STYLES.INPUT_FIELD_PASSWORD]}
                      textAlign='center'
                      // textAlignVertical="center"
                      placeholder='Password '
                    />
              <View style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                <Text style={{color:'white',textAlignVertical: 'center'}} >Send Password to Email</Text>
                <Checkbox
                  color='white'
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
              </View>
              <CustomButton buttonText="Done" icon="check"  onPress={()=>{showDialog()}}/>
              </DialogBox>}
            <View style={STYLES.NOTESSCREEN_PARENT}>
              <View style={STYLES.NOTESSCREEN_PARENT_TEXT_CONTAINER}>
                <Text style={STYLES.NOTESCREEN_TEXT}>Notes</Text>
              </View>
            </View>
            <View style={[STYLES.NOTESCREEN_INPUTFIELD]}>

              <View style={[STYLES.NOTESCREEN_INPUTFIELD_PARENT]}>
                <InputFiledSlide  ref={refpass} textName="Subject:" value={email} onChangeText={handleInputChange}/>
                <View style={STYLES.NOTESCREEN_INPUTFIELD_CONTAINER}>
                <TextInput
                    editable
                    multiline={true}
                    // maxLength={5000}
                    // onChangeText={(text)=>setNote(text)}
                    value={photo}
                    style={[STYLES.INPUT_FIELD_SLIDER_CONTAINER_PARAGRAPH]}
                    textAlignVertical="top"
                    placeholder='Write here'
                  />
                  <View style={STYLES.NOTESCREEN_INPUTFIELD_ICON_CONTAINER}>
                        <Divider style={STYLES.NOTESCREEN_INPUTFIELD_ICON_CONTAINER_DIVIDER} />
                        <View style={[STYLES.NOTESCREEN_ICON_LEFT]}>
                          <CustomIconButton icon="camera" onPress={() => openCamera()} iconColor={MD3Colors.primary50} size={25} />
                          <CustomIconButton icon="lock-open" onPress={() =>showDialog()}  iconColor={MD3Colors.primary50} size={25} />
                          <CustomIconButton icon="delete" onPress={() => handleAppClick('Whatsapp')} iconColor={MD3Colors.primary50} size={25} />
                          <CustomIconButton icon="share" onPress={() => handleAppClick('Whatsapp')} iconColor={MD3Colors.primary50} size={25} />
                          <View style={STYLES.NOTESCREEN_ICON_RIGHT} >
                            <CustomIconButton icon="content-copy" onPress={() => handleAppClick('Whatsapp')} iconColor={MD3Colors.primary50} size={25} />
                          </View>
                        </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={STYLES.NOTESCREEN_BUTTON_CONTAINER}>
              <View style={STYLES.NOTESCREEN_BUTTON_PARENT}>
              <CustomButton buttonText="Add note" icon="note"  onPress={()=>{showDialog()}}/>
              </View>
            </View>
            <View style={{marginBottom:'5%'}}>
              <Text>Choose tags to categorie the note:</Text>
            </View>

            <View style={STYLES.NOTESCREEN_TAGS}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{width:'0.5%'}}></View>
                <Chips icon={'tag'} text={"Story"} />
                <View style={{width:'2%'}}></View>
                <Chips icon={'tag'} text={"Diary"} />
                <View style={{width:'2%'}}></View>
                <Chips icon={'tag'} text={"Work"} />
                <View style={{width:'2%'}}></View>
                <Chips icon={'tag'} text={"List"} />
                <View style={{width:'2%'}}></View>
                <Chips icon={'tag'} text={"Important"} />
                <View style={{width:'2%'}}></View>
                <Chips icon={'tag'} text={"Schedule"} />
                <View style={{width:'2%'}}></View>
                <Chips icon={'tag'} text={"Meetings"} />
                </ScrollView>
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