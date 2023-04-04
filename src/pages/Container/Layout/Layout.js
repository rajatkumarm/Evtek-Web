import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Layout.module.scss'
import { Sidebar,Image } from '../../../component/shared';


const Layout = ({ children, sidebar , callFn,layoutClass }) => {
    return (
        <div className={Styles.layoutMain}>
            <div className={`${layoutClass} ${Styles.layout}`}>
                <Sidebar sidebar={sidebar} callFn={callFn} />
            </div>
            <div className={Styles.imgBtl}>
                <Image className={Styles.leftside}  src='images/leftside.png' alt='leftside.png'></Image>
                <Image className={Styles.stick}  src='images/stick.png' alt='stick.png'></Image>
                <Image className={Styles.rightSide}  src='images/rightside.png' alt='stick.png'></Image>
            </div>
            <div className={Styles.childreMain}>{children}</div>
        </div>
    );
}

Layout.protoType = {
    children: PropTypes.any,
    sidebar: PropTypes.any,
    callFn: PropTypes.any,
    layoutClass: PropTypes.string,

}

export default Layout;
