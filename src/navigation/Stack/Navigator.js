import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native'
import AppoinmentForm from '../../screens/Home/AppoinmentForm';
import AppoinmentFormTravel from '../../screens/Home/AppoinmentFormTravel';
import Certificate from '../../screens/Home/Certificate';
import ChooseTime from '../../screens/Home/ChooseTime';
import Clincs from '../../screens/Home/Clincs';
import ConfirmAppoinment from '../../screens/Home/ConfirmAppoinment';
import CovidForm from '../../screens/Home/CovidForm';
import CovidFormTravel from '../../screens/Home/CovidFormTravel';
import CovidTest from '../../screens/Home/CovidTest';
import Dashboard from '../../screens/Home/Dashboard';
import Doctor from '../../screens/Home/Doctor';
import Order from '../../screens/Home/Order';
import Payment from '../../screens/Home/Payment';
import Question1 from '../../screens/Home/Question1';
import Question2 from '../../screens/Home/Question2';
import Question3 from '../../screens/Home/Question3'
import RecieveCertificate from '../../screens/Home/RecieveCertificate';
import ThankYou from '../../screens/Home/ThankYou';
import Splash from '../../screens/Splash';


const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
<Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        headerMode={'none'}
        initialRouteName="Splash">   
       <Stack.Screen name="Splash" component={ Splash } />
        <Stack.Screen name='Dashboard' component={Dashboard} />
        <Stack.Screen name='Question1' component={Question1} />
        <Stack.Screen name='Question2' component={Question2} />
        <Stack.Screen name='Question3' component={ Question3 } />
        <Stack.Screen name='CovidTest' component={CovidTest} />
        <Stack.Screen name='RecieveCertificate' component={RecieveCertificate} />
        <Stack.Screen name='CovidFormTravel' component={CovidFormTravel} />
        <Stack.Screen name='Certificate' component={ Certificate } />
        <Stack.Screen name='Clincs' component={Clincs} />
        <Stack.Screen name='ChooseTime' component={ChooseTime} />
        <Stack.Screen name="AppoinmentForm" component={ AppoinmentForm } />
        <Stack.Screen name='AppoinmentFormTravel' component={ AppoinmentFormTravel } />
        <Stack.Screen name='ConfirmAppoinment' component={ConfirmAppoinment} />
        <Stack.Screen name='CovidForm' component={CovidForm} />
        <Stack.Screen name='Order' component={Order} />
        <Stack.Screen name='Payment' component={Payment} />
        <Stack.Screen name='ThankYou' component={ThankYou} />
        <Stack.Screen name='Doctor' component={Doctor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator

const styles = StyleSheet.create({})