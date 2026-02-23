import type { ComponentProps } from "react";

type TSearchBar = ComponentProps<"input"> & {
};

function SearchBar(props: TSearchBar) {
    return (
        <input
            placeholder="بخشی از نام درس مورد نظر را وارد کنید"
            className="input input-primary bg-stone-700 text-white mt-3 w-11/12  lg:input-lg lg:w-6/12 text-right"
            type="text"
            {...props}
        />
    );
}

export default SearchBar;