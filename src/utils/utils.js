import { useEffect, useLayoutEffect, useState } from 'react';

export const useIsMobile = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
	useEffect(() => {
		window.addEventListener(
			'resize',
			() => {
				const ismobile = window.innerWidth < 769;
				if (ismobile !== isMobile) setIsMobile(ismobile);
			},
			false
		);
	}, [isMobile]);
	return isMobile;
};

export const useWindowSize = () => {
	const getSize = () => {
		return {
			width: window.innerWidth,
			height: window.innerHeight,
		};
	};

	const [windowSize, setWindowSize] = useState(getSize);

	useEffect(() => {
		const handleResize = () => {
			setWindowSize(getSize());
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowSize;
};
