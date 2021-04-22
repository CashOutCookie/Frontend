import React from 'react'
import Lottie from 'react-lottie'


function Animation({
    name, size
}) {
    const animationDetails = {
        loop: true,
        autoplay: true,
        animationData: name,
        resizeMode: 'cover',
        rendererSettings: {
            preserveAspectRatio: "xMidYMid meet",
            margin: 0,
        },
    };
    return(
        <Lottie options={animationDetails} height={size} width={size} isClickToPauseDisabled={true} />
    )
}

export default Animation