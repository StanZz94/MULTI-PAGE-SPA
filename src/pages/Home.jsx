import { Link } from "react-router-dom"

export default function Home() {

    return <>
        <h1>Home Page</h1>
        <p>Go to products <Link to="/products">Here</Link></p>
    </>
}