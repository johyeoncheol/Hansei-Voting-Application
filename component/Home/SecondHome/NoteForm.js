import React, {useMemo, useState} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import TextInput from './Form/TextInput';
import LinearGradient from 'react-native-linear-gradient';
import {Picker} from '@react-native-community/picker';

const NoteForm = (props) => {
  const [title, setTitle] = useState(
    props.initialNote ? props.initialNote.title : '',
  );
  const [content, setContent] = useState(
    props.initialNote ? props.initialNote.content : '',
  );

  const [selectedPinValue, setSelectedPinValue] = useState(props.initialNote ? props.initialNote.pinValue : '');

  const bluePin = require('../../../assets/pinbleueputain.png');
  const greenPin = require('../../../assets/pinverteputain.png');
  const redPin = require('../../../assets/pinputain.png');

  const onFormSubmit = () => {
    props.onSubmit({
      title,
      content,
      id: props.initialNote ? props.initialNote.id : undefined,
      pinValue: selectedPinValue,
    });

    if (!props.initialNote) {
      setTitle('');
      setContent('');
      setSelectedPinValue('');
    } else {
      setTitle(props.initialNote.title);
      setContent(props.initialNote.content);
      setSelectedPinValue(props.initialNote.pinValue);
    };
  };

  const style = StyleSheet.create({
    Cork: {
      flex: 1,
      resizeMode: 'cover',
      width: '100%',
    },
  });

  return (
    <ImageBackground
      source={require('../../../assets/corkboard.jpg')}
      alt="cork board"
      style={style.Cork}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <LinearGradient
          colors={['#fdfcc3', '#f9f68d']}
          style={{
            marginTop: 90,
            height: 300,
            width: 250,
          }}>
          <TextInput
            onChangeText={setTitle}
            value={title}
            label={'Intitulé de la note'}
          />
          <TextInput
            onChangeText={setContent}
            value={content}
            label={'Contenu de la note'}
          />
          <View style={{
              alignItems: 'center',
              marginTop: 25
          }}>
            <Picker
              selectedValue={selectedPinValue}
              onValueChange={( itemValue, itemIndex) =>{
                  setSelectedPinValue(itemValue)
              }}
              style={{
                backgroundColor: '#eb345b',
                width: 150,
              }}>
              <Picker.Item label={'Rendez-vous  ⬇️️️'} value={"rdv"} />
              <Picker.Item label={'Fêtes  ⬇️'} value={"fetes"} />
              <Picker.Item label={'Famille  ⬇️'} value={"famille"} />
            </Picker>
          </View>
        </LinearGradient>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <TouchableOpacity
            onPressIn={onFormSubmit}
            onPressOut={props.closeModal}
            style={{
              borderRadius: 20,
              backgroundColor: 'lightgreen',
              width: '35%',
              paddingVertical: 10,
              marginLeft: 10,
            }}>
            <Text style={{textAlign: 'center'}}> Épingler </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={props.closeModal}
            style={{
              borderRadius: 20,
              backgroundColor: 'lightgray',
              width: '35%',
              paddingVertical: 10,
              marginRight: 10,
            }}>
            <Text style={{textAlign: 'center'}}> Retour </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default NoteForm;