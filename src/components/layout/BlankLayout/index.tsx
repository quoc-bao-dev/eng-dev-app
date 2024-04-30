import { PropsWithChildren, memo } from 'react'

interface Props extends PropsWithChildren { }
const BlankLayout = ({ children }: Props) => {
    return (
        <>{children}</>
    )
}

export default memo(BlankLayout)