import React from "react";

interface AvatarProps {
    size?: "xs" | "sm" | "md" | "lg";
    round?: boolean;
    image?: string;
    active?: boolean;
    outline?: boolean;
    [key: string]: any;
}
const Avatar: React.FC<AvatarProps> = ({
    size = "md",
    round,
    image,
    active,
    outline,
    ...props
}) => {
    const avatarSize = {
        xs: "w-6 h-6",
        sm: "w-8 h-8",
        md: "w-10 h-10",
        lg: "w-12 h-12",
    };
    const roundStyle = round ? "rounded-full" : "rounded-lg";
    const activeStyle = active
        ? "absolute bottom-0 right-0 w-4 h-4 bg-success-500 rounded-full border-2 border-white"
        : "";
    return (
        <div
            className={`relative rounded-full ${
                outline &&
                "outline outline-2 outline-offset-1 outline-regent-gray-300 "
            } ${avatarSize[size]}`}
        >
            <img
                src={image}
                alt=""
                className={`object-cover w-full h-full overflow-hidden ${roundStyle}`}
                {...props}
            />
            {active && <div className={activeStyle}></div>}
        </div>
    );
};

export default Avatar;
