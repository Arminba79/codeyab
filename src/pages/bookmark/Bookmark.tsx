import Section from '../../components/layout/Section'
import Glasess from '../../components/layout/glasess/Glasess'
import BookMarkItem from '../../components/bookMarkItem/BookMarkItem'
import { useCourseContext } from '../../context/CourseContext';
import BackButton from '../../components/backButton/BackButton';

function Bookmark() {
    const { bookMark, } = useCourseContext();
    console.log(bookMark, "ssssssssssssss")

    return (
        <Section className='justify-center items-center'>
            <Glasess className='w-11/12 min-h-9/12 max-h-9/12 xl:h-115 2xl:h-170  flex flex-col'>
                {/* title */}
                <div className='h-13 sm:h-15 flex justify-between px-5 items-center text-sm sm:text-md md:text-lg md:px-20 py-5  font-bold text-white '>
                    <BackButton />
                    <span>لیست دروس  نشان شده</span>
                </div>
                {/* courses list */}

                <div className='w-full h-full  overflow-y-scroll rounded-b-xl flex mt-3  flex-col gap-5 items-center '>
                    {bookMark.map((item) => (
                        <BookMarkItem key={item.id} {...item} />
                    ))}
                </div>
            </Glasess>
        </Section>
    )
}

export default Bookmark