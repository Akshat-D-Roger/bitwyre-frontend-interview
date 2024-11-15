import {  useState } from 'react'
import { productsType } from '../assets/assets';

const ProductMedia = ({product}:{product:productsType}) => {

const [mainImage, setMainImage] = useState<{isVideo:boolean, src:string}>({isVideo:false, src:product.image[0]});

  return (
    <div className="flex flex-col-reverse sm:flex-row flex-1 gap-3">
        <div className={`div1 flex flex-row sm:flex-col w-full sm:w-[23%] justify-between sm:justify-start gap-1.5 sm:gap-3 overflow-x-auto overflow-y-auto`}>
            {product.image.map((image, index) => <img key={index} src={image} alt="product-image" className="w-[20svw] sm:w-full cursor-pointer" onMouseEnter={() => { setMainImage({isVideo:false, src:image}) }} />)}
            {product.video && (
                <div className="w-[20svw] sm:w-full cursor-pointer relative" onMouseEnter={() => setMainImage({ isVideo: true, src: product.video })}>
                    <video src={product.video} muted style={{ objectFit: 'cover', width: '100%', height: '100%'}}/>
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white font-bold">▶</div>
                </div>
        )}
        </div>

        <div className="div2 w-full sm:grow">
            {!mainImage.isVideo ? 
                <img src={mainImage.src} alt="main-image" className="w-full" />:
                <video src={mainImage.src} autoPlay muted loop className="w-full"/>
            }
        </div>
    </div>
  )
}

export default ProductMedia