import React from 'react';
import { useLocation, BrowserRouter, useRoutes, } from 'react-router-dom';
import { Provider } from 'react-redux'
import { ConfigProvider, } from 'antd-mobile';
import { AnimatePresence, motion, } from "framer-motion";
import routes from './routes';
import ReactDOM from 'react-dom/client';
import config from '@/config'
import zhCN from 'antd-mobile/es/locales/zh-CN';
import store from '@store'
import { useStore } from '@/store/useStore'
import '@style/base.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ConfigProvider locale={zhCN}>
        <Provider store={store}>
            <BrowserRouter basename={config.basename}>
                <RouterAnimate />
            </BrowserRouter>
        </Provider>
    </ConfigProvider>
);


const transition = {
    duration: 0.3,
    type: 'tween',
};

const direct = {
    forward: {
        initial: { opacity: 1, x: '100%' },
        enter: { opacity: 1, x: 0, transition, zIndex: 2 },
        exit: { opacity: 0.8, x: '-15%', transition, zIndex: 1, }
    },
    back: {
        initial: { opacity: 1, x: '-10%', },
        enter: { opacity: 1, x: '0', transition },
        exit: { opacity: 1, x: '100%', transition, zIndex: 3, }
    }
}


function RouterAnimate() {
    const element = useRoutes(routes)
    const location = useLocation();
    const isBack = useStore(state => state.isBack)
    const setBack = useStore(state => state.setBack);

    return (
        <AnimatePresence
            mode="sync"
            initial={false}
            onExitComplete={() => {
                setBack();
                setIsAnimatePlaying(false);
            }}
        >

            <motion.div
                key={location.pathname}
                variants={isBack ? direct.back : direct.forward}
                initial="initial"
                animate="enter"
                exit='exit'
                className='motion-page user'
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    overflowY: 'hidden',
                    background: '#fff',
                    userSelect: 'none',
                    willChange: 'transform, opacity'
                }}
            >
                {React.cloneElement(element, { key: location.pathname })}
            </motion.div>

        </AnimatePresence>
    )
}
