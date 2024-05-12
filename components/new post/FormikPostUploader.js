import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { View, TextInput, Button, Text, Image } from "react-native";
import { Divider } from "react-native-elements";

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL is required"),
  caption: Yup.string().max(2200, "Caption has reached the character limit"),
});

function FormikPostUploader() {
  const [thumbNail, setThumbNail] = useState("");

  const img = `https://picsum.photos/200/200`;
  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
      }) => (
        <>
          <View
            style={{
              margin: 20,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Image
              source={{ uri: thumbNail ? thumbNail : img }}
              style={{ width: 100, height: 100 }}
            />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <TextInput
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
                placeholder="Write a caption ..."
                placeholderTextColor="gray"
                multiline={true}
                style={{
                  color: "white",
                  fontSize: 20,
                }}
              />
            </View>
          </View>
          <Divider orientation="vertical" width={0.2} />
          <TextInput
            onChange={(e) => setThumbNail(e.nativeEvent.text)}
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
            placeholder="Enter image URL"
            placeholderTextColor="gray"
            style={{
              borderBottomWidth: 1,
              marginBottom: 10,
              color: "white",
              fontSize: 18,
            }}
          />
          {touched.imageUrl && errors.imageUrl && (
            <Text style={{ color: "red" }}>{errors.imageUrl}</Text>
          )}

          {touched.caption && errors.caption && (
            <Text style={{ color: "red" }}>{errors.caption}</Text>
          )}
          <Button onPress={handleSubmit} title="Share" disabled={!isValid} />
        </>
      )}
    </Formik>
  );
}

export default FormikPostUploader;
