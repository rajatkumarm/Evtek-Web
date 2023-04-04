import React from 'react';
import { Icon, PageTitle, Text } from '../../../component/shared';
import Layout from '../../Container/Layout';
import Styles from './Notification.module.scss'

const Notification = () => {
    return (
        <>
            <Layout>
                <div className={Styles.notifiMain}>
                    <div>
                        <PageTitle type="iconchevron" modulename="Notifications" pagename="Account" />
                    </div>
                    <div className={Styles.notifyContent}>
                        <div>
                            <Text className={Styles.blogText}>1 notification</Text>
                        </div>
                        <div className={Styles.warningContainer}>
                            <Icon type='iconalert' customClass={Styles.alertColor} />
                            <div className={Styles.warnText}>
                                <Text className={Styles.btmText}>Please complete your account to use Evtek’s services. Tap to open Settings</Text>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Notification;
