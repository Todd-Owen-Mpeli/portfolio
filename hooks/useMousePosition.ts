import {useState, useEffect} from "react";

const useMousePosition = () => {
	const [mousePosition, setMousePosition] = useState({x: null, y: null});

	const updateMousePosition = (element: any) => {
		setMousePosition({x: element?.clientX, y: element?.clientY});
	};

	useEffect(() => {
		window.addEventListener("mousemove", updateMousePosition);

		return () => window.removeEventListener("mousemove", updateMousePosition);
	}, []);

	return mousePosition;
};

export default useMousePosition;
