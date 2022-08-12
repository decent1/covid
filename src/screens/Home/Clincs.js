import { StyleSheet, Text, View , ScrollView, TouchableOpacity} from 'react-native'
import React ,{useState} from 'react'
import { commonStyles } from '../../utils/commonStyles'
import QuestionHeader from '../../components/QuestionHeader'
import { Fonts } from '../../utils/Fonts'
import { Colors } from '../../utils/Colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const Clincs = ({navigation}) => {
    const [data, setData] = useState([
      {
        id: 1,
        title: 'Bogstadveien',
        time: '12 min',
        go:'ChooseTime'
      },
      {
        id: 1,
        title: 'Bislet',
        time: '12 min',
        go:'ChooseTime'

      },
      {
        id: 1,
        title: 'sandvika',
        time: '12 min',
        go:'ChooseTime'

      },
    ]);
  return (
    <View style={commonStyles.container}>
      <QuestionHeader />
      <ScrollView>
        <Text style={styles.title}>Clincs</Text>
        <View style={{marginHorizontal: 16}}>
            {data.map((value,index)=>{
                return (
                  <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={()=>navigation.navigate(value.go)}
                  key={index}
                    style={[
                      styles.optionContainer,
                      {
                        marginTop: 16,
                      },
                    ]}>
                    <View style={styles.optionTextContainer}>
                      <Text style={styles.optionDes}>{value.title}</Text>
                    </View>
                    <View style={styles.timeView}>
                      <MaterialCommunityIcons
                        size={20}
                        name="clock-time-four-outline"
                      />
                      <Text style={styles.time}>{value.time}</Text>
                    </View>
                  </TouchableOpacity>
                );
 
            })}
        
        </View>
      </ScrollView>
    </View>
  );
}

export default Clincs

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.regular,
    color: Colors.white,
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 16,
  },
  optionContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 8,
  },
  optionDes: {
    fontFamily: Fonts.regular,
    color: Colors.primary,
    fontSize: 17,
  },
  optionTextContainer: {
    flex: 1,
  },
  time: {
    fontFamily: Fonts.medium,
    color: Colors.primary,
    fontSize: 16,
  },
  timeView: {
    width: 89,
    height: 32,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#E5E5E5',
    borderRadius: 20,
    alignContent: 'center',
    alignItems: 'center',
    padding:5
  },
  time:{
      fontSize:15,
      fontFamily:Fonts.medium
  }
});