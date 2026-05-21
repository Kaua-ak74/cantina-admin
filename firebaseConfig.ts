// Importa as ferramentas oficias do Google
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth"; // Para o Login e Cadastro
import { getFirestore } from "firebase/firestore"; // Para guardar o Saldo e o Histórico
import AsyncStorage from "@react-native-async-storage/async-storage"; // Para manter o usuário logado

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
};

// Aqui o seu app usa a chave e "liga" o motor do Firebase
const app = initializeApp(firebaseConfig);

// Inicializamos o Auth garantindo que o login fique salvo no celular
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
export const db = getFirestore(app);
