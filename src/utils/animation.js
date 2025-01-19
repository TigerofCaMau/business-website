export const containerVariants = (delay = 0) => ({
    "offscreen": {
        opacity: 0,
        y: 30
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 2,
            delay: 0.3
        }
    }
});

export const detailVariants = {
    initial: { opacity: 0, x: -100 },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'easeIn',
            duration: 1,
            delay: 0.25,
        },
    },
};

export const featureVariants = {
    offscreen: {
        scale: 0.5,
    },
    onscreen: {
        scale: 1,
        transition: {
            type: 'spring',
            duration: 5,
        },
    },
};

export const getVariants = (delay) => ({
    initial: { y: "18rem" },
    animate: {
        y: "0rem",
        transition: {
            type: "spring",
            damping: 25,
            duration: 2.5,
            delay,
        },
    },
});


export const tagVariants = {
    "offscreen": {
        opacity: 0,
        y: 10
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 2
        }
    }
};

export const titleVariants = {
    "offscreen": {
        opacity: 0,
        y: 30
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 2.2
        }
    }
};

export const descriptionVariants = {
    "offscreen": {
        opacity: 0,
        y: 20
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 2.6,
            delay: 0.2
        }
    }
};