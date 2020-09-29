import React from 'react';

import Home from '../Home';
import Calendar from '../Calendar';
import Voting from '../Voting';
import Suggestion from '../Suggestion';
import Setting from '../Setting';


export const Home = ({navigation}) => <Home navigation={navigation} name='Home' />
export const Calendar = ({navigation}) => <Calendar navigation={navigation} name='Calendar' />
export const Voting = ({navigation}) => <Voting navigation={navigation} name='Voting' />
export const Suggestion = ({navigation}) => <Suggestion navigation={navigation} name='Suggestion' />
export const Setting = ({navigation}) => <Setting navigation={navigation} name='Setting' />