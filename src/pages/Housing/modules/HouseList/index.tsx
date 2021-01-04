import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  RefreshControl,
  ScrollView,
} from 'react-native';
import { ListItem, Avatar, Badge } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import Icon from 'react-native-vector-icons/FontAwesome';

export const HouseList = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const wait = (timeout: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  const list = [
    {
      name: 'Тревис Райс',
      avatar_url:
        'https://www.ccdiscovery.com/wp-content/uploads/2019/10/Travis-Rice.jpg',
      from: 'Аэропорт',
      to: 'Роза пик 2320',
      placesLeft: 1,
    },
    {
      name: 'Денис Бонус',
      avatar_url:
        'https://www.ski.ru/kohana/upload/ckfinder_images/u35292/images/35292_1418828434.jpg',
      from: 'Аэропорт',
      to: 'Парк на 1600',
      placesLeft: 10,
    },
  ];

  return (
    <View style={styles.transport_list}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {list.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={styles.container}
            Component={TouchableScale}
            friction={90}
            tension={100}
            activeScale={0.95}
            linearGradientProps={{
              colors: ['#050505', '#333298'],
              start: { x: 1, y: 0 },
              end: { x: 0.2, y: 0 },
            }}
          >
            <Avatar source={{ uri: l.avatar_url }} />
            <ListItem.Content>
              <ListItem.Title style={styles.content}>{l.name}</ListItem.Title>
              <ListItem.Subtitle style={styles.content}>
                {l.from}
              </ListItem.Subtitle>
              <Icon name="long-arrow-down" style={styles.icon} />
              <ListItem.Subtitle style={styles.content}>
                {l.to}
              </ListItem.Subtitle>
            </ListItem.Content>
            <Badge
              value={l.placesLeft}
              status={l.placesLeft > 1 ? 'primary' : 'error'}
              textStyle={{ color: '#fff' }}
              containerStyle={{ marginTop: -20 }}
            />
          </ListItem>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  transport_list: {
    flex: 1,
    marginTop: '2%',
  },
  container: {
    borderRadius: 10,
    width: '90%',
    marginBottom: '3%',
  },
  content: {
    color: '#fff',
  },
  icon: {
    marginTop: '1%',
    marginLeft: '5%',
  },
});
