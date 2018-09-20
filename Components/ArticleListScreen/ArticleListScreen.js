import React, {Component} from 'react';
import {Platform, Text, View, Image, FlatList} from 'react-native';
import { styles } from './style';

const data = require('../../Articles.json');

export default class ArticleListScreen extends Component {
    
    constructor (props) {

        super(props);

        this.state = {
        }
    }
  
    renderItem = ({item}) => {
        return <View style={styles.rowActu}>
            <Text style={styles.titleH2}>{item.title}</Text>
            <Text style={styles.cat}>{item.cat}</Text>    
            <Image
                style={styles.image}
                source={require('./img/img-actu-1.jpg')}
            />
            <Text style={styles.description}>{item.desc}</Text>
        </View>
    }
    

    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.titleH1}>Liste des actualités</Text>
            
            <FlatList
            
                data = {data.articles}
                renderItem= {this.renderItem}
            />
          </View>
        );
      }
}