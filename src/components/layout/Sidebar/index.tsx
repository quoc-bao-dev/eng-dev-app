import { RiArrowLeftDoubleFill, RiArrowRightDoubleLine } from "react-icons/ri";
import { sidebarJSON } from "../../../mock/APISidebar";
import { setIsShowSidebar } from "../../../store/reducer/sidebarReducer";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { cn } from "../../../util/cn";
import Logo from "../../common/Logo";
import { ISidebarData } from "./model";
import GroupMenu from "./partials/GroupMenu";

const Sidebar = () => {
    const dispatch = useAppDispatch();
    const { isShowSidebar } = useAppSelector((state) => state.sidebar);

    const handleOpen = () => {
        dispatch(setIsShowSidebar());
    };
    //? refacetor to call data
    const sidebarData: ISidebarData = sidebarJSON;
    return (
        <nav
            className={cn(
                `min-h-full py-6 flex flex-col border-dashed border-r border-regent-gray-300  ${
                    isShowSidebar ? "px-4" : "px-2"
                } ${isShowSidebar ? "w-[280px]" : "w-[88px]"}`
            )}
        >
            <div className="">
                <div className="relative">
                    <Logo />
                    <button
                        onClick={handleOpen}
                        className=" border-dashed border border-regent-gray-300 p-2 rounded-full absolute top-[50%] right-[-16px] translate-y-[-50%] translate-x-[50%] z-20 inline-flex overflow-visible"
                    >
                        {isShowSidebar ? (
                            <RiArrowRightDoubleLine />
                        ) : (
                            <RiArrowLeftDoubleFill />
                        )}
                    </button>
                </div>
            </div>
            <ul className="pt-4 overflow-x-visible  hide-scrollbar">
                {/* group menu */}
                {sidebarData.groupMenus.map((item) => (
                    <GroupMenu {...item} key={item.id} />
                ))}
            </ul>
            <div className="rounded-lg bg-primary-100 bg-gradient-to-t from-primary-300 mt-auto p-4 h-[300px]">
                <h2 className="text-primary-500 text-5xl font-bold">
                    UPDATE TO PRO
                </h2>
            </div>
        </nav>
    );
};

export default Sidebar;
