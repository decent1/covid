import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../utils/Colors';
import {commonStyles} from '../../utils/commonStyles';
import {ImagePath} from '../../utils/imagePath';
import {Fonts} from '../../utils/Fonts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ChooseTest = ({modalVisible}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.Modalbody}>
          <Image source={ImagePath.covidTest} style={styles.covidTest} />
          <Text style={styles.title}>Which test should I choose?</Text>

          <View style={styles.Test_list}>
            <View style={styles.optionContainer}>
              <View style={styles.checkContainer}></View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionTitle}>{'Antigen/Rapid test'}</Text>
              </View>
              <Text style={styles.amount}>{'995,-'}</Text>
            </View>
            <View style={styles.resultContainer}>
              <MaterialCommunityIcons
                size={20}
                name="clock-time-four-outline"
              />
              <Text style={styles.result}>Results in 1 hour</Text>
            </View>
            <View style={styles.testDetail}>
              <View style={styles.content}>
                <Text style={styles.bullet}>{'\u2022'}</Text>
                <Text style={styles.info}>{'Reliable and quick test'}</Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.bullet}>{'\u2022'}</Text>
                <Text style={styles.info}>
                  {
                    'Suitable for Fit-to-Travel GP-signed certificates. Please check the requirements of your destination country.,-'
                  }
                </Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.bullet}>{'\u2022'}</Text>
                <Text style={styles.info}>
                  {'Results available at pasientsky.no or helsenorge.no '}
                </Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.bullet}>{'\u2022'}</Text>
                <Text style={styles.info}>{'Test manufactured by ABBOTT'}</Text>
              </View>
            </View>
          </View>
          <View style={styles.Test_list}>
            <View style={styles.optionContainer}>
              <View style={styles.checkContainer}></View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionTitle}>{'Antigen/Rapid test'}</Text>
              </View>
              <Text style={styles.amount}>{'995,-'}</Text>
            </View>
            <View style={styles.resultContainer}>
              <MaterialCommunityIcons
                size={20}
                name="clock-time-four-outline"
              />
              <Text style={styles.result}>Results in 1 hour</Text>
            </View>
            <View style={styles.testDetail}>
              <View style={styles.content}>
                <Text style={styles.bullet}>{'\u2022'}</Text>
                <Text style={styles.info}>{'Reliable and quick test'}</Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.bullet}>{'\u2022'}</Text>
                <Text style={styles.info}>
                  {
                    'Suitable for Fit-to-Travel GP-signed certificates. Please check the requirements of your destination country.,-'
                  }
                </Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.bullet}>{'\u2022'}</Text>
                <Text style={styles.info}>
                  {'Results available at pasientsky.no or helsenorge.no '}
                </Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.bullet}>{'\u2022'}</Text>
                <Text style={styles.info}>{'Test manufactured by ABBOTT'}</Text>
              </View>
            </View>
            <View style={styles.note}>
              <Text style={styles.note_txt}>
                If testing at Oslo Gardermoen Airport please arrive early enough
                to allow for test results.
              </Text>
            </View>
            <Text style={styles.note_txt2}>
              <Text style={{fontFamily: Fonts.bold, color: Colors.black}}>
                Note:
              </Text>{' '}
              This test is not accredited in accordance with NS-EN ISO 15189.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.strip}>
        <AntDesign
          onPress={() => modalVisible()}
          name="closecircleo"
          size={20}
          color={Colors.primary}
          style={styles.cross}
        />
      </View>
    </View>
  );
};

export default ChooseTest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  Modalbody: {
    marginHorizontal: 24,
    marginVertical: '10%',
  },
  covidTest: {
    height: 88,
    width: 88,
    alignSelf: 'center',
  },
  title: {
    fontFamily: Fonts.regular,
    color: Colors.primary,
    fontSize: 24,
    textAlign: 'center',
    marginTop: 16,
  },
  Test_list: {
    marginTop: '10%',
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 12,
    padding: 12,
  },
  optionContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
  },
  optionTitle: {
    fontFamily: Fonts.medium,
    color: Colors.primary,
    fontSize: 16,
  },
  optionTextContainer: {
    flex: 1,
  },
  amount: {
    fontFamily: Fonts.medium,
    color: Colors.primary,
    fontSize: 16,
  },
  resultContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  result: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    paddingLeft: 5,
  },
  testDetail: {
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
  },
  txt: {
    textAlign: 'center',
    justifyContent: 'space-between',
  },
  bullet: {
    fontSize: 16,
    fontFamily: Fonts.bold,
  },
  info: {
    fontFamily: Fonts.regular,
    fontSize: 14,
  },
  note: {
    padding: 16,
    borderRadius: 6,
    backgroundColor: '#F1BB72',
    ...commonStyles.shadow,
  },
  note_txt: {
    fontSize: 14,
    fontFamily: Fonts.regular,
  },
  note_txt2: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    textAlign: 'center',
    marginTop: 10,
  },
  cross: {
    alignSelf: 'center',
  },
  strip: {
    backgroundColor: '#F5F5F5',
    padding:12
  },
});
