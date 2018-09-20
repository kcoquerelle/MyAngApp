import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F3F3FC',
    },
    titleH1: {
        fontSize: 30,
        color: "#333333",
        marginBottom: 60,
        marginTop: 40,
    },
    titleH2: {
        padding: 15,
        paddingBottom: 0,
        fontSize: 20,
    },
    cat:{
        padding: 15,
        paddingTop: 0,
    },
    description: {
        padding: 15,
        fontSize: 17,
        marginTop: 10,
    },
    image: {
        width: 350,
        height: 150,
    },
    rowActu: {
        borderWidth: 1,
        borderColor: "#E3E3E3",
        borderRadius: 3,
        width:350,
        backgroundColor: "#FFFFFF",
        marginTop: 20,
    }
  });