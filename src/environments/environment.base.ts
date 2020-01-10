const production = false;

const FirebaseConfig = {
  apiKey: 'AIzaSyBwmWk7HZ0nqSuf1AgKm4-EDiR-aAaeonQ',
  authDomain: 'fir-dev-chapter.firebaseapp.com',
  databaseURL: 'https://fir-dev-chapter.firebaseio.com',
  projectId: 'fir-dev-chapter',
  storageBucket: 'fir-dev-chapter.appspot.com',
  messagingSenderId: '546625539681',
  appId: '1:546625539681:web:2af3ba786a7b354b7f6420',
  measurementId: 'G-S740GFS6LJ'
};

const GoogleSignInButton = {
  normal: '/assets/images/google-login/btn_google_signin_dark_normal_web@2x.png',
  pressed: '/assets/images/google-login/btn_google_signin_dark_pressed_web@2x.png'
};

const UserPlaceholderImage = '/assets/images/profile_placeholder.png';

export const baseEnvironment = {
  production,
  FirebaseConfig,
  GoogleSignInButton,
  UserPlaceholderImage
};
