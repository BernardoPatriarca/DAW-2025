import type { ReactNode } from "react"

type FooterLinkPropos = {
    children: ReactNode
}

export function FooterLink({
    children
}: FooterLinkPropos) {
    return (
        <a className="text-[#a0a0a0] hover:text-white" href="#">
            { children }
        </a>
    )
}