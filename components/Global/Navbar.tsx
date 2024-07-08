"use client";

// Imports
import {FC} from "react";
import {useGlobalContext} from "@/context/global";

const Navbar: FC = () => {
	const globalContext = useGlobalContext();

	return <nav className=""></nav>;
};

export default Navbar;
