export default {
  expo: {
    name: "InstagramClone",
    slug: "instagram-clone",
    version: "1.0.0",
    android: {
      package: "com.samabayizera.instagramclone",
      versionCode: 1,
    },
    ios: {
      bundleIdentifier: "com.samabayizera.instagramclone", 
      buildNumber: "1.0.0",
    },
    extra: {
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID,
      firebaseMeasurementId: process.env.FIREBASE_MEASUREMENT_ID,
      eas: {
        projectId: "46c0208b-e902-4daa-8401-a4532a296c1f",
      },
    },
  },
};
