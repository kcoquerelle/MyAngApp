import React, {Component} from 'react';
import {Platform, Text, View, Image, FlatList} from 'react-native';
import { styles } from './style';
import { TouchableOpacity } from 'react-native';

const data = require('../../Articles.json');

export default class ArticleListScreen extends Component {
    
    constructor (props) {

        super(props);

        this.state = {
        }
    }
  
    renderItem = ({item}) => {
        var img;
        if(item.cat == 'jeux'){
            img = <Image style={styles.image} source={require('../../Images/gaming.jpg')}/>;
        }
        else if (item.cat == 'sports'){
            img = <Image style={styles.image} source={require('../../Images/sports.jpg')}/>;
        }
        else img = <Image style={styles.image} source={require('../../Images/politique.jpg')}/>;
        return (
        <View style={styles.rowActu}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Article", {article: item})}>
                <Text style={styles.titleH2}>{item.title}</Text>
                <Text style={styles.cat}>{item.cat}</Text>    
                {img}
                <Text style={styles.description}>{item.desc.substring(0, 112)+'...'}</Text>
            </TouchableOpacity>
        </View>
        );
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