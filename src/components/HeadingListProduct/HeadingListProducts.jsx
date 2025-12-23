import MainLayout from "../Layout/layout";
import CountdownTimer from "@components/CountdownTimer/CountdownTimer";
import styles from "./styles.module.scss";
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';

function HeadingListProducts() {
    const {container, containerItem} = styles;
    return ( 
        <MainLayout>
            <div className={container}>
                <CountdownBanner />
                <div className={containerItem}>
                    <div>1</div>
                    <div>2</div>
                </div>
            </div>
        </MainLayout>
     );
}

export default HeadingListProducts;