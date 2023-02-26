import katex from 'katex';

export interface KatexProps {
    display: boolean
    children: string
}

export default function Katex(props: KatexProps) {
    return (
        <>
            {
                props.display ? 
                <script type="math/tex; mode=display">
                    {props.children}
                </script>
                :
                <script type="math/tex;">
                    {props.children}
                </script>
            }
        </>
    )
}