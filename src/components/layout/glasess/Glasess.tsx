import type { ComponentProps } from "react"

type Tglases = ComponentProps<"div"> & {
    children: React.ReactNode
}
function Glasess({ children, className, ...rest }: Tglases) {
    return (
        <div {...rest} className={`backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl rounded-xl  ${className}`}>{children}</div>
    )
}

export default Glasess