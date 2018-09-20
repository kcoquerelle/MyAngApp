import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity, ToastAndroid} from 'react-native';


// import Sound from 'react-native-sound';

// const song = new Sound('tuturu.mp3', SoundPlayer.MAIN_BUNDLE, (error) =>{
//         if(error) ToastAndroid.show('Error to load the sound :' + error, ToastAndroid.LONG);
//         else ToastAndroid.show('Duration : '+ song.getDuration() + "; num of channels : " + song.getNumberOfChannels, ToastAndroid.LONG);
//     });

export default class AboutScreen extends Component {

    constructor(props){
        super(props);
        // Sound.setCategory('Playback');
        this.state ={
            pause: false,
        };
    }

    componentDidMount(){
        // song= new SoundPlayer('tuturu.mp3', SoundPlayer.MAIN_BUNDLE, (error) =>{
        //     if(error)
        //     ToastAndroid.show('Error when init SoundPlayer :(((', ToastAndroid.SHORT);

        // });
    }

    onPressButtonPlay(){
        // this.setState({song : 
        // });
        // this.song = new Sound('tuturu.mp3', Sound.MAIN_BUNDLE, (error) => {
        //     ToastAndroid.show(error, ToastAndroid.SHORT);
        //     if(error) ToastAndroid.show('Error to load the sound ', ToastAndroid.LONG);
        //     else ToastAndroid.show('Duration : '+ song.getDuration() + "; num of channels : " + song.getNumberOfChannels, ToastAndroid.LONG);
        // });
        // ToastAndroid.show('' + this.song.getNumberOfChannels(), ToastAndroid.SHORT);
        // song= new SoundPlayer('tuturu.mp3', SoundPlayer.MAIN_BUNDLE, (error) =>{
        //     if(error)
        //     ToastAndroid.show('Error when init SoundPlayer :(((', ToastAndroid.SHORT);
            
        //     else{
        //         (song != null)
        //             song.play((success) =>{
        //                 if(!success)
        //                 ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT);
        //             });
                   
        //     }
        // });
        // if(song != null){
        //     song.play((success) =>{
        //         if(!success)
        //         ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT);
        //     });
        // }
    }

    onPressButtonPause(){
        // if(song != null){
        //     if(this.state.pause)  //play resume
        //         song.play((success) => {
        //             if(!success)
        //                 ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT);
        //         });
        //     else song.pause();     

        //     this.setState({pause: !this.state.pause});
        // }
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