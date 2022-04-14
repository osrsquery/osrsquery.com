import Link from 'next/link'

import styles from '../styles/Header.module.css'
import Image from 'next/image'

import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'

const Header = () => {
    return ( 
        <div className='header-section'>
            <Link href={"/"}><a className={styles.logoImage}><Image alt= "hey" src="/osrsquery_logo.png" width={180} height={63}  ></Image></a></Link>
            <Navigation/>
            <MobileNavigation/>
        </div>
    );
}
 
export default Header;