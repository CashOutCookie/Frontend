import React from 'react';
import Lottie from 'react-lottie';

function Animation({ json, height, width }) {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: json,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return(
        <div>
            <Lottie isClickToPauseDisabled={true} options={defaultOptions} height={height} width={width} />
        </div>
    )
}

export default Animation