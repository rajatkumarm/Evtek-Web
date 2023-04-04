import React from 'react'
import Styles from "../CartList/CartList.module.scss"
import PropTypes from 'prop-types';
import Text from '../Text';
import Image from '../Image';


const CartList = ({ number, src, textTwo, text, textThird, textFour }) => {
    return (

        <div className={`${Styles.CartList}`}>
            <Text variant={"xx3Text"} strong={'strong7'} color={"primary2"} className={Styles.fourth}>{number}</Text>
            <div className={Styles.imageBox}>
                <Image className={Styles.mainImage} src={src} />
            </div>
            <div className={Styles.ecoSack}>
                <Text variant={"xx3Text"} strong={'strong5'} className={Styles.fourth}>{text}</Text>
                <Text variant={"xlText"} color="greySecondary" strong={'strong4'} className={Styles.fourth}>{textTwo}</Text>
            </div>
            <div className={Styles.ecoSack}>
                <Text variant={"xlText"} strong={'strong4'} className={Styles.fourth}>{textThird}</Text>
                <Text variant={"xlText"} strong={'strong6'} color={"primary2"} className={Styles.fourth}>{textFour}</Text>
            </div>

        </div>

    )
}

export default CartList;

CartList.propTypes = {
    className: PropTypes.string,
    para: PropTypes.string,
    src: PropTypes.string,
    number: PropTypes.string

}

