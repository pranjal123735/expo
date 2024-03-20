import * as React from 'react';
import { View } from 'react-native';
import { Chip } from 'react-native-paper';

const Chips = ({key,text,onPress}) => {
    return(
            <Chip icon="check" onPress={onPress} style={{width:'auto'}}>{text}</Chip>
    )
};

export default Chips;