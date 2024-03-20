import * as React from 'react';
import { View } from 'react-native';
import { TextInput, Button, IconButton } from 'react-native-paper';
import CustomButton from './button';

const ChatTextInput = ({ value, onChangeText, onSend }) => {
  return (
    <View>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8 }}>
      <View style={{ flex: 1, marginRight: 8 }}>
        <TextInput
          label="Message"
          value={value}
          onChangeText={onChangeText}
          underlineColor="transparent"
          style={{ backgroundColor: '#F6F6F6', borderRadius: 20 }}
          multiline
          numberOfLines={3} // Adjust the number of lines as needed
        />
      </View>
    </View>
    <View style={{width:'100%',display:'flex',justifyContent:'center',marginTop:'5%'}}>
        <View style={{width:'100%',alignItems:'center'}}>
            <View style={{width:'30%'}}>
                <CustomButton buttonText="SEND" icon="send"/>
            </View>
        </View>
    </View>
    </View>


  );
};

export default ChatTextInput;
