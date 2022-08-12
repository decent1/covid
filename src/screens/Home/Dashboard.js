import React,{useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import { Colors } from '../../utils/Colors'
import {commonStyles} from '../../utils/commonStyles'
import { Fonts } from '../../utils/Fonts'
import { ImagePath } from '../../utils/imagePath'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ButtonSmall from '../../components/Button/ButtonSmall'

export default function Dashboard({navigation}) {
    const [dashboardOptions, setDashboardOptions] = useState([
        {
            id:"1",
            name:"General Physician",
            image:ImagePath.option1,
            go:'Question1'
        },
        {
            id:"2",
            name:"Physiotherapist",
            image:ImagePath.option2,
            go:'Question1'
        },
        {
            id:"3",
            name:"Psychology",
            image:ImagePath.option3,
            go:'Question1'
        },
        {
            id:"4",
            name:"Dermatology",
            image:ImagePath.option4,
            go:'Question1'

        },
        {
            id:"5",
            name:"Pediatrician",
            image:ImagePath.option5,
            go:'Question1'

        },
        {
            id:"6",
            name:"Gynekolog",
            image:ImagePath.option6,
            go:'Question1'

        },
        {
            id:"7",
            name:"Covid",
            image:ImagePath.option7,
            go:'Question1'

        },
    ])
    const [currentLenght, setCurrentLenght] = useState(4)
    return (
        <View style={commonStyles.container}>
            <ScrollView>
                <Text style={styles.title}>{'What can we help with?'}</Text>
                <View style={{backgroundColor:'white'}}>
                    <View style={styles.optionContainer}>
                        <View style={{flexDirection:'row', flexWrap:'wrap', marginHorizontal:16, marginTop:8}}>
                            {
                                dashboardOptions.slice(0,currentLenght).map((item, index) => {
                                    return (
                                      <View key={index} style={{width: '50%'}}>
                                        <TouchableOpacity 
                                        onPress={()=>navigation.navigate(item.go)}
                                        style={styles.item}>
                                          <Image
                                            style={styles.itemImage}
                                            source={item.image}
                                          />
                                          <Text style={styles.itemName}>
                                            {item.name}
                                          </Text>
                                        </TouchableOpacity>
                                      </View>
                                    );
                                })
                            }
                        </View>
                        {
                            currentLenght < dashboardOptions.length ? <TouchableOpacity onPress={() => { setCurrentLenght(currentLenght != dashboardOptions.length ? dashboardOptions.length : 4) }}
                                style={styles.viewAllButton}>
                                    <Text style={styles.viewAllButtonText}>{'See all services'}</Text>
                                    <Ionicons 
                                        name="arrow-forward"
                                        size={16}
                                        color={'#D7EDE9'}
                                    />
                                </TouchableOpacity>
                                : <ButtonSmall 
                                    onPress={() => {
                                        setCurrentLenght(4)
                                    }}
                                    style={styles.closeButton}
                                    textStyle={styles.bannerButtonText}
                                    title={'Close'}
                                />   
                        }
                    </View>
                </View>

               <View style={styles.otherOptionContainer}>
                    <View style={[styles.optionRow,{marginTop:12}]}>
                        <Text style={styles.optionText}>{'Insurance & Membership'}</Text>
                        <Ionicons name="chevron-forward" size={16} color={Colors.primary} />
                    </View>
                    <View style={styles.optionRow}>
                        <Text style={styles.optionText}>{'What can I get help with over video?'}</Text>
                        <Ionicons name="chevron-forward" size={16} color={Colors.primary} />
                    </View>
                    <View style={[styles.optionRow,{borderBottomWidth:0}]}>
                        <Text style={styles.optionText}>{'How it works'}</Text>
                        <Ionicons name="chevron-forward" size={16} color={Colors.primary} />
                    </View>

                    <View style={styles.banner}>
                        <Text style={styles.bannerTitle}>{'Can’t find what you’re looking for? '}</Text>
                        <ButtonSmall 
                            style={styles.bannerButton}
                            textStyle={styles.bannerButtonText}
                            title={'Get Help'}
                        />
                    </View>
               </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    optionContainer:{
        paddingBottom:32,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        backgroundColor:Colors.primary
    },
    title:{
        fontFamily:Fonts.medium,
        fontSize:24,
        marginTop:16,
        marginHorizontal:20,
        color:Colors.white 
    },
    itemRow:{
        flexDirection:'row',
        marginHorizontal:16,
        height:150,
    },
    item:{
        flex:1,
        paddingVertical:16,
        backgroundColor:Colors.white,
        margin:4,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center'
    },
    itemImage:{
        height:52,
        width: 52,
    },
    itemName:{
        fontFamily:Fonts.regular,
        color:Colors.primary,
        marginTop:4,
    },
    viewAllButton:{
        height:44,
        width:"85%",
        borderRadius:30,
        borderWidth:1,
        borderColor:'rgba(255, 255, 255, 0.3)',
        alignSelf:'center',
        marginTop:32,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:16,
        alignItems:'center',
    },
    viewAllButtonText:{
        fontFamily:Fonts.regular,
        color:'#D7EDE9',
        fontSize:16
    },
    otherOptionContainer:{
        backgroundColor:'white',
    },
    optionRow:{
        flexDirection:'row',
        marginHorizontal:16,   
        borderBottomWidth:1,
        borderColor:'rgba(0, 0, 0, 0.1)',
        height:44,
        alignItems:'center',
        justifyContent:'space-between',
    },
    optionText:{
        fontFamily:Fonts.regular,
        color:Colors.primary
    },
    banner:{
        marginHorizontal:16,
        height:152,
        borderRadius:6,
        backgroundColor:'#D7EDE9',
        marginTop:32,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:32,
    },
    bannerTitle:{
        fontFamily:Fonts.semiBold,
        color:Colors.primary,
        fontSize:16
    },
    bannerButton:{
        backgroundColor:Colors.primary,
        marginTop:'4%'
    },
    closeButton:{
        borderWidth:1,
        backgroundColor:Colors.primary,
        marginTop:'4%',
        borderColor:'#4FD4C6'
    },
    bannerButtonText:{
        fontFamily:Fonts.medium,
    }
})