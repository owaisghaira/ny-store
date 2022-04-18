import styles from '../styles/Home.module.css'


export default function BackDrawer({handlebackdrop}) {
    return (

        <div onClick={()=>handlebackdrop()}  className={styles.sidebarmenu_backdrop}></div>

    )
}