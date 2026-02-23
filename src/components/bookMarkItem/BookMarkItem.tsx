
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from 'antd';
import { useCourseContext } from '../../context/CourseContext';

const { Text } = Typography;


interface IBookMarkItem {
    id: string
    title: string,
    code: string
}

function BookMarkItem({ id, title, code }: IBookMarkItem) {
    const { handelDelCourseFromBookmark } = useCourseContext();

    return (
        <div className="h-17 lg:h-20 bg-stone-600 font-semibold flex flex-col gap-2 md:gap-0 py-2 lg:flex-row flex-wrap justify-between md:justify-around items-center w-11/12 shrink-0 rounded-lg text-white px-12">

            <div className=' text-xs w-full  md:text-lg font-bold md:w-4/12 text-center md:text-start '>{title}</div>
            <div className="md:w-4/12  text-center">
                <Text copyable className="text-xs xl:text-lg font-bold text-black" style={{ fontSize: 'inherit', color: 'inherit' }}>{code}</Text>
            </div>
            <button  onClick={() => handelDelCourseFromBookmark(id)} className='md:w-4/12  text-end'><DeleteIcon className='cursor-pointer hover:animate-bounce   hover:text-red-500 transition-all duration-150 ' fontSize='large' /></button>

        </div>
    )
}

export default BookMarkItem