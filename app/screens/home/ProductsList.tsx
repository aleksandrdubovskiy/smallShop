import { FC } from 'react'
import ProductItem from "./ProductItem";
import {useFetchAllProductsQuery} from "../../store/product/product.api";
import CartShowButton from "./CartShowButton";
import CartContent from "./CartContent";

const ProductsList: FC = () => {
    const { data, error, isLoading} = useFetchAllProductsQuery(6);

    return (
        <div className="max-w-screen-sm mx-auto">
            <div className='flex justify-between items-center mb-10'>
                <h1 className='text-xl text-green-600 font-medium'>
                    Products list: {isLoading && <>loading....</>}
                </h1>
                <CartShowButton />
            </div>
            {error && <div className="text-red">{error}</div>}

            {data && (<div className='flex flex-wrap justify-between'>
                {data?.map((product: any) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>)}

            <CartContent />
        </div>
    )
}

export default ProductsList
