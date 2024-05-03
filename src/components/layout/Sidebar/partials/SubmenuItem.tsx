import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { setCurLink } from "../../../../store/reducer/sidebarReducer";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { ISubmenuItem } from "../model";

interface ISubmenuItemProps extends ISubmenuItem {}
const SubmenuItem = ({ icon, id, isShow, path, title }: ISubmenuItemProps) => {
    const currentLink = useAppSelector((state) => state.sidebar.currentLink);
    const dispatch = useAppDispatch();
    if (!isShow) {
        return <></>;
    }
    const handleClick = () => {
        dispatch(setCurLink(id));
    };
    return (
        <li onClick={handleClick}>
            <Link
                className={`py-2 px-2 w-full text-regent-gray-700 flex gap-2 items-center hover:bg-regent-gray-200 rounded-lg text-[14px] font-medium font-sans hover:text-regent-gray-800 capitalize`}
                to={path!}
            >
                <div
                    className={`${
                        currentLink == id ? "text-primary-600 ml-[-3px]" : ""
                    } pr-2 pl-2 w-fit`}
                >
                    <RiCheckboxBlankCircleFill
                        size={currentLink == id ? 12 : 8}
                    />
                </div>
                {title}
            </Link>
        </li>
    );
};

export default SubmenuItem;
