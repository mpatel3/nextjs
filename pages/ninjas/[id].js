/*  Dynamics routes will be name [] for dynamic path.
    Here we need to get details of an individual item and display on the page component for the nextjs to render. 
    Need to tell next js about possible routes so that at build time it can generate all the possible routes
    This is the function which will run at build time. 
    Inside this function we need to mention what are the possible values our route parameter accepts.
*/ 
export const getStaticPaths =  async () => {
    const results = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await results.json(); // .json is async await that.

    // path property needs to be an array of objects.
    // each objects reprsents a route. In each object we need to specify route parameter.
    const paths = users.map(user => {
        return {
            params: {id: user.id.toString()}
        }
    });
    return {
        paths,
        fallback: false,
    }
}

// Use getStaticProps to get route paramter and fetch build data.
export const getStaticProps = async ({params : {id}}) => {

    const result = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await result.json();

    return { props: {user} }
}

const Details = ({user : {name}}) => {
    return ( <div>
                <h2>Name</h2>
                <h3 style={{fontWeight:'normal'}}>{name}</h3>
            </div> 
            );
}
 
export default Details;
