import { useSelector } from "react-redux";
import Link from 'next/link';

const ShowUsers = () => {
    const state = useSelector((state) => state)

    return (
        <>
        <code>{JSON.stringify(state, null, 4)}</code>
        <Link href="/">
            Click here to Back Home
        </Link>
        </>
    )
}

export default ShowUsers;