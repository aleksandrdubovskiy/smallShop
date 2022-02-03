import {FC} from "react";
import {IProductItem} from "../../models";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";

interface IProductListItem{
    product: IProductItem
}

const ProductItem: FC<IProductListItem> = ({product}) => {
    const { addItem, removeItem} = useActions();
    const handlerAddToCart = () => {
        addItem(product);
    }
    const handlerRemoveFromCart = () => {
        removeItem({id: product.id});
    }

    const cart = useTypedSelector(state => state.cart);
    const isInCart = cart.some(p => p.id === product.id);

    return (
        <div className="p-2 mb-4 rounded-lg" style={{width: "46%", backgroundColor: '#f1ede3'}}>
            <div className="relative mb-4" style={{paddingBottom: "100%", width: "100%"}}>
                <div className="absolute p-1" style={{width: "100%", height: "100%", textAlign: "center", backgroundColor: "white", border: "1px solid #CCCCCC"}}>
                    <img src={product.image} style={{maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto", display: "inline"}}/>
                </div>
            </div>
            <div className="text-base text-center">{product.title}</div>
            <div className="text-lg text-right mt-2 mb-4">Price: {product.price}</div>
            <div>
                {isInCart
                    ? <button onClick={handlerRemoveFromCart}
                              className="mx-auto block bg-slate-100 px-5 py-1 shadow rounded-full">Remove From
                        Cart</button>
                    : <button onClick={handlerAddToCart}
                              className="mx-auto block bg-slate-100 px-5 py-1 shadow rounded-full">Add To Cart</button>
                }
            </div>
        </div>
    )
}

export default ProductItem