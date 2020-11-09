import React, { memo, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Background from "../../../AppSetting/components/Background";
import Header from "../../../AppSetting/components/Header";
import Button from "../../../AppSetting/components/Button";
import TextInput from "../../../AppSetting/components/TextInput";
import BackButton from "../../../AppSetting/components/BackButton";
import { theme } from "../../../AppSetting/core/theme";
import {
   emailValidator,
   passwordValidator,
   nameValidator,
} from "../../../AppSetting/core/utils";
import { signInUser } from "../api/auth-api";
import Toast from "../../../AppSetting/components/Toast";

const RegisterScreen = ({ navigation }) => {
   const [name, setName] = useState({ value: "", error: "" });
   const [email, setEmail] = useState({ value: "", error: "" });
   const [password, setPassword] = useState({ value: "", error: "" });
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState("");

   const _onSignUpPressed = async () => {
      if (loading) return;

      const nameError = nameValidator(name.value);
      const emailError = emailValidator(email.value);
      const passwordError = passwordValidator(password.value);

      if (emailError || passwordError || nameError) {
         setName({ ...name, error: nameError });
         setEmail({ ...email, error: emailError });
         setPassword({ ...password, error: passwordError });
         return;
      }

      setLoading(true);

      const response = await signInUser({
         name: name.value,
         email: email.value,
         password: password.value,
      });

      if (response.error) {
         setError(response.error);
      }

      setLoading(false);
   };

   return (
      <Background>
         <BackButton goBack={() => navigation.navigate("LoginHome")} />

         <Header>회원가입</Header>

         <TextInput
            label="이름"
            returnKeyType="next"
            value={name.value}
            onChangeText={(text) => setName({ value: text, error: "" })}
            error={!!name.error}
            errorText={name.error}
         />

         <TextInput
            label="이메일"
            returnKeyType="next"
            value={email.value}
            onChangeText={(text) => setEmail({ value: text, error: "" })}
            error={!!email.error}
            errorText={email.error}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
         />

         <TextInput
            label="패스워드"
            returnKeyType="done"
            value={password.value}
            onChangeText={(text) => setPassword({ value: text, error: "" })}
            error={!!password.error}
            errorText={password.error}
            secureTextEntry
            autoCapitalize="none"
         />

         <Button
            loading={loading}
            mode="contained"
            onPress={_onSignUpPressed}
            style={styles.button}
         >
            회원가입
         </Button>
         <Toast message={error} onDismiss={() => setError("")} />
      </Background>
   );
};

const styles = StyleSheet.create({
   label: {
      color: theme.colors.secondary,
      marginRight: 5,
   },
   button: {
      marginTop: 24,
   },
   row: {
      flexDirection: "row",
      marginTop: 4,
   },
   link: {
      fontWeight: "bold",
      color: theme.colors.primary,
   },
});

export default memo(RegisterScreen);
