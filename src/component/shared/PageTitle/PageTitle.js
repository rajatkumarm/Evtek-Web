import React from 'react';
import Icon from '../Icon';
import Styles from './PageTitle.module.scss';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';


const PageTitle = ({ pagename, modulename, icon, type,titleClass }) => {
    const history=useHistory();
    return (
        <div  className={`${titleClass} ${Styles.mainTitle}`}>
            <div className={Styles.iconMain}>
                <Icon type={type} variant="iconSize" icon={icon} click={()=> history.goBack()} />
            </div>
            <div className={Styles.mainText}>
                <div className={Styles.pageName}>
                    {pagename}
                </div>
                <div className={Styles.moduleName} >
                    {modulename}
                </div>
            </div>
        </div>
    );
}

PageTitle.protoTypes = {
    pagename: PropTypes.string,
    modulename: PropTypes.string,
    className: PropTypes.string,
    titleClass: PropTypes.string,

}

export default PageTitle;

