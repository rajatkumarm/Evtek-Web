import React, { useState } from 'react'
import { Icon, Text, ListItem, ListGroup, Heading, Image } from '../index';
import { Link, NavLink } from 'react-router-dom';
import Styles from './Sidebar.module.scss'
import { useEffect } from 'react';
const Sidebar = ({ callFn }) => {
  const [show, setShowInfo] = useState(false);
  const [active, setActiveNow] = useState(0);
  const [recycleActive, setRecycleActive] = useState([]);
  const [iconActive, setIconActive] = useState(false);
  useEffect(() => {
    let location = window.location.pathname;
    if (location === "/pickup" || location === "/dropoff" || location === "/recycling-activity") {
      setShowInfo(true); setActiveNow(2); setIconActive(false)
    }
    if (location === "/") {
      setActiveNow(1)
    }
  }, [])

  return (
    <div className={Styles.sideMain}>
      <ListGroup className={Styles.menu}>
        <ListItem>
          <Link to={"/"} onClick={() => { setActiveNow(1) }} className={active === 1 ? "active" : ''} >
            <Image className={Styles.home} src="images/homeInactive.svg" />
            <span>Home</span>
          </Link>
        </ListItem>
        <ListItem>
          <Link onClick={() => { setShowInfo(true); setActiveNow(2); setIconActive(true) }} className={active === 2 ? "active" : ''}>
            <Icon customClass={`${Styles.leafIcon} ${Styles.leaf}`} type={"iconrecycle"} />
            <span className={Styles.recycle}>Recycle</span>
            {iconActive &&
              <Icon customClass={Styles.infoRecycleIcon} type={"iconi"} />
            }
          </Link>
        </ListItem>
        {show &&
          <div className={Styles.RecycleClick} >
            <div className={Styles.pickUpMain}>
              <NavLink to={"/pickup"} onClick={() => { setRecycleActive(0); }} className={recycleActive === 0 ? "active" : ''}>Pickup</NavLink>
            </div>
            <div className={Styles.dropOffMain}>
              <NavLink to={"/dropoff"} onClick={() => { setRecycleActive(1); }} className={recycleActive === 1 ? "active" : ''}>Drop-off & Walk-in</NavLink>
            </div>
            <div className={Styles.recycleActivityMain}>
              <NavLink to={"/recycling-activity"} onClick={() => { setRecycleActive(2); }} className={recycleActive === 2 ? "active" : ''}>Recycling Activity</NavLink>
            </div>
          </div>
        }
        <ListItem >
          <NavLink to={"/wallet"} onClick={() => { setActiveNow(3) }} className={active === 3 ? "active" : ''}>
            <Icon customClass={Styles.leafIcon} type={"iconUnion"} />
            <span className={Styles.wallet}>Wallet</span>
          </NavLink>
        </ListItem>
        <ListItem  >
          <NavLink to={"/progress-home"} onClick={() => { setActiveNow(4) }} className={active === 4 ? "active" : ''}>
            <Icon customClass={Styles.leafIcon} type={"progress"} />
            <span className={Styles.progress}>Progress</span>
          </NavLink>
        </ListItem>
        <ListItem className={Styles.shopMain}>
          <NavLink to={"/shop-home"} onClick={() => { setActiveNow(5) }} className={active === 5 ? "active" : ''}>
            <Icon customClass={Styles.leafIcon} type={"iconGroup1"} />
            <span className={Styles.shop}>Shop</span>
          </NavLink>
        </ListItem>
      </ListGroup>
      <div className={Styles.shopBorder} />
      <div className={Styles.sidebarFooter}>
        <div className={Styles.accountMain}>
          <Icon customClass={Styles.AccountIcon} type={"iconUser"} />
          <NavLink to={'#'} onClick={callFn} className={Styles.accountText}>
            <Heading headingType={"h3"} color={"secondary"}>Account</Heading>
          </NavLink>
        </div>
        <NavLink to={'/#'} className={Styles.backtoevtekText}>
          <Text variant={"xlText"} color={"secondary"}>Back to evtek.co</Text>
        </NavLink>
        <div className={Styles.logOutMain}>
          <NavLink to={'/#'} className={Styles.LogoutText}>
            <Text variant={"xlText"} color={"secondary"}>Logout</Text>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Sidebar