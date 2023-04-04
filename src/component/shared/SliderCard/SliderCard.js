import React from 'react'
import propTypes from 'prop-types'
import Styles from './SliderCard.module.scss'
import { Image, Text } from '../../shared/index'
const SliderCard = ({ src, cardText }) => {
    return (
        <div className={Styles.container}>
            <Image className={Styles.cardImage} src={src} />
            <div>
                <Text variant={"lgText"}>{cardText}</Text>
            </div>

        </div>
    )
}

SliderCard.propTypes = {

    src: propTypes.string,
    cardText: propTypes.string,
}

export default SliderCard
