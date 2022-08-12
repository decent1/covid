import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {commonStyles} from '../../utils/commonStyles';
import QuestionHeader from '../../components/QuestionHeader';
import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

const ChooseTime = ({navigation}) => {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'I dag',
      date: '16',
      month: 'Nov',
    },
    {
      id: 2,
      name: 'On',
      date: '17',
      month: 'Nov',
    },
    {
      id: 3,
      name: 'To',
      date: '18',
      month: 'Nov',
    },
    {
      id: 4,
      name: 'Fri',
      date: '19',
      month: 'Nov',
    },
    {
      id: 5,
      name: 'Lo',
      date: '20',
      month: 'Nov',
    },
  ]);

  const [isSelected, setIsSelected] = useState('')


  const [Morningtime, setMorningTime] = useState([
    {
      id: 1,
      time: '8:00',
      isAvailable: true,
    },
    {
      id: 2,
      time: '9:00',
      isAvailable: false,
    },
    {
      id: 3,
      time: '10:00',
      isAvailable: true,
    },
    {
      id: 4,
      time: '8:55',
      isAvailable: false,
    },
    {
      id: 5,
      time: '11:10',
      isAvailable: true,
    },
    {
      id: 6,
      time: '7:00',
      isAvailable: false,
    },
    {
      id: 7,
      time: '4:00',
      isAvailable: true,
    },
    {
      id: 8,
      time: '3:00',
      isAvailable: false,
    },
    {
      id: 9,
      time: '2:00',
      isAvailable: true,
    },
  ]);
  return (
    <View style={commonStyles.container}>
      <QuestionHeader />
      <ScrollView>
        <Text style={styles.title}>Choose Time</Text>
        <View style={styles.timingBox}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              marginLeft: 16,
              paddingRight: 16,
              marginTop: 12,
            }}
            horizontal
            data={data}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    setIsSelected(item.id);
                    navigation.navigate('AppoinmentForm');
                  }}
                  style={[
                    styles.box,
                    {
                      backgroundColor:
                        item.id === isSelected ? '#D0E9EA' : Colors.white,
                      borderWidth: item.id === isSelected ? 3 : 1,
                      borderColor: item.id === isSelected ? '#4FD4C6' : null,
                    },
                  ]}>
                  <Text style={styles.txt}>{item?.name}</Text>
                  <Text style={styles.date}>{item?.date}</Text>
                  <Text style={styles.txt}> {item?.month} </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        {/* Morning Time view*/}
        <View style={{marginVertical: 20}}>
          <Text style={styles.Morning}>Morgen</Text>

          <View style={styles.optionContainer}>
            {Morningtime.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    width: '30%',
                  }}>
                  <View activeOpacity={0.8} style={[styles.timeDetial ,{
                     backgroundColor: item.isAvailable === true ? Colors.gray : Colors.white
                  }]}>
                    <Text style={styles.time}>{item.time}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>

        {/* AfterNoon Time View */}
        <View style={{marginVertical: 20}}>
          <Text style={styles.Morning}>Ettermiddag</Text>

          <View style={styles.optionContainer}>
            {Morningtime.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    width: '30%',
                  }}>
                  <View style={styles.timeDetial}>
                    <Text style={styles.time}>{item.time}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChooseTime;

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.regular,
    color: Colors.white,
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 16,
  },
  timingBox: {
    marginHorizontal: 16,
    marginTop: 40,
  },
  box: {
    width: 70,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    padding: 12,
    marginRight: 8,
    ...commonStyles.shadow,
  },
  txt: {
    fontSize: 15,
    fontFamily: Fonts.light,
  },
  date: {
    fontFamily: Fonts.regular,
    fontSize: 17,
    color: Colors.appBackgroundColor,
  },
  optionContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Morning: {
    fontSize: 15,
    fontFamily: Fonts.regular,
    color: Colors.white,
    // marginTop: 10,
    marginLeft: 16,
  },
  timeDetial: {
    width: 100,
    height: 52,
    borderWidth: 1,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: Colors.white,
  },
  time: {
    textAlign: 'center',
    padding: 12,
    fontSize: 17,
    fontFamily: Fonts.regular,
    color: Colors.appBackgroundColor,
  },
});
