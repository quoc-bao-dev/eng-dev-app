import { useState } from "react";
import { cn } from "../../../../util/cn";
import { IGroupMenu } from "../model";
import MenuItem from "./MenuItem";
import { useAppSelector } from "../../../../store/store";
//? refacetror animation

interface IGroupMenuProps extends IGroupMenu {}
const GroupMenu = ({ isShow, id, menu, order, title }: IGroupMenuProps) => {
    const [isOpen, setIsOpen] = useState(true);
    const { isShowSidebar } = useAppSelector((state) => state.sidebar);
    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    if (!isShow) {
        return <></>;
    }

    return (
        <li>
            <button
                className={`${
                    !isShowSidebar && "hidden"
                } py-3 px-2 text-regent-gray-500 text-[12px] font-semibold font-sans hover:text-regent-gray-800 uppercase`}
                onClick={handleOpen}
            >
                {title}
            </button>
            <ul
                //? refacetror animation
                className={cn(
                    `transition duration-1000 ease-in-out w-full ${
                        isOpen ? "max-h-fit" : "max-h-0 h-0 opacity-0"
                    }`
                )}
            >
                {menu.length > 0 ? (
                    <ul className="w-full flex flex-col gap-2 h-full">
                        {menu.map((item) => (
                            <MenuItem {...item} key={item.id} />
                        ))}
                    </ul>
                ) : (
                    <></>
                )}
            </ul>
        </li>
    );
};

export default GroupMenu;
