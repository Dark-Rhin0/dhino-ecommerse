import MainLayout from "@components/Layout/layout";
import ProductItem from "@components/ProductItem/ProductItem";
import styles from "./styles.module.scss";

function PopularProduct({ data }) {
    const {container} = styles;
    return (
    
    <MainLayout>
        <div className={container}>
            {data.map((item) => (
                <ProductItem
                    key={item.id}
                    src={item.images[0]} 
                    preSrc={item.images[1]}
                    name={item.name}
                    price={item.price}
                />
            ))}
        </div>
    </MainLayout>

    );
}

export default PopularProduct;