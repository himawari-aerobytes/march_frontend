import { configure } from '@testing-library/react';
import { create } from 'domain';
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
                <td><input name="edit" type="radio"></input></td>
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
                    <th className='transparent'></th>
                    <th>学校ID</th>
                    <th>学校名</th>
                </thead>
                <tbody>
                    {
                        schoolData.map((line:any)=>{
                            return createSchoolList(line.id,line.name);

                        })
                    }
                </tbody>


            </Table>
        )

    }
    
    useEffect(()=>{
        client.get("schools").then((res)=>{
            setSchoolData(res?.data?.data);
        });
        
    },[]);

    if(!schoolData) return null;

    return <>{schoolLists()}</>
};

export default Index;