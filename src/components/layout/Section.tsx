import React, { type ComponentProps } from 'react'
type Tsection = ComponentProps<"div"> & {
    children: React.ReactNode,

}
import backgroundImage from "../../assets/wp12852642-4k-loop-wallpapers.webp"

function Section({ children, className, ...rest }: Tsection) {
    return (
        <div style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}  {...rest} className={`  w-full h-screen flex flex-col   overflow-y-hidden scroll-y-0 ${className}`}>
            {children}</div>
    )
}

export default Section