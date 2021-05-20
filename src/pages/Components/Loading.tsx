import React from 'react'
import Animation from '../Components/Animations'
import Loading from '../../animations/loading.json'

const LoadingAnimation = () => {
    return(
        <div style={{ display: 'flex', alignItems: 'flex-start', marginLeft: "calc(40px + 2.2vw)", marginTop: "50px"}}>
            <Animation json={Loading} height="calc(18px + 8vw)" width="calc(18px + 8vw)" />
        </div>
    )
}

export { LoadingAnimation }