import React from 'react'
import {Data} from "./App";
const ChildC = () => {
    return (
        <Data.Consumer>
            {
                (username) => (
                    <h1>my name is {username}</h1>
                )
            }
        </Data.Consumer>

    );
};

export default ChildC
