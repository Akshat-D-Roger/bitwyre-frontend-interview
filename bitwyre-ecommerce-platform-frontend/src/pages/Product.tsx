import { useParams } from "react-router-dom"
import { productsType } from "../assets/assets";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import productsAtom from "../store/atoms/products.ts";
import 'react-toastify/dist/ReactToastify.css';
import ProductMedia from "../components/ProductMedia.tsx";
import ProductInformation from "../components/ProductInformation.tsx";
import ProductFooter from "../components/ProductFooter.tsx";

const Product = () => {

  const params = useParams();
  const { productId } = params;
  const products:productsType[] = useRecoilValue(productsAtom)
  const [currProduct, setCurrProduct] = useState<productsType>();
  
  useEffect(() => {
    const product:productsType|undefined = products.find((item:productsType) => item._id === productId);
    if (!product) {
      console.error('no product found')
    }
    else {
      setCurrProduct(product);
    }
  }, [productId, products])

  if (!currProduct) {
    return (<div>product not found</div>)
  }

  return (
    <div className="w-full border-t-[1px] pt-[2rem] mb-[10rem] flex flex-col gap-[3rem]">
      <div className="flex flex-col sm:flex-row gap-[1rem] w-full">
        <ProductMedia product={currProduct}/>
        <ProductInformation product={currProduct}/>
      </div>
      <ProductFooter/>
    </div>
  )
}

export default Product