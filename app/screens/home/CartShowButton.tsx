import {BsCart, BsCartX} from "react-icons/bs";
import {FC} from "react";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const CartShowButton: FC = () => {
    const {toggleCart} = useActions();
    const isOpened = useTypedSelector(state => state.cartShow.isOpened);

    return (
        <>
            <button className="bg-red-800 rounded-full text-white p-3 block" onClick={() => toggleCart()}>
                {isOpened ? <BsCartX />: <BsCart />}
            </button>
        </>
    )
}

export default CartShowButton;