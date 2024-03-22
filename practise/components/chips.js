import * as React from 'react';
import { View } from 'react-native';
import { Chip } from 'react-native-paper';

const Chips = ({icon,key,text,onPress}) => {
    return(
            <Chip icon={icon} onPress={onPress}>{text}</Chip>
    )
};

export default Chips;