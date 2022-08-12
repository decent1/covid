import { StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/commonStyles'
import { Fonts } from '../../utils/Fonts'
import { Colors } from '../../utils/Colors'
import QuestionHeader from '../../components/QuestionHeader'
import { ImagePath } from '../../utils/imagePath'

const ThankYou = ({navigation}) => {
  return (
    <View style={commonStyles.container}>
      <QuestionHeader />
      <View style={styles.message}>
        <Image source={ImagePath.doctor} style={styles.dr} />
        <Text style={styles.title}>Thank You</Text>

        <Text style={styles.message_txt}>
          You will recieve a SMS shortly with the appointment details.
        </Text>
        <TouchableOpacity 
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Doctor')}
          style={styles.nextButton}>
          <Text style={styles.buttonText}>{'Close'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ThankYou

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.regular,
    color: Colors.white,
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 16,
  },
  message: {
    marginHorizontal: 24,
    marginTop: '10%',
  },
  message_txt: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.white,
    fontFamily: Fonts.regular,
  },
  nextButton: {
    marginHorizontal: 16,
    height: 44,
    backgroundColor: '#D0E9EA',
    borderRadius: 33,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 26,
  },
  buttonText: {
    fontFamily: Fonts.medium,
    color: Colors.primary,
    fontSize: 16,
  },
  dr: {
    width: 88,
    height: 88,
    alignSelf:'center'
  },
});