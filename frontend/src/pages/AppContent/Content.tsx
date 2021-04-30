import React from 'react';

function Content({ heading, actual }) {
    return(
        <div className="app-content">
            <h1 className="app-heading">{heading}</h1>
            {actual}
        </div>
    )
}

export default Content