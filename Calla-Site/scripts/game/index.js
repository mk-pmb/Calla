import { JITSI_HOST, JVB_HOST, JVB_MUC } from "../constants.js";
import { init } from "./init.js";

Object.assign(window, init(JITSI_HOST, JVB_HOST, JVB_MUC));