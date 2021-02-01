import Link from "next/link"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Opppssss....</h1>
            <h2>That page content not found.</h2>
            <p>Go back to <Link href="/"><a>Home Page</a></Link></p>
        </div>
     );
}
 
export default NotFound;