import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const DetailCard = ({ text, type, id }) => {
  const getImage = _ => (
    `https://firebasestorage.googleapis.com/v0/b/combo-social.appspot.com/o/${type}%2F${id}.png?alt=media&token=b4b17bce-85c9-42df-9555-d484d99c4c3b`
  );

  const titles = {
    restaurants: 'bar/restaurante:',
    combos: 'tu "combo social" es:',
    projects: 'estas ayudando a:',
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: getImage() }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{titles[type]}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
  title: {
    color: '#525050',
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: '30%',
  },
});

export default DetailCard;
