import CountdownTimer from "@components/CountdownTimer/CountdownTimer";
import styles from "../styles.module.scss";
import Button from "@components/Button/Button";

function Banner() {
    const { containerBanner, contentBox, title, boxBtn, countDownBox } = styles;

    const targetDate = '2028-12-31T00:00:00';//new Date();
    //targetDate.setDate(targetDate.getDate() + 7); // Set the target date to 7 days from now

    return (
        <div className={containerBanner}>
            <div className={contentBox}>
                <div className={countDownBox}>
                    <CountdownTimer targetDate={targetDate} />
                </div>
                <div className={title}>The Classics Make A Comeback</div>

                <div className={boxBtn}>
                    <Button content="Buy Now" />
                </div>
            </div>
        </div>
    );
}

export default Banner;