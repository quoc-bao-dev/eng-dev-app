import { ReactNode } from "react";

interface IHeaderButtonProps {
    icon: ReactNode;
    spin?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    notification?: number;
}

const HeaderButton = ({
    icon,
    spin,
    onClick,
    notification,
}: IHeaderButtonProps) => {
    return (
        <div className="relative hover:bg-regent-gray-200 hover:scale-110 rounded-full">
            <button
                onClick={onClick}
                className=" w-10 h-10 rounded-full flex transition"
            >
                <div
                    className={`m-auto text-regent-gray-900 ${
                        spin && "animate-spin-slow"
                    }`}
                >
                    {icon}
                </div>
            </button>
            {notification && (
                <div className="w-6 aspect-square flex items-center justify-center text-white font-medium text-[0.875rem] bg-red-500 rounded-full absolute -top-1 -right-1">
                    {notification}
                </div>
            )}
        </div>
    );
};

export default HeaderButton;
