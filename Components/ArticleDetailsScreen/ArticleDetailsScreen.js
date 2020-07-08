/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, ScrollView, Image, Dimensions} from 'react-native';

const cssDefaultValue = 10;

const justifyOption = Platform.select({
    ios: 'justify',
    android: 'left',
  });

export default class ArticleDetailsScreen extends Component {
  render() {
    const {article} = this.props.navigation.state.params;
    var img;
    if(article.cat == 'jeux'){
        img = <Image style={styles.imageArticle} source={require('../../Images/gaming.jpg')}/>;
    }
    else if (article.cat == 'sports'){
        img = <Image style={styles.imageArticle} source={require('../../Images/sports.jpg')}/>;
    }
    else img = <Image style={styles.imageArticle} source={require('../../Images/politique.jpg')}/>;
    
    return (
      <ScrollView contentContainerStyle={styles.containerArticle}>
        {img}
        <Text style={styles.titleArticle}>{article.title}</Text>
        <Text style={styles.descriptionArticle}>{article.desc}}</Text>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  containerArticle: {
    backgroundColor: '#F3F3FC',
  },
  titleArticle: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    margin: 15,
  },
  descriptionArticle: {
    textAlign: justifyOption,
    fontSize: 20,
    color: '#333333',
    margin: 15,
  },
  imageArticle: {
    width: Dimensions.get('window').width - cssDefaultValue,
    height: 250,
    backgroundColor: 'white',
    margin: 5,
    borderRadius: cssDefaultValue
  }
});

// const mapStateToProps = (state) => {
//   return {
//       filters: state.FilterReducer.filters
//   };
// };

// export default connect(mapStateToProps)(ArticleDetailsScreen);