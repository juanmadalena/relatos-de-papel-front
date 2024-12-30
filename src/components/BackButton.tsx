import { useNavigate } from "react-router"
import { LeftArrowIcon } from "./Icons";

type BackButtonProps = {
    to: string
}

export const BackButton = ({to}: BackButtonProps) => {

    const navigate = useNavigate();

    return (
        <button className="bg-gray-800 text-white p-2 rounded-md" onClick={() => navigate(to)}>
            <LeftArrowIcon />
        </button>
    )
}