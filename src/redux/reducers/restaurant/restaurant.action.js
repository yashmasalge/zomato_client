import axios from "axios";

// redux types
import { GET_RESTAURANT, GET_SPECIFIC_RESTAURANT } from "./restaurant.type";

export const getRestaurant = () => async (dispatch) => {
  try {
    const restaurantList = await axios({
      method: "GET",
      url: "https://zomato-backend-eium.onrender.com/restaurant/?city=NCR",
    });

    return dispatch({ type: GET_RESTAURANT, payload: restaurantList.data });
  } catch (error) {
    return dispatch({ type: "Error", payload: error });
  }
};

// Specific restaurant
export const getSpecificRestaurant = (_id) => async (dispatch) => {
  try {
    const restaurnat = await axios({
      method: "GET",
      url: `https://zomato-backend-eium.onrender.com/restaurant/${_id}`,
    });

    return dispatch({
      type: GET_SPECIFIC_RESTAURANT,
      payload: restaurnat.data,
    });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
