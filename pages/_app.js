import {Chakra} from "../src/theme/Chakra";
import Layout from '../src/components/Layout/Layout';
import 'focus-visible/dist/focus-visible'
import {Provider} from 'react-redux'
import store from "../src/store/store";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import '../styles/global.css';


function MyApp({Component, pageProps}) {

    return (
        <Provider store={store}>
            <Chakra cookies={pageProps.cookies}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Chakra>
        </Provider>
    )
}

export default MyApp
