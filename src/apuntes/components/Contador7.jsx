import { useParams } from "react-router-dom"
import Contador6 from "./Contador6"

export default function Contador7() {
    const {n} = useParams()

    return (
        <Contador6 iV={n}></Contador6>
    )
}