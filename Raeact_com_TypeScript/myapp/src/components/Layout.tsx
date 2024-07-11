import { FinalPag } from "./Footer"
import { ParteCima } from "./Header"

export const Layout = ({children}: any) => {
       return(
        <>
            <ParteCima />
            {children}
            <FinalPag />
        </>
    )
}