import React, { createContext, useContext,  } from "react";
import { useLocalStoreg } from "../hooks/useLocalStoreg";

interface CourseProvider {
    children: React.ReactNode;
}

interface CourseContext {
    bookMark: CourseItem[],
    handelAddCourseToBookmark: (id: string, code: string, title: string) => void;
    inBookMark: (id: string) => boolean
    handelDelCourseFromBookmark: (id: string) => void


}

interface CourseItem {
    id: string,
    code: string,
    title: string

}



export const CourseContext = createContext({} as CourseContext)



export const useCourseContext = () => {
    return useContext(CourseContext)
}

export function CourseProvider({ children }: CourseProvider) {
    const [bookMark, setbookMark] = useLocalStoreg<CourseItem[]>("coursesss", [])


    const handelAddCourseToBookmark = (id: string, title: string, code: string) => {
        setbookMark(currentItems => {
            let selectedItem = currentItems.find(item => item.id === id)
            if (selectedItem == null) {
                return [...currentItems, { id: id, code: code, title: title }]
            }
            else return [...currentItems]
        })

    }
    const handelDelCourseFromBookmark = (id: string) => {
        setbookMark(currentItems => currentItems.filter(item => item.id !== id));
    };

    const inBookMark = (id: string) => {
        return bookMark.find(item => item.id === id) ? true : false

    }


    return (
        <CourseContext.Provider value={{ bookMark, handelAddCourseToBookmark, inBookMark, handelDelCourseFromBookmark }}>
            {children}

        </CourseContext.Provider>
    )
}