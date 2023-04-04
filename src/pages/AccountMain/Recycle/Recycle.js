import React from 'react';
import { PageTitle, Text } from '../../../component/shared';
import Layout from '../../Container/Layout';
import Styles from './Recycle.module.scss'

const Recycle = () => {
    return (
        <>
            <Layout>
                <div className={Styles.recycleMain}>
                    <div>
                        <PageTitle type="iconchevron" modulename="What can you recycle?" pagename="Account" />
                    </div>
                    <div className={Styles.recycleContainer}>
                        <div><Text className={Styles.headText}>5 Rules to always keep in mind:</Text></div>
                        <div className={Styles.btmText}>
                            <div className={Styles.btmMainText}>
                                <div className={Styles.textAlign}>
                                    <div>1</div>
                                    <div><Text className={Styles.ruleText}>All bottles and cans must be marked New York State deposit</Text></div>
                                </div>
                                <div className={Styles.textAlign}>
                                    <div>2</div>
                                    <div><Text className={Styles.ruleText}>All bottles and cans must be marked New York State deposit</Text></div>
                                </div>
                                <div className={Styles.textAlign}>
                                    <div>3</div>
                                    <div><Text className={Styles.ruleText}>All bottles and cans must be marked New York State deposit</Text></div>
                                </div>
                                <div className={Styles.textAlign}>
                                    <div>4</div>
                                    <div><Text className={Styles.ruleText}>All bottles and cans must be marked New York State deposit</Text></div>
                                </div>
                                <div className={Styles.textAlign}>
                                    <div>5</div>
                                    <div><Text className={Styles.ruleText}>All bottles and cans must be marked New York State deposit</Text></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.guideContainer}>
                        <div>
                            <div>
                                <Text className={Styles.ruleText}>Container Guide</Text>
                            </div>
                            <div className={Styles.accContainer}>

                            </div>
                            <div className={Styles.typeContainer}>

                            </div>
                        </div>
                        <div>
                            <div className={Styles}>

                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Recycle;
