import axios, { AxiosRequestConfig } from "axios";

const { CLIENT_ID } = process.env

const api = axios.create({
  baseURL: 'https://api.twitch.tv/helix'
})


export { api };
