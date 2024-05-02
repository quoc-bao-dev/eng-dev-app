import { PropsWithChildren } from "react";

const Card = ({ children }: PropsWithChildren) => {
    return (
        <div className="bg-white rounded-lg border-regent-gray-200 shadow-3xl p-5">
            {children}
        </div>
    );
};

export default Card;
