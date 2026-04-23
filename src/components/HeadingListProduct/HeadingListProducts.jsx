import MainLayout from "../Layout/layout";
import styles from "./styles.module.scss";
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';
import ProductItem from "@components/ProductItem/ProductItem";

function HeadingListProducts() {
    const {container, containerItem} = styles;
    return ( 
        <MainLayout>
            <div className={container}>
                <CountdownBanner />
                <div className={containerItem}>
                    <ProductItem />
                    <ProductItem />
                </div>
            </div>
        </MainLayout>
     );
}

export default HeadingListProducts;