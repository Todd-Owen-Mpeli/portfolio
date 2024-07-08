"use client";

// Imports
import {FC} from "react";
import {useGlobalContext} from "@/context/global";

const Footer: FC = () => {
	const globalContext = useGlobalContext();

	return <footer className=""></footer>;
};

export default Footer;
