import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity, ToastAndroid} from 'react-native';


let SoundPlayer = require('react-native-sound');

let song = null;

export default class AboutScreen extends Component {

    constructor(props){
        super(props)

        this.state ={
            pause: false,
        };
    }

    componentWillMount(){
        song= new SoundPlayer('../../Sound/tuturu.mp3', SoundPlayer.MAIN_BUNDLE, (error) =>{
            if(error)
            ToastAndroid.show('Error when init SoundPlayer :(((', ToastAndroid.SHORT);

        });
    }

    onPressButtonPlay(){
        if(song != null){
            song.play((success) =>{
                if(!success)
                ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT);
            });
        }
    }

    onPressButtonPause(){
        if(song != null){
            if(this.state.pause)  //play resume
                song.play((success) => {
                    if(!sucess)
                        ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT);
                });
            else song.pause();     

            this.setState({pause: !this.state.pause});
        }
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
            <TouchableOpacity onPress={this.onPressButtonPlay.bind(this)}>
            <Text>YOLO</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPressButtonPause.bind(this)}>
            <Text>(this.state.pause ? 'RESUME' : 'STOP')</Text>
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
    }
});