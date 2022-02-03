import {BsCart, BsCartX} from "react-icons/bs";
import {FC} from "react";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const CartContent: FC = () => {
    const {toggleCart} = useActions();
    const isOpened = useTypedSelector(state => state.cartShow.isOpened);
    const cartContent = useTypedSelector(state => state.cart);
    const position = isOpened ? {bottom: "0"} : {top: "calc(100% - 30px)"}

    return (
        <div style={{position: "fixed", ...position, backgroundColor: "lightgreen", left: 0}} onClick={() => toggleCart()}>
            <div style={{height: 30, lineHeight: 30, overflow: "hidden"}}>Cart Header</div>
            {cartContent.map(item => (
                <div>
                    {item.title} - {item.price}
                </div>
            ))}
        </div>
    )
}

export default CartContent;