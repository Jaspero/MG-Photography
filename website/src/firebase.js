import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import { ENV_CONFIG } from "../env-config";

firebase.initializeApp(ENV_CONFIG.firebase);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
