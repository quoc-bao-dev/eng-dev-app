import { forwardRef } from "react";
import { RiSearchLine } from "react-icons/ri";

export const InputSearch = forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
    return (
        <div className="relative">
            <input
                placeholder="Search..."
                {...props}
                ref={ref}
                className={`bg-white px-3 py-2 pr-9 border  border-regent-gray-300 text-regent-gray-900 text-sm rounded-lg outline-none focus:border-regent-gray-600 outline-1 outline-offset-0 focus:outline-regent-gray-600 hover:border-regent-gray-600 ${props.className}`}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-regent-gray-400">
                <RiSearchLine size={20} />
            </div>
        </div>
    );
});

export default InputSearch;
