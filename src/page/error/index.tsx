import { useNavigate } from "react-router-dom";
import { Button } from "../../components/common/Button";
import ErrorImage from "./partials/ErrorImage";

const NotFound = () => {
    const nav = useNavigate();
    return (
        <div className="w-full h-[100dvh] flex bg-gradient-to-t from-primary-200 to-primary-50">
            <div className="m-auto flex flex-col gap-4 items-center">
                <h1 className="text-3xl font-bold text-center text-primary-900">
                    Page not found
                </h1>
                <p className="text-regent-gray-800 pb-10">
                    The page you are looking for does not exist. Please go back.
                </p>
                <ErrorImage />

                <Button
                    label="Go Back"
                    variant="black"
                    onClick={() => nav(-1)}
                />
            </div>
        </div>
    );
};

export default NotFound;
