import React, {useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    Modal
} from 'react-native'
import QuestionHeader from '../../components/QuestionHeader'
import { Colors } from '../../utils/Colors'
import { commonStyles } from '../../utils/commonStyles'
import { Fonts } from '../../utils/Fonts'
import { ImagePath } from '../../utils/imagePath'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ButtonLarge from '../../components/Button/ButtonLarge'
import ChooseTest from '../../components/Modal/ChooseTest'

export default function CovidTest({navigation}){
    const [modalVisible, setModalVisible] = useState(false);
    const [selectionOption, setSelectionOption] = useState('1');
    return (
      <View style={commonStyles.container}>
        <QuestionHeader />
        <ScrollView>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <ChooseTest modalVisible={() => setModalVisible(!modalVisible)} />
          </Modal>
          <View style={styles.cardContainer}>
            <Image style={styles.covidTest} source={ImagePath.covidTest} />
            <Text style={styles.title}>{'Covid tests'}</Text>
            <Text style={styles.des}>{'Which test should I choose?'}</Text>

            <TouchableOpacity style={styles.infoButton}>
              <AntDesign
                onPress={() => setModalVisible(true)}
                name="info"
                size={20}
                color={Colors.primary}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setSelectionOption('1')}
              style={[
                styles.optionContainer,
                {
                  marginTop: 16,
                },
              ]}>
              <View style={styles.checkContainer}>
                {selectionOption === '1' && (
                  <View style={styles.checkChildContainer} />
                )}
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionTitle}>{'Antigen'}</Text>
                <Text style={styles.optionDes}>{'Results in 5 hours'}</Text>
              </View>
              <Text style={styles.amount}>{'995,-'}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setSelectionOption('2')}
              style={styles.optionContainer}>
              <View style={styles.checkContainer}>
                {selectionOption === '2' && (
                  <View style={styles.checkChildContainer} />
                )}
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionTitle}>{'Express PCR'}</Text>
                <Text style={styles.optionDes}>{'Results in 5 hours'}</Text>
              </View>
              <Text style={styles.amount}>{'2500,-'}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setSelectionOption('3')}
              style={styles.optionContainer}>
              <View style={styles.checkContainer}>
                {selectionOption === '3' && (
                  <View style={styles.checkChildContainer} />
                )}
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionTitle}>{'Standard PCR'}</Text>
                <Text style={styles.optionDes}>
                  {'Results in 1-3 working days'}
                </Text>
              </View>
              <Text style={styles.amount}>{'995,-'}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
           activeOpacity={0.8}
           onPress={()=>navigation.navigate('Certificate')}
          style={styles.nextButton}>
            <Text style={styles.buttonText}>{'Next'}</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
}

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
        fontFamily:Fonts.medium,
        color:Colors.white,
        fontSize:24,
        alignSelf:'center',
        marginTop:16
    },
    des:{
        fontSize:16,
        color:Colors.white,
        fontFamily:Fonts.regular,
        alignSelf:'center',
        marginTop:8
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