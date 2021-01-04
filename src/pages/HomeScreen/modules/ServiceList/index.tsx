import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export const ServiceList = ({ navigation }) => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Найти такси',
      route: 'Transport',
      icon: 'taxi',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Найти жилье',
      route: 'Housing',
      icon: 'hotel',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Найти снарягу',
      route: 'Equipment',
      icon: 'grav',
    },
  ];

  const Item = ({ title, route, icon }) => (
    <View style={styles.item}>
      <Button
        title={title}
        onPress={() => navigation.navigate(route)}
        icon={<Icon name={icon} size={15} color="#fff" />}
      />
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} route={item.route} icon={item.icon} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
});
