import { useCourseContext } from "../../context/CourseContext";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Typography } from 'antd';

const { Text } = Typography;

interface Icourse {
  title: string;
  code: string;
  id: string;
}

function Course({ code, title, id }: Icourse) {
  const {  handelAddCourseToBookmark, inBookMark, handelDelCourseFromBookmark } = useCourseContext();

  return (

    <div className="h-17 lg:h-20 bg-stone-600 font-semibold flex flex-col gap-2 md:gap-0 py-2 lg:flex-row flex-wrap justify-between md:justify-around items-center w-11/12 shrink-0 rounded-lg text-white px-12">

      <div className='text-xs w-full   md:text-lg font-bold md:w-4/12 text-center md:text-start '>{title}</div>
      <div className="md:w-4/12   text-center">
        <Text copyable className="md:text-lg font-bold text-black" style={{ fontSize: 'inherit', color: 'inherit' }}>{code}</Text>
      </div>
      <div className="md:w-4/12   text-end ">
        {inBookMark(id) ?
          <button className="cursor-pointer" onClick={() => handelDelCourseFromBookmark(id)}><BookmarkIcon fontSize="large" /></button> :
          <button className="cursor-pointer" onClick={() => handelAddCourseToBookmark(id, title, code)}><BookmarkBorderIcon fontSize="large" /></button>
        }
      </div>
    </div>



  );
}

export default Course;