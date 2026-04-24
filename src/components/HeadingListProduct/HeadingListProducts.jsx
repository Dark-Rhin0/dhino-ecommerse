import MainLayout from "../Layout/layout";
import styles from "./styles.module.scss";
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';
import ProductItem from "@components/ProductItem/ProductItem";

function HeadingListProducts({ data }) {
    const {container, containerItem} = styles;

    return ( 
        <MainLayout>
            <div className={container}>
                <CountdownBanner />
                <div className={containerItem}>
                    {data.map((item) => (
                        <ProductItem key={item.id}
                        src={item.images[0]} 
                        preSrc={item.images[1]}
                        name={item.name}
                        price={item.price}
                        />
                    ))}
                </div>
            </div>
        </MainLayout>
     );
}

export default HeadingListProducts;