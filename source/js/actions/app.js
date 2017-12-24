import axios from "axios";
import { GET_SHOTS, GET_SHOT } from "./types";

const API_URL = "https://api.dribbble.com/v1";
const Token =
  "ee5ee36a0a7755422f5484fde4283c54645e0aead7fb93343a03ef65dc2d6dcd";

export function getShots() {
  return function(dispatch) {
    axios
      .get(`${API_URL}/shots?access_token=${Token}`)
      .then(response => {
        console.log("Resposta do axios",response)
        dispatch({
          type: GET_SHOTS,
          payload: response
        });
      })
      .catch(() => {});
  };
}

export function getShot(id) {
  return function(dispatch) {
    axios
      .get(`${API_URL}/shots/${id}?access_token=${Token}`)
      .then(response => {
        console.log("Resposta do axios",response)        
        dispatch({
          type: GET_SHOT,
          payload: response
        });
      })
      .catch(() => {});
  };
}
