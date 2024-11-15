import Hero from '../components/Hero.tsx'
import LatestCollections from '../components/LatestCollections.tsx'
import BestSellers from '../components/BestSellers.tsx'
import OurPolicy from '../components/OurPolicy.tsx'
import NewsLetter from '../components/NewsLetter.tsx'

const Home = () => {
  return (
    <div className='w-full flex flex-col gap-[5rem] justify-center'>
      <Hero/>
      <LatestCollections/>
      <BestSellers/>
      <OurPolicy/>
      <NewsLetter/>
    </div>
  )
}

export default Home