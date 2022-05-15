import React, {useContext} from 'react';
import axios from 'axios';
import client from "../client/client"

export const Index:React.FC=()=>{
    client.get("member")
    return <></>

}

