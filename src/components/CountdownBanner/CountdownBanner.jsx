import CountdownTimer from "@components/CountdownTimer/CountdownTimer";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";

function CountdownBanner() {
    const {container, containerTimer, title, boxBtn} = styles;
    const targetDate = '2025-12-31T00:00:00';
    return ( 
        <div className={container}>
            <div className={containerTimer}>
                <CountdownTimer targetDate={targetDate} />
            </div>
            <p className={title}>Sale sập sàn</p>
            <div className={boxBtn}>
                <Button content={'Thử ngay'} />
            </div>
        </div>
     );
}

export default CountdownBanner;