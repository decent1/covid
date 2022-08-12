import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity, ScrollView,Image } from 'react-native'
import QuestionHeader from '../../components/QuestionHeader';
import { Colors } from '../../utils/Colors';
import { commonStyles } from '../../utils/commonStyles'
import { ImagePath } from '../../utils/imagePath';
import { Fonts } from '../../utils/Fonts'
import AntDesign from 'react-native-vector-icons/AntDesign'

const RecieveCertificate = ({navigation}) => {
  return (
    <View style={commonStyles.container}>
      <QuestionHeader />
      <ScrollView>
      <Text style={styles.title}>Do you also need?</Text>
      <View style={styles.cardContainer}>
                <Image 
                    style={styles.covidTest}
                    source={ImagePath.travel}
                />
                <Text style={styles.title}>{'Fit-to-Travel'}</Text>
                <Text style={styles.title}>{'Certificate'}</Text>
                <Text style={styles.des}>{'Recieve a cerficate upon a negative test result.'}</Text>

                <TouchableOpacity style={styles.infoButton}>
                    <AntDesign name="info" size={20} color={Colors.primary} />
                </TouchableOpacity> 
            </View>

            <TouchableOpacity
             activeOpacity={0.8}
             onPress={()=>navigation.navigate('Clincs')}
             style={styles.nextButton}>
                <Text style={styles.buttonText}>{'Next'}</Text>
            </TouchableOpacity>
      </ScrollView>
      
    </View>
  )
}

export default RecieveCertificate


const styles = StyleSheet.create({
    cardContainer:{
        marginHorizontal:16,
        borderRadius:10,
        borderWidth:2,
        borderColor:'rgba(255, 255, 255, 0.2)',
        padding:16,
        marginTop:16
    },
    covidTest:{
        height:88,
        width: 88,
        alignSelf:'center'
    },
    title:{
        fontFamily:Fonts.regular,
        color:Colors.white,
        fontSize:20,
        alignSelf:'center',
        marginTop:16
    },
   
    des:{
        fontSize:16,
        color:Colors.white,
        fontFamily:Fonts.regular,
        alignSelf:'center',
        marginTop:8,
        textAlign:'center'

    },
    infoButton:{
        height:32,
        width: 32,
        borderRadius:16,
        backgroundColor:Colors.white,
        alignSelf:'center',
        marginTop:8,
        alignItems:'center',
        justifyContent:'center'
    },
    optionContainer:{
        flexDirection:'row',
        backgroundColor:Colors.white,
        padding:16,
        borderRadius:6,
        alignItems:'center',
        marginTop:8
    },
    checkContainer:{
        height:16,
        width: 16,
        borderRadius:8,
        borderWidth:1,
        borderColor:Colors.primary,
        alignItems:'center',
        justifyContent:'center',
        marginRight:16,
    },
    checkChildContainer:{
        height:12,
        width: 12,
        borderRadius:6,
        backgroundColor:Colors.primary
    },
    optionTitle:{
        fontFamily:Fonts.medium,
        color:Colors.primary,
        fontSize:16
    },
    optionDes:{
        fontFamily:Fonts.regular,
        color:Colors.primary,
        fontSize:18
    },
    optionTextContainer:{
        flex:1,
    },
    amount:{
        fontFamily:Fonts.medium,
        color:Colors.primary,
        fontSize:16
    },
    nextButton:{
        marginHorizontal:16,
        height:44,
        backgroundColor:'#D0E9EA',
        borderRadius:33,
        alignItems:'center',
        justifyContent:'center',
        marginTop:124,
        marginBottom:26,   
    },
    buttonText:{
        fontFamily:Fonts.medium,
        color:Colors.primary,
        fontSize:16
    }
})