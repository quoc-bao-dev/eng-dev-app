import { Button } from "../../../components/common/Button";
import SliderImage from "./SliderImage";

const Banner = () => {
    return (
        <div className="p-4  bg-gradient-to-t from-primary-100 to-primary-50 rounded-2xl flex items-center">
            <div className="">
                <h1 className="text-primary-900 font-semibold text-2xl w-[400px]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </h1>
                <p className="text-primary-800 mt-4 text-sm">
                    Et quasi dicta debitis exercitationem fugit voluptate modi
                    at, doloribus nostrum, repudiandae esse in velit laudantium?
                    Sed dicta voluptates quod quam voluptatum.
                </p>
                <div className="mt-4">
                    <Button label="Get Started" variant="black" size="sm" />
                </div>
            </div>
            <SliderImage />
        </div>
    );
};

export default Banner;
