import React from 'react';


const NotFound = (props) => {
    return (
        <div className="page" id="pageNotFound">
            <div className="notFoundContainer">
                <p className="errorCode">404</p>
                <p className="errorMessage">{props.dictionary.pageName}</p>
            </div>
        </div>
    )
}

export default NotFound;