import { PropsWithChildren, memo } from "react";
import { MARGIN } from "../../../constants/layout";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

interface Props extends PropsWithChildren {}
const DefaultLayout = ({ children }: Props) => {
    return (
        <>
            <div className="grid grid-cols-[auto,1fr] h-[100dvh] bg-regent-gray-100 overflow-visible scro">
                {/* //? fix overflow */}
                <div className="h-full z-20">
                    <Sidebar />
                </div>
                <div className="relative flex flex-col h-full overflow-y-auto hide-scrollbar">
                    <div className="sticky top-0 z-10">
                        <Header />
                    </div>
                    <div className={`flex-1 ${MARGIN}`}>{children}</div>
                    {/* <TestScroll /> */}
                    <div className="mt-auto">
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(DefaultLayout);
