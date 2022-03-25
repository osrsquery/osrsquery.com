import Link from 'next/link'

import styles from '../styles/Header.module.css'
import Image from 'next/image'

const Navbar = () => {
    return ( 
      <nav data-collapse="small" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className={styles.navigationSection}>
        <div className="container">
          <div className={styles.navigationFlex}>
            <Link href="/"><a className={styles.logoImage}><Image alt= "hey" src="/osrsquery_logo.png" width={180} height={63}  ></Image></a></Link>
          </div>
        </div>
        
      </nav>
    );
}
 
export default Navbar;