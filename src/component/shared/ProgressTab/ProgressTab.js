import React from 'react'
import Icon from '../Icon'
import Image from '../Image'
import Text from '../Text'
import Styles from './ProgressTab.module.scss'
import propTypes from 'prop-types'




const ProgressTab = ({tabHead,children,srcImage,contentClass,onClick,imageClass}) => {
    return (
        <div className={Styles.Main}>
            <div className={Styles.HeadingMain}>
                <Text className={Styles.Heading}>{tabHead}</Text>
                <Icon click={onClick} customClass={Styles.tabIcon} type="iconFill" />
            </div>
            <div className={Styles.tabMain}>
                <Image className={imageClass} src={srcImage} />
                <div className={`${contentClass} ${Styles.tabContentMain}`}>
                    {children}
                </div>
            </div>
        </div>
    )
}

ProgressTab.propTypes = {
    tabHead:propTypes.string,
    children:propTypes.string,
    srcImage:propTypes.string,
    contentClass:propTypes.string,
    onClick:propTypes.func,
    imageClass:propTypes.string,
}


export default ProgressTab
