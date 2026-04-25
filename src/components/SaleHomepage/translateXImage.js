import { useEffect, useRef, useState } from "react";

const useTranslateX = () => {
    const [scrollDriction, setScrollDirection] = useState(null);
    const previousScrollPosition = useRef(0);
    const [translateXPosition, setTranslateXPosition] = useState(30);
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrolltracking = () => {
        const currentScrollPosition = window.pageYOffset;
        if (currentScrollPosition > previousScrollPosition.current) {
            setScrollDirection('down');
        } else {
            setScrollDirection('up');
        }
        previousScrollPosition.current = 
            currentScrollPosition <= 0 ? 0 : currentScrollPosition;

            setScrollPosition(currentScrollPosition);
    };

    const handleTranslateX = () => {
        if (scrollDriction === 'down'  && scrollPosition >= 1750) {
            setTranslateXPosition(translateXPosition <=0 ? 0 : translateXPosition - 1);
        }
        else if (scrollDriction === 'up') {
            setTranslateXPosition(translateXPosition >= 30 ? 30 : translateXPosition + 1);
    } };

    useEffect(() => {
        window.addEventListener('scroll', scrolltracking);

        return () => window.removeEventListener('scroll', scrolltracking);

    }, []);

    useEffect(() => {
        handleTranslateX();
    }, [scrollPosition]);

    return {
        translateXPosition,
    };
};

export default useTranslateX;