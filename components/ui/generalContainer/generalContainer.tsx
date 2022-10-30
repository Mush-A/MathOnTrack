// MUI Imports
import Container from "@mui/material/Container"

export interface GeneralContainerProps {
    children: React.ReactNode
} 

export default function GeneralContainer(props: GeneralContainerProps) {
    return <Container sx={{my: 8}}>
        {props.children}
    </Container>
}