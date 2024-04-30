import { PropsWithChildren, memo } from 'react'

interface Props extends PropsWithChildren { }
const DefaultLayout = ({ children }: Props) => {
    return (
        <>{children}</>
    )
}

export default memo(DefaultLayout)