import React from 'react';
import { Route, useLocation, NavLink } from "react-router-dom";
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Styles from './Steps.module.scss';

export default function StepsMain() {
  const location = useLocation();
  return (
    <>
      <nav className={Styles.container}>
        <nav className={Styles.steps}>
          <li className={location.pathname === "/create-account/step1" ? "active" : ""}>
            <NavLink activeClassName="active" to="/create-account/step1">11</NavLink>
          </li>
          <li className={location.pathname === "/create-account/step2" ? "active" : ""}>
            <NavLink activeClassName="active" to="/create-account/step2">22</NavLink>
          </li>
          <li className={location.pathname === "/create-account/step3" ? "active" : ""}>
            <NavLink activeClassName="active" to="/create-account/step3">33</NavLink>
          </li>
          <li className={location.pathname === "/create-account/step4" ? "active" : ""}>
            <NavLink activeClassName="active" to="/create-account/step4">44</NavLink>
          </li>
          <li className={location.pathname === "/create-account/step5" ? "active" : ""}>
            <NavLink activeClassName="active" to="/create-account/step5">55</NavLink>
          </li>
        </nav>
      </nav>
      <Route exact path="/create-account/step1" component={Step1} />
      <Route exact path="/create-account/step2" component={Step2} />
      <Route exact path="/create-account/step3" component={Step3} />
      <Route exact path="/create-account/step4" component={Step4} />
      <Route exact path="/create-account/step5" component={Step5} />

    </>
  )
}

