import styles from '../styles/Footer.module.css'

import Link from 'next/link'
import Image from 'next/image'

import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillRedditCircle} from 'react-icons/ai'
import {FaPaintBrush} from 'react-icons/fa'
import {GiWhaleTail} from 'react-icons/gi'
import {AiOutlinePoweroff} from 'react-icons/ai'
import {AiOutlineUnorderedList} from 'react-icons/ai'
import {ImFacebook} from 'react-icons/im'
import {AiFillApi} from 'react-icons/ai'
import {BsServer} from 'react-icons/bs'
import {FaGhost} from 'react-icons/fa'
import {GiAxeSword} from 'react-icons/gi'
import {FaVectorSquare} from 'react-icons/fa'
import {BiCubeAlt} from 'react-icons/bi'
import {GiEarthAfricaEurope} from 'react-icons/gi'

const Footer = () => {
    return ( 
      <footer className={styles.footersection}>
           <div className="container">
              <div className={styles.footerflexcontainer}>
                <div id="node1" className={styles.footerblock}>
                  <Link href={"/"}><a className={styles.logoImage}><Image alt= "hey" src="/osrsquery_logo.png" width={180} height={63}/></a></Link>
                  <div className={styles.socialmediaflex}>
                    <a className={styles.socialiconflex}><AiFillYoutube size={33}/></a>
                    <a className={styles.socialiconflex}><AiOutlineTwitter size={33}/></a>
                    <a className={styles.socialiconflex}><AiFillGithub size={33}/></a>
                    <a className={styles.socialiconflex}><AiFillRedditCircle size={33}/></a>
                  </div>
                </div>

                <div id="node" className={styles.footeraboutblock}>
                  <h2 className={styles.footerheading}>What is OSRSQuery?</h2>
                  <p>A modern Runescape platform dedicated to providing the community an environment that anyone can use to gather data. OSRSQuery hosts a variety of projects with tools like Oldschool Runescape Item, NPC, Model, and Object databases. We also have OSRS Sprites, Worldmap, Textures, Music, and Sounds.</p>
                </div>

                <div className="footer-nav-block">
                  <h2 className={styles.footerheading}>Quick Navigation</h2>
                  <ul role="list">
                    <li><a href="/" className={styles.footerlink}><i><GiAxeSword/></i> OSRS Items</a></li>
                    <li><a href="/" className={styles.footerlink}><i><FaGhost/></i> OSRS Npc</a></li>
                    <li><a href="/" className={styles.footerlink}><i><FaVectorSquare/></i> OSRS Models</a></li>
                    <li><a href="/" className={styles.footerlink}><i><BiCubeAlt/></i> OSRS Objects</a></li>
                    <li><a href="/" className={styles.footerlink}><i><GiEarthAfricaEurope/></i> OSRS Worldmap</a> </li>
                  </ul>
                </div>

                <div className="footer-nav-block">
                  <h2 className={styles.footerheading}>Extra Links</h2>
                  <ul role="list">
                    <li><a href="https://runelist.io/" className={styles.footerlink}><i><AiOutlineUnorderedList/></i> RuneList</a></li>
                    <li><a href="https://fluxious-rsps.com/" className={styles.footerlink}><i><ImFacebook/></i> Facebook</a></li>
                    <li><a href="https://github.com/osrsquery/OsrsQuery" className={styles.footerlink}><i><AiFillGithub/></i> Github</a></li>
                    <li><a href="https://probemas.com/" className={styles.footerlink}><i><AiFillApi/></i> API</a></li>
                    <li><a href="https://hosthappy.net/" className={styles.footerlink}><i><BsServer/></i> DigitalOcean</a></li>
                  </ul>
                </div>
              </div>

              <div className={styles.ccflexhorizontal}>
                <div><div className={styles.cctext}>Copyright © 2022 OSRSQuery - All rights reserved.</div></div>
                <div className={styles.cclinkflex}>
                  <a href="https://hosthappy.net/" className={styles.cclink}><i><GiWhaleTail/></i> Hosted by DigitalOcean</a>
                  <a href="https://www.runelist.io/" className={styles.cclink}><i><AiOutlinePoweroff/></i> Powered by RuneList</a>
                  <a href="https://www.gfxdistrict.com/" className={styles.cclink}><i><FaPaintBrush/></i> Design by Mark</a>
                </div>
              </div>
            </div>
      </footer>

    );
}
 
export default Footer;