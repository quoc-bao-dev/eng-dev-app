import { PropsWithChildren, memo } from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'
import Footer from '../Footer'
import TestScroll from '../../test/TestScroll'
import TestLine from '../../test/TestLine'
import TestCard from '../../test/TestCard'

interface Props extends PropsWithChildren { }
const DefaultLayout = ({ children }: Props) => {
    return (
        <>
            <div className='grid grid-cols-[auto,1fr] h-[100dvh] bg-regent-gray-100'>

                <div className="h-full overflow-y-auto hide-scrollbar">
                    <Sidebar />
                    <TestScroll />
                </div>
                <div className='relative flex flex-col h-full overflow-y-auto hide-scrollbar'>
                    <div className='sticky top-0'>
                        <Header />
                        {/* <TestLine /> */}
                        <TestCard />
                    </div>
                    {children}
                    <TestScroll />
                    <div className="mt-auto">
                        <TestLine />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default memo(DefaultLayout)