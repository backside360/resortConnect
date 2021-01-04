import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  RefreshControl,
  ScrollView,
} from 'react-native';
import { ListItem, Avatar, Badge, Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Transfer = ({ route }) => {
  const { id, to, from } = route.params;
  return (
    <View>
      <Card>
        <Card.Title>
          {from} <Icon name="long-arrow-right" /> {to}
        </Card.Title>
        <Card.Divider />
        <Text style={{ marginBottom: 10 }}>Людей в поездке:</Text>
        <Text style={{ marginBottom: 10 }}>Стоимость:</Text>
        <Text style={{ marginBottom: 10 }}>Дополнительное описание:</Text>
        <Button
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Я еду"
        />
      </Card>
    </View>
  );
};
