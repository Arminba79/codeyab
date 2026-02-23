import { useEffect, useState } from "react";

export function useLocalStoreg<T>(key: string, initialValue: T) {
    const [value, setValue] = useState<T>(() => {
        let localCourse = localStorage.getItem("coursesss");
        if (localCourse != null) {
            return JSON.parse(localCourse);
        }
        else {
            return initialValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value])
    return [value, setValue] as [typeof value, typeof setValue];
}