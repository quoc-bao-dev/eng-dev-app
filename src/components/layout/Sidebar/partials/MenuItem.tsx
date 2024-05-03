import { useState } from "react";
import { RiArrowDownSLine, RiBtcFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import {
    setCurLink,
    setCurMenu,
} from "../../../../store/reducer/sidebarReducer";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { cn } from "../../../../util/cn";
import { IMenuItem } from "../model";
import SubmenuItem from "./SubmenuItem";

interface IMenuItemProps extends IMenuItem {}
const MenuItem = ({
    icon,
    isShow,
    id,
    path,
    title,
    submenu,
}: IMenuItemProps) => {
    const dispatch = useAppDispatch();
    const currentLink = useAppSelector((state) => state.sidebar.currentLink);
    const isShowSidebar = useAppSelector(
        (state) => state.sidebar.isShowSidebar
    );
    const currentMenu = useAppSelector((state) => state.sidebar.currentMenu);
    const [isOpen, setIsOpen] = useState(true);
    const handleOpen = () => {
        setIsOpen(!isOpen);
        dispatch(setCurMenu(id));
    };
    const handleClickLink = () => {
        dispatch(setCurLink(id));
        dispatch(setCurMenu(id));
    };
    if (!isShow) {
        return <></>;
    }
    if (path) {
        return (
            <li onClick={handleClickLink}>
                <NavLink
                    className={`${
                        currentLink === id
                            ? "bg-primary-100 text-primary-600 hover:text-primary-700 hover:bg-primary-200"
                            : "text-regent-gray-700 hover:bg-regent-gray-200 hover:text-regent-gray-800"
                    } ${
                        !isShowSidebar ? "flex-col text-[10px]" : "text-[14px]"
                    } py-3 px-2 w-full flex gap-2 items-center rounded-lg  font-medium font-sans capitalize`}
                    to={path}
                >
                    <RiBtcFill size={24} />
                    {title}
                </NavLink>
            </li>
        );
    }
    return (
        <li className="relative overflow-visible">
            <button
                className={`${
                    currentMenu === id
                        ? "bg-regent-gray-200 hover:bg-regent-gray-300"
                        : ""
                } ${
                    !isShowSidebar ? "flex-col text-[10px]" : "text-[14px]"
                }  py-3 px-2 w-full flex gap-2 items-center text-left text-regent-gray-700  rounded-lg font-medium font-sans hover:bg-regent-gray-200 hover:text-regent-gray-800 capitalize`}
                onClick={handleOpen}
            >
                <RiBtcFill size={24} />
                {title}
                <div
                    className={cn(
                        `ml-auto ${isOpen && "rotate-180"} ${
                            !isShowSidebar && "hidden"
                        }`
                    )}
                >
                    <RiArrowDownSLine size={24} />
                </div>
            </button>
            <ul
                className={`flex flex-col gap-2 pt-2 overflow-hidden ${
                    !isShowSidebar &&
                    "absolute top-[50%]  translate-x-[-50%] left-[100%]"
                } ${isOpen ? "h-fit" : "h-0"}`}
            >
                {submenu?.map((item) => (
                    <SubmenuItem {...item} key={item.id} />
                ))}
            </ul>
        </li>
    );
};

export default MenuItem;
