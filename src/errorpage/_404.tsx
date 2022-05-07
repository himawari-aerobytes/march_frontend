import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

export const _404: React.FC =()=>{

    return (
        <>
            <h1 className="mt-5 m-2">ページが見つかりません</h1>
            <p>アドレスを確認してください</p>
            <Link to="/portal">Portalに戻る</Link>
            {console.error("404 NOT FOUND")}
       </>

    )
}
