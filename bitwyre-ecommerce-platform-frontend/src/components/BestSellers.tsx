import { bestSellersSelector } from '../store/atoms/products.ts'
import ProductCard from './ProductCard.tsx'
import { useRecoilValue } from 'recoil'
import Title from './Title.tsx'
import darkModeAtom from '../store/atoms/darkMode.ts'

const BestSellers = () => {
    const bestSellerProducts = useRecoilValue(bestSellersSelector)
    const darkMode = useRecoilValue(darkModeAtom)
    if(bestSellerProducts.length===0){
      return(
        <div></div>
      )
    }

    return (
      <div className='w-full flex flex-col gap-3'>
          <div className='flex justify-center'>
            <Title firstName='BEST' secondName='SELLERS'/>
          </div>
          <div className={`text-center text-sm text-gray-600 px-[4rem] ${darkMode && 'text-stone-400'}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quia sed tenetur recusandae ex. Quidem ea quos asperiores, ab molestias .</div>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-4'>
              {bestSellerProducts.map(item=>(<ProductCard key={item._id} product={item}/>))}
          </div>
      </div>
    )
} 

export default BestSellers