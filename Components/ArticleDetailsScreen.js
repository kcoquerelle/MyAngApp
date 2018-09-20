/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, ScrollView, Image, Dimensions} from 'react-native';

const cssDefaultValue = 10;

const justifyOption = Platform.select({
    ios: 'justify',
    android: 'left',
  });

export default class ArticleDetailsScreen extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image style={styles.image} source={{uri: 'https://img.lemde.fr/2018/09/18/0/0/1600/580/1600/580/60/0/a2ecca4_KoCS90UnSs1aeZ1u1NA1Zwvr.jpg'}}/>
        <Text style={styles.title}>Qui se cache derrière le mystérieux "Momo Challenge" ?</Text>
        <Text style={styles.description}>Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres. Des gens qui m’ont tendu la main, peut-être à un moment où je ne pouvais pas, où j’étais seul chez moi. Et c’est assez curieux de se dire que les hasards, les rencontres forgent une destinée... Parce que quand on a le goût de la chose, quand on a le goût de la chose bien faite, le beau geste, parfois on ne trouve pas l’interlocuteur en face je dirais, le miroir qui vous aide à avancer. Alors ça n’est pas mon cas, comme je disais là, puisque moi au contraire, j’ai pu : et je dis merci à la vie, je lui dis merci, je chante la vie, je danse la vie... je ne suis qu’amour ! Et finalement, quand beaucoup de gens aujourd’hui me disent « Mais comment fais-tu pour avoir cette humanité ? », et bien je leur réponds très simplement, je leur dis que c’est ce goût de l’amour ce goût donc qui m’a poussé aujourd’hui à entreprendre une construction mécanique, mais demain qui sait ? Peut-être simplement à me mettre au service de la communauté, à faire le don, le don de soi...</Text>
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent('DisplayAnImage', () => DisplayAnImage);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },
  title: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    margin: 15,
  },
  description: {
    textAlign: justifyOption,
    fontSize: 20,
    color: '#333333',
    margin: 15,
  },
  image: {
    width: Dimensions.get('window').width - cssDefaultValue,
    height: 250,
    backgroundColor: 'white',
    margin: 5,
    borderRadius: cssDefaultValue
  }
});