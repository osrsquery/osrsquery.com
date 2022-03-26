import styles from '../styles/Header.module.css'
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import Link from 'next/link'
import { FaPaypal } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import  ServiceCheck  from './api/ServiceCheck.ts';

const Navigation = (props) => {


    let service = new ServiceCheck()
    service.init()

    return (
        <>
            <div className={styles.headerRight}>
                <ul className={styles.navbarNav}>
                    <NavItemRight icon={<FaPaypal size={20}/>} link={"http://paypal.com"} angle={"40deg"} minColor={"#399b9e"} maxColor={"#2f8386"}  />
                        <NavItemRight icon={<FaDiscord size={20}/>} link={"https://discord.gg/Z3GgPdVu9b"} angle={"40deg"} minColor={"#4e5f9b"} maxColor={"#7d92dd"} />
                        <NavItemRight icon={<AiFillGithub size={20}/>} link={"https://github.com/osrsquery"} angle={"40deg"} minColor={"#6e5494"} maxColor={"#6e5499"} />
                        <NavItemRight icon={<service.serversState size='20px' color={service.serversStateColor}/>} angle={"40deg"} minColor={"#ac7112"} maxColor={"#e69c14"}>
                        <DropdownMenu service={service}></DropdownMenu>
                    </NavItemRight>
                </ul>
            </div>
        </>
        
    );
}


function NavItemRight(props) {
    const [open, setOpen] = useState(false);
  
    return (
      <li className="nav-item-right">
        <Link href={props.link ? props.link : "#"}><a className="icon-button-right" style={{
            backgroundImage: `linear-gradient(${props.angle}, ${props.minColor} , ${props.maxColor})`
        }} onClick={() => setOpen(!open)}>
          {props.icon}
        </a></Link>
  
        {open && props.children}
      </li>
    );
}
  
function NavItem(props) {
    const [open, setOpen] = useState(false);
  
    return (
      <li className="nav-item">
        <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
          {props.icon}
        </a>
  
        {open && props.children}
      </li>
    );
}
  
  function DropdownMenu(props) {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])
  
    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }
  
    function DropdownItem(props) {
      return (
        <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </a>
      );
    }
  
    const OpenRs2 = props.service.iconState[0]
    const OsrsQuery = props.service.iconState[1]
 

    return (
      <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
  
        <CSSTransition in={activeMenu === 'main'}  timeout={500} classNames="menu-primary" unmountOnExit onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem 
            leftIcon={<OpenRs2/>}>
              OpenRs2
            </DropdownItem>
            <DropdownItem leftIcon={<OsrsQuery/>}>
              OsrsQuery
            </DropdownItem>
           

          </div>
        </CSSTransition>
  
      
      </div>
    );
  }

export default Navigation;