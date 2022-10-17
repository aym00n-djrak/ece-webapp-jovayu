import Navbar from "./Navbar";
import styles from '../styles/Home.module.css'

function MyLayout({children}){
return (
<div className="container">
<Navbar></Navbar>
    {children}
    <div className={styles.footer}> JOVAYU &copy; 2022</div>
</div>
)
}

export default MyLayout