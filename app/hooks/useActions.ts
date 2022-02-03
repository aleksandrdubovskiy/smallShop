import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {cartActions} from "../store/cart/cart.slice";
import {cartShowActions} from "../store/cartShow/cartShow.slice";

const allActions = {
    ...cartActions,
    ...cartShowActions
}


export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(allActions, dispatch)
}