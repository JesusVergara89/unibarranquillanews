import CryptoJS from "crypto-js"
import { SecretKey } from "./Secret_key"
export const dataDecryp = (value) => {
    const byte = CryptoJS.AES.decrypt(value, SecretKey)
    return JSON.parse(byte.toString(CryptoJS.enc.Utf8))
}