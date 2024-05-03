import { useState } from "react";
import { RiHeartAddLine } from "react-icons/ri";
import { RiInformation2Line } from "react-icons/ri";
import { RiBookOpenLine } from "react-icons/ri";

const TopicCard = () => {
    const [isHover, setIsHover] = useState(false);

    return (
        <div
            className="rounded-lg shadow-sm aspect-video overflow-hidden relative"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {/* <div className="h-full w-full bg-info-300 flex">
                <p className="text-white font-bold text-6xl m-auto pb-9">
                    React
                </p>
            </div> */}
            <img
                className="w-full h-full object-cover "
                src="https://images.unsplash.com/photo-1553708881-112abc53fe54?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
            />
            <div className="absolute bottom-0 left-0 w-full h-[40%] p-4 bg-gradient-to-t from-black/75 to-black/0 opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-full h-fit p-4">
                <h3 className="font-bold text-lg text-white">Topic 1</h3>
                <p className="text-sm text-white">Lorem ipsum</p>
            </div>
            <div
                className={`absolute h-fit left-[50%] translate-x-[-50%] flex gap-2 transition-all duration-700 ${
                    isHover ? "top-[60%] opacity-100" : " top-[100%] opacity-0"
                }`}
            >
                <button className="w-8 aspect-square rounded-full flex items-center justify-center bg-regent-gray-200 text-regent-gray-500 hover:bg-primary-200 hover:text-primary-500 hover:scale-110 transition-all ">
                    <RiHeartAddLine />
                </button>
                <button className="w-8 aspect-square rounded-full flex items-center justify-center bg-regent-gray-200 text-regent-gray-500 hover:bg-primary-200 hover:text-primary-500 hover:scale-110 transition-all ">
                    <RiInformation2Line />
                </button>
                <button className="w-8 aspect-square rounded-full flex items-center justify-center bg-regent-gray-200 text-regent-gray-500 hover:bg-primary-200 hover:text-primary-500 hover:scale-110 transition-all ">
                    <RiBookOpenLine />
                </button>
            </div>
        </div>
    );
};

export default TopicCard;
