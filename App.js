import React from 'react';
import {
    View,
} from 'react-native'
import StatusBar from './src/components/StatusBar'
import { Colors } from './src/utils/Colors';
import { commonStyles } from './src/utils/commonStyles';
import Splash from './src/screens/Splash';
import Dashboard from './src/screens/Home/Dashboard';
import Question1 from './src/screens/Home/Question1';
import Question2 from './src/screens/Home/Question2';
import Question3 from './src/screens/Home/Question3';
import CovidTest from './src/screens/Home/CovidTest';
import Certificate from './src/screens/Home/Certificate';
import RecieveCertificate from './src/screens/Home/RecieveCertificate';
import Clincs from './src/screens/Home/Clincs';
import ChooseTime from './src/screens/Home/ChooseTime';
import AppoinmentForm from './src/screens/Home/AppoinmentForm';
import AppoinmentFormTravel from './src/screens/Home/AppoinmentFormTravel';
import CovidForm from './src/screens/Home/CovidForm';
import CovidFormTravel from './src/screens/Home/CovidFormTravel';
import ConfirmAppoinment from './src/screens/Home/ConfirmAppoinment';
import Order from './src/screens/Home/Order';
import Payment from './src/screens/Home/Payment';
import ThankYou from './src/screens/Home/ThankYou';
import ChooseTest from './src/components/Modal/ChooseTest';
import TravelCertificate from './src/components/Modal/TravelCertificate';
import Doctor from './src/screens/Home/Doctor';
import Navigator from './src/navigation/Stack/Navigator';




export default function App({}){
    return (
      <View
        style={{
          flex: 1,
        }}>
        <StatusBar
          backgroundColor={Colors.statusBarBackgroundColor}
          barStyle={commonStyles.statusBarStyleLight}
        />
        <Navigator />
      </View>
    );
}