import React from "react";
import PropTypes from "prop-types";
import { Text, TextInput as BaseTextInput } from "react-native";

TextInput.propTypes = {
   onChangeText: PropTypes.func.isRequired,
   value: PropTypes.string.isRequired,
   label: PropTypes.string.isRequired,
};

function TextInput(props) {
   return (
      <>
         <Text style={style.Label}> {props.label} </Text>
         <BaseTextInput
            onChangeText={props.onChangeText}
            value={props.value}
            style={style.Input}
         />
      </>
   );
}

const style = {
   Label: { textAlign: "center" },
   Input: { borderColor: "black", borderWidth: 1 },
};

export default TextInput;
