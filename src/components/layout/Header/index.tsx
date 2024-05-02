import { RiSettings3Fill } from "react-icons/ri";
import { MARGIN } from "../../../constants/layout";
import Avatar from "../../common/Avatar";
import InputSearch from "../../common/InputSearch";
import HeaderButton from "./partials/HeaderButton";
import { RiNotification2Fill } from "react-icons/ri";

const Header = () => {
    return (
        <div
            className={`h-[80px] flex items-center backdrop-blur-sm bg-regent-gray-50/50 ${MARGIN}`}
        >
            <InputSearch />
            <div className="ml-auto flex gap-4 items-center">
                <HeaderButton
                    icon={<RiNotification2Fill size={24} />}
                    notification={3}
                />
                <HeaderButton icon={<RiSettings3Fill size={24} />} spin />
                <div className="">
                    <Avatar
                        outline
                        round
                        size="md"
                        image="https://plus.unsplash.com/premium_photo-1682309761340-3f8b1cbaa655?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zmxhc2h8ZW58MHx8MHx8fDA%3D"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
