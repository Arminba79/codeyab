import { useEffect, useState } from 'react'
import Section from '../../components/layout/Section'
import Glasess from '../../components/layout/glasess/Glasess'
import { GetCourseNew } from '../../services/api';
import SearchBar from '../../components/serachBar/SearchBar';
import Course from '../../components/course/Course';
import BackButton from '../../components/backButton/BackButton';
function Vjadid() {
    interface Course {
        id: string;
        title: string;
        code: string;
    }

    const [courses, setCourse] = useState<Course[]>([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        let data = GetCourseNew().then(courses => {
            setCourse(courses);
            console.log(data)
        })
        console.log(data)
    }, []);

    const filteredCourses = courses.filter(course =>
        course.title.includes(searchValue)
    );

    return (
        <Section className='items-center justify-between relative '>

            <SearchBar onChange={(e) => setSearchValue(e.target.value)} />

            <Glasess className='w-11/12 min-h-9/12 max-h-9/12 xl:h-115 2xl:h-170  flex flex-col'>
                {/* title */}
                <div className='h-13 sm:h-15 flex justify-between px-5 items-center text-sm sm:text-md md:text-lg md:px-20 py-5  font-bold text-white '>
                    <BackButton />
                    <span>لیست دروس چارت جدید</span>
                </div>
                {/* courses list */}

                <div className='w-full h-full  overflow-y-scroll rounded-b-xl flex  flex-col gap-5 items-center mt-3  '>
                    {filteredCourses.map(course => (<Course {...course} />))}

                </div>
            </Glasess>
            <div className='text-slate-500 py-2 text-xs lg:text-md text-center'>Developed By Armin</div>
        </Section>
    )
}

export default Vjadid