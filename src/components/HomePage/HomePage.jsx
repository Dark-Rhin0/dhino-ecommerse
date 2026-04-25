import Banner from "@components/Banner/Banner";
import MyHeader from "@components/Header/Header";
import AdvanceHeadling from "@components/AdvanceHeadling/AdvanceHeadling"
import styles from "./styles.module.scss"
import Info from "@components/Info/Info";
import HeadingListProducts from "@components/HeadingListProduct/HeadingListProducts";
import { useState, useEffect } from "react";
import {getProducts} from "@/apis/productsService";
import PopularProduct from "@components/PopularProduct/PopularProduct";
import SaleHomepage from "@components/SaleHomepage/SaleHomepage";
import MyFooter from "../Footer/Footer";

function Hoamepage() {

    const [listProducts, setListProducts] = useState([]);

    useEffect ( () => {
        getProducts().then((res) => {
            setListProducts(res.contents);
        });
    }, []);

    const {container} = styles;
    return (
        <div>
            <MyHeader/>
            <Banner/>
            <Info />
            <AdvanceHeadling />
            <HeadingListProducts data={listProducts.slice(0, 2)} />
            <PopularProduct data={listProducts.slice(2, listProducts.length)} />
            <SaleHomepage />
            <MyFooter />
        </div>
     );
}

export default Hoamepage;