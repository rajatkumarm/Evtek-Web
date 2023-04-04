import React from 'react';
import Styles from './Nav.module.scss'

const Nav = (props) => {
    const dots = [];
    for (let i = 1; i <= props.totalSteps; i += 1) {
        const isActive = props.currentStep === i;
        dots.push((
            <span
                key={`step-${i}`}
                className={`${Styles.dot} ${isActive ? Styles.active : ''}`}
                onClick={() => props.goToStep(i)}
            >&bull;</span>
        ));
    }

    return (
        <div className={Styles.nav}>{dots}</div>
    );
};

export default Nav;
