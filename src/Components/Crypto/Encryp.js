import CryptoJS from "crypto-js"
import { SecretKey } from "./Secret_key"
export const dataEncryp = (value) => {
    return CryptoJS.AES.encrypt(JSON.stringify(value), SecretKey).toString()
}