import { uiActions } from "./ui-slice";
import { cartAction } from "./cart-slice";
export const fetchCartData = () => {
  return async (dispatch) => {
    const fecthData = async () => {
      const response = await fetch(
        "https://react-http-b91fc-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) throw new Error("Could not feth cart data!");
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fecthData();
      console.log(cartData);
      dispatch(
        cartAction.loadingPage({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (e) {
      dispatch(
        uiActions.showNatification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data! filad",
        })
      );
    }
  };
};
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNatification({
        status: "sending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-b91fc-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) throw Error("Sending cart data failed.");
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNatification({
          status: "success",
          title: "Success!",
          message: "Sending cart data successfully!",
        })
      );
    } catch (e) {
      dispatch(
        uiActions.showNatification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
