import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Cards = ({cardTitle,cardSubTtitle}) => (
  <Card>
    <Card.Title title={cardTitle} subtitle={cardSubTtitle} left={LeftContent} />
    {/* <Card.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content> */}
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={{padding:'2%' }} />    
    <Card.Actions>
      <Button >Delete</Button>
      <Button>Edit</Button>
    </Card.Actions>
  </Card>
);

export default Cards;