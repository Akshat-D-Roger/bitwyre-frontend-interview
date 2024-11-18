import { NavLink } from 'react-router-dom'
import { productsType } from '../assets/assets'
import { useRecoilValue } from 'recoil'
import darkModeAtom from '../store/atoms/darkMode'

const ProductCard = ({product}:{product:productsType}) => {

    const currency = '$'
    const darkMode = useRecoilValue(darkModeAtom)
  return (
    <NavLink to={`/product/${product._id}`} className={`${darkMode && 'text-white'}`}>
        <div className='overflow-hidden h-[80%]'>
            <img className="hover:scale-110 transition-all w-full h-full" src={(product.image)[0]} alt="product-image" loading='lazy' />
        </div>
        <div className='text-sm leading-4 h-[13%]'>{product.name}</div>
        <p className='text-sm h-[7%]'>{`${currency} ${product.price}`}</p>
    </NavLink>
  )
}

export default ProductCard