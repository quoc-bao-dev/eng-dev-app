import { PropsWithChildren } from "react";

const Card = ({ children }: PropsWithChildren) => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-5 h-full">
            {children}
        </div>
    );
};

export default Card;
