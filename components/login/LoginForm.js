import React from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";

const LoginForm = ({navigation}) => {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("An email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholder="Phone number, username or email"
                placeholderTextColor="#444"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholder="Password"
                placeholderTextColor="#444"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>
            <Pressable
              onPress={handleSubmit}
              disabled={!isValid}
              style={({ pressed }) => [
                styles.button(isValid),
                {
                  backgroundColor: pressed
                    ? "#0072D8"
                    : isValid
                    ? "#0096F6"
                    : "#9ACAF7",
                },
              ]}
            >
              <Text style={styles.buttonText}>Log in</Text>
            </Pressable>
            <View style={styles.signupContainer}>
              <Text>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ color: "#6BB0F5" }}> Sign Up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },
  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    borderWidth: 1,
  },
  button: (isValid) => ({
    backgroundColor: isValid ? "#0096F6" : "#9ACAF7",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    minHeight: 42,
  }),
  buttonText: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 20,
  },
  signupContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 50,
  },
});

export default LoginForm;
