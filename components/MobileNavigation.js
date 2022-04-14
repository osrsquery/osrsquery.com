import styles from '../styles/Header.module.css'
import {CgMenuRound} from 'react-icons/cg'
import {CgCloseO} from 'react-icons/cg'

import {useState} from 'react'

const MobileNavigation = () => {

    const [open, setOpen] = useState(false)

    const iconOpen = <CgMenuRound className={styles.Hamburger} 
        size='30px' color='white'
        onClick={() => setOpen(!open)}
    />

    const iconClose = <CgCloseO className={styles.Hamburger} 
        size='30px' color='white'
        onClick={() => setOpen(!open)}
    />

    return (

        
        <nav className={styles.navbarNavMobile}>
           {open ? iconClose : iconOpen}
           {open && <MobileLinks/>}
        </nav>
    );
}

export default MobileNavigation;

const MobileLinks = () => {

    return (
        
       
            <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
                <li>Milk</li>
                <li>Milk</li>
                <li>Milk</li>
                <li>Milk</li>
                <li>Milk</li>
                <li>Milk</li>
                <li>Milk</li>
             </ul>  
       

    );
}

