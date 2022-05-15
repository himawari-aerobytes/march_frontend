import { configure } from '@testing-library/react';
import React, { useEffect } from 'react';
import {useState} from 'react';
import { Tab, Table } from 'react-bootstrap';


import client from '../../../client/client';


export const Index : React.FC = ()=>{
    const [schoolData,setSchoolData] = useState<any>(null);
    const createSchoolList =(id:string,name:string)=>{
        return (
            <>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
            </tr>
            </>
        )
        


    }

    const schoolLists = ()=>{
        return (
            <Table>
                <thead>
                    <th>学校ID</th>
                    <th>学校名</th>
                </thead>
                <tbody>
                    {()=>{
                        schoolData.map()
                    }}
                </tbody>


            </Table>
        )
       
        schoolData

    }
    
    useEffect(()=>{
        client.get("schools").then((res)=>{
            setSchoolData(res?.data?.data);
        });
        
    },[]);

    if(!schoolData) return null;

    return <><p>hello!</p></>
};

export default Index;