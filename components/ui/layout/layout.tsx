// Components Import
import NavBar from "../navBar/navBar"

export interface LayoutProps {
    children: React.ReactNode
}

export default function Layout(props: LayoutProps) {

    return(
        <main>
            {props.children}
        </main>
    )
}