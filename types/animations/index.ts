/*  FRAMER-MOTION ANIMATIONS
Custom reusable Animation Properties/variables */

// WhileInView
export type Initial = {
	y: number;
	opacity: number;
};
export type InitialTwo = {
	y: number;
	opacity: number;
};
export type FadeIn = {
	opacity: number;
	transition: {
		duration: number;
		delay: number;
		ease: string;
	};
};
export type FadeInTwo = {
	y: number;
	opacity: number;
	transition: {
		delay: number;
		duration: number;
		ease: string;
	};
};
export type FadeInUp = {
	y: number;
	opacity: number;
	transition: {
		delay: number;
		duration: number;
		ease: string;
	};
};
export type Stagger = {
	initial: {
		opacity: number;
		y: number;
	};
	animate: {
		opacity: number;
		y: number;
		transition: {
			delay: number;
			duration: number;
			ease: string;
		};
	};
};
export type ArrayLoopStaggerChildren = {
	initial: {
		opacity: number;
		y: number;
	};
	animate: (keys: number) => {
		opacity: number;
		y: number;
		transition: {
			delay: number;
			duration: number;
			ease: string;
		};
	};
};
export type SlideInRightInitial = {
	y: number;
	x: number;
	opacity: number;
};
export type SlideInLeftInitial = {
	y: number;
	x: number;
	opacity: number;
};
export type SlideInRightFinish = {
	x: number;
	y: 0;
	opacity: number;
	transition: {
		delay: number;
		duration: number;
		ease: string;
		staggerChildren: number;
	};
};

// Footer Animation
export type ITransforms = {
	x: number;
	y: number;
	rotationZ: number;
}[];
export type IDisperse = {
	open: (i: any) => {
		x: string;
		y: string;
		rotateZ: number;
		transition: {
			duration: number;
			ease: number[];
		};
		zIndex: number;
	};
	closed: {
		x: number;
		y: number;
		rotateZ: number;
		transition: {
			duration: number;
			ease: number[];
		};
		zIndex: number;
	};
};
