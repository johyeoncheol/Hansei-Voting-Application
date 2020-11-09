import React, { memo, useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { emailValidator } from "../../../AppSetting/core/utils";
import Background from "../../../AppSetting/components/Background";
import BackButton from "../../../AppSetting/components/BackButton";
import Header from "../../../AppSetting/components/Header";
import TextInput from "../../../AppSetting/components/TextInput";
import { theme } from "../../../AppSetting/core/theme";
import Button from "../../../AppSetting/components/Button";
import { sendEmailWithPassword } from "../api/auth-api";
import Toast from "../../../AppSetting/components/Toast";

const ForgotPasswordScreen = ({ navigation }) => {
   const [email, setEmail] = useState({ value: "", error: "" });
   const [loading, setLoading] = useState(false);
   const [toast, setToast] = useState({ value: "", type: "" });

   const _onSendPressed = async () => {
      if (loading) return;

      const emailError = emailValidator(email.value);

      if (emailError) {
         setEmail({ ...email, error: emailError });
         return;
      }

      setLoading(true);

      const response = await sendEmailWithPassword(email.value);

      if (response.error) {
         setToast({ type: "error", value: response.error });
      } else {
         setToast({
            type: "success",
            value: "Email with password has been sent.",
         });
      }

      setLoading(false);
   };

   return (
      <Background>
         <BackButton goBack={() => navigation.navigate("LoginScreen")} />

         <View style={{ marginBottom: 60 }}></View>
         <Header>비밀번호 찾기</Header>

         <TextInput
            label="이메일을 입력하세요"
            returnKeyType="done"
            value={email.value}
            onChangeText={(text) => setEmail({ value: text, error: "" })}
            error={!!email.error}
            errorText={email.error}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
         />

         <Button
            loading={loading}
            mode="contained"
            onPress={_onSendPressed}
            style={styles.button}
         >
            이메일로 찾기
         </Button>

         <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.navigate("LoginScreen")}
         >
            <Text style={styles.label}>← Back to login</Text>
         </TouchableOpacity>

         <Toast
            type={toast.type}
            message={toast.value}
            onDismiss={() => setToast({ value: "", type: "" })}
         />
      </Background>
   );
};

const styles = StyleSheet.create({
   back: {
      width: "100%",
      marginTop: 12,
   },
   button: {
      marginTop: 12,
   },
   label: {
      marginTop: 10,
      color: theme.colors.secondary,
      width: "100%",
   },
});

export default memo(ForgotPasswordScreen);
