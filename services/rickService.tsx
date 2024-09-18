import axios from "axios";
import endPoints from "./index";

const getCharacters = async (numberPage: number) => {
  try {
    const response = await axios.get(endPoints.characters(numberPage));
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default getCharacters;
