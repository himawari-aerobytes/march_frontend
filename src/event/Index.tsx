import React, {useContext} from 'react';
import axios from 'axios';
import "../App.css";

export const Index: React.FC = () => {
    const createRow = (allData: any) => {
        return (
            <>
                <h1>event index</h1>
                <tr>
                    {}
                </tr>
            </>
        )

    }
    return (
        <>
            <h1>event index</h1>
            <table>
            </table>
        </>
    )
}

