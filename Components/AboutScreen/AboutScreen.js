import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity, ToastAndroid} from 'react-native';


import SoundPlayer from 'react-native-sound-player';

export default class AboutScreen extends Component {

    constructor(props){
        super(props);
        this.state ={
            pause: false,
        };
    }

    componentDidMount(){
    }

    onPressButtonPlay(){
        SoundPlayer.playSoundFile('tuturu', 'mp3');
    }

    onPressButtonPause(){
        if(this.state.pause) SoundPlayer.resume();
        else SoundPlayer.pause();
        this.setState({pause: !this.state.pause});
    }

    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.title}>About us</Text>
            <Text style={styles.name}>- Guillouet Thomas</Text>
            <Text style={styles.name}>- Coquerelle Killian</Text>
            <Text style={styles.name}>- Lempereur Kilian</Text>
            <Text style={styles.name}>- Grandpierre Adrien</Text>
            <Text style={styles.name}>- Aubert Alexis</Text>
            <TouchableOpacity style={styles.button} onPress={this.onPressButtonPlay.bind(this)}>
                <Text style={{color: 'white'}}>YOLO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={this.onPressButtonPause.bind(this)}>
                <Text style={{color: 'white'}} >{this.state.pause ? 'RESUME' : 'STOP'}</Text>
            </TouchableOpacity> 
          </View>
        );
      }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#000000',
        marginBottom: 50,
    },
    name: {
        fontSize: 20,
        color: '#000000',
        marginBottom: 10,
    },
    button: {
        marginTop: 30,
        borderColor: '#000000',
        borderWidth: 1,
        padding: 8,
        backgroundColor: '#660000',
        borderRadius: 5,
        borderColor: '#000000',
    }
});