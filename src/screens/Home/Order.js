import { StyleSheet, Text, View , Image , TouchableOpacity,ScrollView} from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/commonStyles'
import QuestionHeader from '../../components/QuestionHeader'
import { Colors } from '../../utils/Colors'
import { ImagePath } from '../../utils/imagePath'
import { Fonts } from '../../utils/Fonts'

const Order = ({navigation}) => {
  return (
    <View style={commonStyles.container}>
      <QuestionHeader />
      <ScrollView>
        <View style={{marginHorizontal: 24}}>
          <View style={styles.AlertBox}>
            <Image source={ImagePath.phone} style={styles.img} />
            <Text style={styles.sms}>
              Please login with BankID or SMS to continue with your order
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Payment')}
            style={styles.nextButton}>
            <Text style={styles.buttonText}>{'Login'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export default Order

const styles = StyleSheet.create({
  AlertBox: {
    width: 300,
    height: 224,
    backgroundColor: Colors.white,
    alignSelf: 'center',
    marginTop: '20%',
    borderRadius: 6,
  },
  img: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: '10%',
  },
  sms: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.primary,
    fontFamily: Fonts.regular,
    padding:10
  },
  nextButton: {
    marginHorizontal: 16,
    height: 44,
    backgroundColor: '#D0E9EA',
    borderRadius: 33,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 124,
    marginBottom: 26,
  },
  buttonText: {
    fontFamily: Fonts.medium,
    color: Colors.primary,
    fontSize: 16,
  },
});