import * as React from 'react';
import { Button } from 'react-native-paper';

const CustomButton = ({buttonText,icon,onPress}) => (
  <Button icon={icon} mode="contained" onPress={onPress} style={{width:'fit-content'}}>
    {buttonText}
  </Button>
);

export default CustomButton;