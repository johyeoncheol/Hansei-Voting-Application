import React, { Component } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import Icon from 'react-native-vector-icons/Fontisto';
import Time from './time';

const { width, height } = Dimensions.get("window");

import Background from '../AppSetting/background/background3';

export default class Home extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='home' size={20} style={{ color: tintColor }} />
        )
    }
    render() {
        return (
            <Background>
                <View style={styles.container}>
                    <View style={styles.TopContainer}>
                        <Time />
                        <Text style={styles.fontStyle}>공지사항</Text>
                    </View>
                    <View style={styles.BottomContainer}>
                        <View style={styles.card}>
                            <ScrollView>
                                <TouchableOpacity><Text style={styles.MajorName}>[총학생회] 총학생회 투표일정 </Text></TouchableOpacity>
                                <TouchableOpacity><Text style={styles.MajorName}>[미디어영상광고학과] 학과 투표일정</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={styles.MajorName}>[총학생회] 도서관 안건 결과</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={styles.MajorName}>[경창행정학과] 2020년 장부 결과</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={styles.MajorName}>[전자소프트웨어학과] 학과 이름 변경 관련</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={styles.MajorName}>[간호학과] 학과 투표 일정</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={styles.MajorName}>[대의원회] 투표 결과</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={styles.MajorName}>[사회복지학과] 사회 봉사 모집 공고</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={styles.MajorName}>[음악학과] 음악회 일정</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={styles.MajorName}>[공연예술학과] 공연 일정</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={styles.MajorName}>[시각정보디자인학과] 학과 투표 일정</Text></TouchableOpacity>
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </Background>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    fontStyle: {
        fontSize: 24,
        color: "#1957A4",
        marginTop:15,
        marginLeft:width-220,
    },
    TopContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    BottomContainer: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        backgroundColor: "white",
        justifyContent:'center',
        alignItems:"center",
        flex: 1,
        marginTop: 20,
        marginBottom: 10,
        width: width - 80,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        ...Platform.select({
            ios: {
                shadowOpacity: 0.5,
                shadowColor: "rgb(50,50,50)",
                shadowRadius: 5,
                shadowOffset: {
                    height: -1,
                    width: 0
                }
            },
            android: {
                elevation: 3
            }
        })
    },
    MajorName: {
        textAlign: 'center',
        fontSize: 16,
        color: "#1957A4",
        marginTop: 20,
        marginLeft:10,
        marginRight:10,
    },
})


// import * as React from 'react';
// import {useEffect, useState} from 'react';
// import {
//   View,
//   Modal,
//   ImageBackground,
//   StyleSheet,
//   TouchableOpacity,
//   Text,
// } from 'react-native';

// import Notes from './SecondHome/Notes';
// import NoteForm from './SecondHome/NoteForm';

// let currentNoteIndex = 4;
// let nbrNotes = currentNoteIndex - 1;

// export default function App() {
//   const [notes, setNotes] = useState([
//     {
//       title: 'Soir챕e',
//       content: 'yo bien ou kwa frr le boss ,lacoste tn ajd ?',
//       id: 1,
//       pinValue: 'fetes',
//     },
//     {title: 'Coiffeur', content: 'rdv 16h 05/06', id: 2, pinValue: 'rdv'},
//     {
//       title: 'D챕part Kenou',
//       content: 'repas chez kyly samedi soir',
//       id: 3,
//       pinValue: 'famille',
//     },
//   ]);
//   const [modalIsVisible, setModalToVisible] = useState(false);
//   const [toEditNoteId, setToEditNOteId] = useState(0);

//   const style = StyleSheet.create({
//     Cork: {
//       flex: 1,
//       resizeMode: 'cover',
//       width: '100%',
//     },
//   });

//   const handleSubmit = (note) => {
//     /* console.log('submitted', note);*/

//     if (note.id) {
//       editNote(note);
//     } else {
//       addNote(note);
//     }
//   };

//   const addNote = (note) => {
//     setNotes([...notes, {...note, id: currentNoteIndex}]);

//     currentNoteIndex++;
//     nbrNotes++;

//     console.log(currentNoteIndex);
//   };

//   const editNote = (editedNote) => {
//     const updatedNotes = notes.map((note) => {
//       if (editedNote.id === note.id) {
//         return editedNote;
//       }

//       return note;
//     });

//     setNotes(updatedNotes);
//   };

//   const deleteNote = (id) => {
//     let filteredNote = notes.filter((note) => id != note.id);

//     setNotes(filteredNote); /* notes.filter(note => id === note.id ) ) */

//     nbrNotes--;
//   };

//   const openModal = (noteId = 0) => {
//     setToEditNOteId(noteId);
//     setModalToVisible(true);
//   };

//   return (
//     <ImageBackground
//       source={require('../../assets/corkboard.jpg')}
//       alt="cork board"
//       style={style.Cork}>
//       <View>
//         <Notes
//           notes={notes}
//           onDeleteButtonPress={deleteNote}
//           openModal={openModal}
//         />

//         <Modal animationType={'fade'} visible={modalIsVisible}>
//           <NoteForm
//             onSubmit={handleSubmit}
//             closeModal={() => setModalToVisible(false)}
//             initialNote={
//               toEditNoteId
//                 ? notes.find((note) => note.id === toEditNoteId)
//                 : false
//             }
//           />
//         </Modal>

//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             marginTop: 10,
//             marginHorizontal: 5
//           }}>
//           <TouchableOpacity
//             onPress={() => openModal()}
//             style={{
//               borderRadius: 20,
//               backgroundColor: 'lightgreen',
//               width: '40%',
//               paddingVertical: 10,
//             }}>
//             <Text
//               style={{
//                 textAlign: 'center',
//               }}>
//               Add Note
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => useEffect}
//             style={{
//               borderRadius: 20,
//               backgroundColor: 'pink',
//               width: '40%',
//               paddingVertical: 10,
//             }}>
//             <Text
//               style={{
//                 textAlign: 'center',
//               }}>
//               You stored {nbrNotes} notes
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ImageBackground>
//   );
// }

/////첫占쏙옙째 占시듸옙
// import React from "react";

// import HomeScreen from "./FirstHome/screens/HomeScreen";
// import DetailScreen from "./FirstHome/screens/DetailScreen";

//  import { createStackNavigator } from 'react-navigation-stack';
//  import { createAppContainer } from 'react-navigation';

// import SettingScreen from "./FirstHome/screens/SettingScreen";
// import BoardCreateScreen from "./FirstHome/screens/BoardCreateScreen";

// import BoardEditScreen from "./FirstHome/screens/BoardEditScreen";

// import { Provider } from "react-redux";
// import store from "./FirstHome/stores";

// const StackNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen
//   },
//   Detail: {
//     screen: DetailScreen
//   },
//   Create: {
//     screen: BoardCreateScreen
//   },
//   Edit: {
//     screen: BoardEditScreen
//   },
//   SettingScreen:{
//       screen: SettingScreen
//   }
// },
// {
//     initialRouteName: 'Create'
// }
// );

// const AppContainer = createAppContainer(StackNavigator);

// export default function App() {
//   return (
//     <Provider store={store}>
//       <AppContainer />
//     </Provider>
//   );
// }

