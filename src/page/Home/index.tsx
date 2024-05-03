import Card from "../../components/common/Card";
import Banner from "./partials/Banner";
import TopicCard from "./partials/TopicCard";
const Home = () => {
    return (
        <div className="grid grid-cols-3 gap-5 py-5">
            <div className="col-span-2">
                <Banner />
            </div>
            <div className="col-span-1">
                <div className="h-full w-full rounded-xl overflow-hidden relative">
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1511268594014-0e9d3ea5c33e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                    />
                    <div className="absolute bottom-0 left-0 w-full p-4 ">
                        <h1 className="font-bold text-lg text-white">
                            Lorem ipsum
                        </h1>
                        <p className=" text-regent-gray-500 text-sm text-clip">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
            <div className="contents">
                <div className="col-span-3">
                    <h3 className="font-bold text-lg mb-[-0.5rem]">
                        Choice more topic
                    </h3>
                </div>
                <TopicCard />
                <TopicCard />
                <TopicCard />
                <TopicCard />
            </div>
            <TopicCard />
        </div>
    );
};

export default Home;
