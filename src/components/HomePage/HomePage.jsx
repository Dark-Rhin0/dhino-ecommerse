import Banner from "@components/Banner/Banner";
import MyHeader from "@components/Header/Header";
import AdvanceHeadling from "@components/AdvanceHeadling/AdvanceHeadling"
import styles from "./styles.module.scss"
import Info from "@components/Info/Info";
import HeadingListProducts from "@components/HeadingListProduct/HeadingListProducts";

function Hoamepage() {
    const {container} = styles
    return ( 
        <div>
            <div className={container}>
                <MyHeader/>
                <Banner/>
                <Info />
                <AdvanceHeadling />
                <HeadingListProducts />
            </div>
        </div>
     );
}

export default Hoamepage;