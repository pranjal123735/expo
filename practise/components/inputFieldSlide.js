import * as React from 'react';
import { NativeAppEventEmitter, Modal, SafeAreaView, StyleSheet,TextInput, TouchableHighlight, View, ToastAndroid } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { STYLES } from '../STYLES/STYLES';

const InputFiledSlide =React.forwardRef(({ textName,value,onChangeText}, ref)=>{
    
    return(
    <View style={{display:'flex',justifyContent:'center'}}>
        <View style={STYLES.INPUT_FIELD_SLIDER_CONTAINER}>
            <View style={STYLES.INPUT_FIELD_SLIDER_CONTAINER_TEXT_CONTAINER}>
                <Text ref={ref} style={STYLES.INPUT_FIELD_SLIDER_CONTAINER_TEXT}>{textName}</Text>
            </View>
            <TextInput
                editable
                multiline={false}
                maxLength={50}
                onChangeText={onChangeText}
                value={value}
                // paddingLeft='30%'
                onFocus={
                    ref.current ? ref.current.setNativeProps({ style: { textAlign: 'left'} }) : undefined
                }
                onBlur={
                    value.length == 0 && ref.current ? ref.current.setNativeProps({ style: { textAlign: 'center' ,paddingLeft:'0%'} }) : undefined
                }
                style={[STYLES.INPUT_FIELD_SLIDER_CONTAINER_INPUT,{ paddingLeft: value.length > 0 ? '28%' : '0%',textAlign:value.length>0? 'left':'center' }]} keyboardType="email-address"
            />
        </View>
    </View>
);
})

export default InputFiledSlide;