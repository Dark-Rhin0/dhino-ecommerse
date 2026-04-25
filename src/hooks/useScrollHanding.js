import { useState, useEffect, useRef } from 'react';

const useScrollHandling = () => {
    const [scrollDriction, setScrollDirection] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const previousScrollPosition = useRef(0);

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
    useEffect(() => {
        window.addEventListener('scroll', scrolltracking);

        return () => window.removeEventListener('scroll', scrolltracking);

    }, []);


    return {
        scrollDriction,
        scrollPosition,
    }

}

export default useScrollHandling;