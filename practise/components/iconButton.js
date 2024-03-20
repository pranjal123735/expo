import * as React from 'react';
import { Button,IconButton,Colors ,MD3Colors} from 'react-native-paper';

const CustomIconButton = ({icon,onPress,iconColor,size}) => (
    <IconButton
    icon={icon}
    size={size}
    onPress={onPress}
    iconColor={iconColor}
  />
);

export default CustomIconButton;