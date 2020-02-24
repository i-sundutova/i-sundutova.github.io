import React from 'react';


const NotFound = (props) => {
    return (
        <div className="page" id="pageNotFound">
            <h1>{props.dictionary.message}</h1>
        </div>
    )
}

export default NotFound;