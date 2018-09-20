import React, {Component} from 'react';
import {Platform, Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import { styles } from './style';
import { connect } from 'react-redux';

const articles = require('../../Articles.json');

class ArticleListScreen extends Component {
    
    constructor (props) {
        super(props);
        this.data = this.getFilteredData();
    }

    getFilteredData = () => {
        const { filters } = this.props;
        if (Object.keys(filters).length !== 0 || (filters.category !== 'all' && filters.cat === '0')) {
            return articles.articles.filter((item) => {
                if (item.cat === filters.category) return item;
            });
        }
        return articles.articles;
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
        return <View style={styles.rowActu} keys={item.title}>
            <Text style={styles.titleH2}>{item.title}</Text>
            <Text style={styles.cat}>{item.cat}</Text>    
            <Image
                style={styles.image}
                source={require('./img/img-actu-1.jpg')}
            />
            <Text style={styles.description}>{item.desc}</Text>
        </View>
        );
    }
    

    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.titleH1}>Liste des actualités</Text>
            
            <FlatList
            
                data = {this.data}
                renderItem= {this.renderItem}
            />
          </View>
        );
      }
}

const mapStateToProps = (state) => {
    return {
        filters: state.FilterReducer.filters
    };
};

export default connect(mapStateToProps)(ArticleListScreen);