import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'
import {commonStyles} from '../utils/commonStyles'
import { ImagePath } from '../utils/imagePath';
import {Fonts} from '../utils/Fonts'
import ButtonLarge from '../components/Button/ButtonLarge'
import { Colors } from '../utils/Colors';

export default function Splash({navigation}){
    return (
      <View style={commonStyles.container}>
        <Image style={styles.image} source={ImagePath.splash} />
        <ButtonLarge
          onPress={() => navigation.navigate('Dashboard')}
          title={'Start'}
          style={styles.button}
          textStyle={styles.buttonText}
        />
        <Text style={styles.title}>{'Task'}</Text>
        <Text style={styles.des}>
          {
            'Book a Covid test with a Fit-to-Travel certificate for your friend from England'
          }
        </Text>

        <ButtonLarge
          title={'Appointment confirmation SMS'}
          style={styles.button2}
          textStyle={styles.buttonText2}
        />
      </View>
    );
}

const styles  = StyleSheet.create({
    image:{
        height:180,
        width: 180,
        alignSelf:'center',
        marginTop:'10%'
    },
    title:{
        fontSize:24,
        fontFamily:Fonts.bold,
        alignSelf:'center',
        marginTop:28,
        color:'white'
    },
    des:{
        fontFamily:Fonts.regular,
        color:'white',
        fontSize:20,
        marginHorizontal:24,
        textAlign:'center',
        marginTop:20,
    },
    button:{
        width: '85%',
        marginTop:28,
        backgroundColor:'#D0E9EA'
    },
    buttonText:{
        color:'#2E4F4E',
    },
    button2:{
        width: '85%',
        backgroundColor:Colors.primary,
        borderColor:'rgba(255, 255, 255, 0.3)',
        borderWidth:1,
        position: 'absolute',
        bottom:32,
    },
    buttonText2:{
        color:'#D0E9EA',

    }
})