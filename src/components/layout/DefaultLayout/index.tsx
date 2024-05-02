import { PropsWithChildren, memo } from "react";
import { MARGIN } from "../../../constants/layout";
import TestLine from "../../test/TestLine";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

interface Props extends PropsWithChildren {}
const DefaultLayout = ({ children }: Props) => {
    return (
        <>
            <div className="grid grid-cols-[auto,1fr] h-[100dvh] bg-regent-gray-50 overflow-visible scro">
                {/* //? fix overflow */}
                <div className="h-full">
                    <Sidebar />
                </div>
                <div className="relative flex flex-col h-full overflow-y-auto hide-scrollbar">
                    <div className="sticky top-0">
                        <Header />
                    </div>
                    <div className={`flex-1 ${MARGIN}`}>{children}</div>
                    {/* <TestScroll /> */}
                    <div className="mt-auto">
                        <TestLine />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default memo(DefaultLayout);
