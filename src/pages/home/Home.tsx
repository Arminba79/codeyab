import Glasess from '../../components/layout/glasess/Glasess'
import { Link } from 'react-router-dom'
import Section from '../../components/layout/Section'

function Home() {
  return (
    <Section className='justify-center items-center gap-10' >

      <div className=' text-white mt-10 xl:text-2xl 2xl:text-3xl font-bold text-center 2xl:mt-60'>سال ورودی خود را انتخاب کنید </div>
      <Glasess className='w-11/12 mb-30 py-5 px-2 xl:w-4/12 xl:h-80 2xl:h-100 flex flex-col items-center justify-center gap-10 2xl:mb-50'>

        <Link to="/vghadim" className='btn xl:btn-lg btn-outline  btn-info '>ورودی های 1402 به قبل</Link>
        <Link to="/vjadid" className='btn xl:btn-lg btn-outline  btn-info '>ورودی های 1403 به بعد</Link>
        <Link to="/bookmark" className='btn xl:btn-lg   btn-secondary '>   لیست دروس نشان شده</Link>
        <span className='animate-pulse text-xs md:text-md font-bold text-center text-white'>توجه : دانشجویان گرامی اکیدا توصیه می شود طبق ورودی خود انتخاب واحد نمایید</span>
      </Glasess>
    </Section>
  )
}

export default Home