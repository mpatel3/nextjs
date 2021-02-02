// route for this page comoponent will be subfolder/test
import styles from '../../styles/Ninja.module.css'

// this function runs at build time , app is build and compoents get rendered.
// function won't be execute in the brower.
export const getStaticProps = async () => {
   const results =  await fetch('https://jsonplaceholder.typicode.com/users');
   const usersData = await results.json();
    // whatever we returns will be available in our compoenent as props.
    return {
        props: {
           users: usersData
        }
    }
}

const Test = ({users}) => {
    return ( <div>
                <h1>All Users</h1>
                {users.map(({name, id}) => (
                    <div key={id}>
                        <a className={styles.single}>
                            <h3>{name}</h3>
                        </a>
                    </div>
                ))}
            </div>
        );
}
 
export default Test;