import React from 'react';
import {View} from 'react-native';

import Note from './Note';

const Notes = (props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 28
      }}>

      {props.notes.map((note) => (
        <View
          key={note.id}
          style={{
            width: '33%',
          }}>
          <Note
            content={note.content}
            title={note.title}
            id={note.id}
            pinValue={note.pinValue}
            toDelete={props.onDeleteButtonPress}
            toEdit={props.onSubmit}
            openForm={props.openModal}
          />
        </View>
      ))}

    </View>
  );
};
export default Notes;