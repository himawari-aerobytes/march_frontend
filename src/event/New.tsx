import React from 'react';
import {Button, Form} from 'react-bootstrap';
import axios from 'axios';
import {propTypes} from 'react-bootstrap/esm/Image';
import {useState} from 'react';
import {isForInStatement} from 'typescript'
import "../App.css";


const today: Date = new Date();

const dateToString = (date: Date) => {
    return date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
}

const New: React.FC = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [note, setNote] = useState("");
    const [owner, setOwner] = useState("");
    const [start, setStart] = useState(dateToString(today));
    const [end, setEnd] = useState(dateToString(today));
    const [response, setResponse] = useState<any>("");
    const [responseError, setResponseError] = useState<boolean>(false);

    const create = (name: string, location: string, note: string, owner: string, start: Date | string, end: Date | string) => {

        axios
            .post('http://localhost:3000/v1/events/', {
                    "name": name,
                    "location": location,
                    "note": note,
                    "owner": owner,
                    "start": start,
                    "end": end
                }, {withCredentials: true}
            )
            .then(res => {
                console.log(res)
                setResponse(res);
            }).catch(err => {
            setResponse(err);
            setResponseError(true);
        })


    }
    return (
        <div className="App">
            <div>
                <p className='m-2'>イベント作成</p>

                <Form onSubmit={(e) => {
                    e.preventDefault();
                    create(name, location, note, owner, start, end);
                }} className="w-70">
                    <Form.Group>
                        <Form.Label className="text-left w-100">
                            名前
                            <Form.Control value={name} onChange={(res) => {
                                setName(res.target.value)
                            }}/>
                        </Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="text-left w-100">
                            場所
                            <Form.Control value={location} onChange={(res) => {
                                setLocation(res.target.value)
                            }}/>
                        </Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="text-left w-100">
                            開始
                            <Form.Control type="datetime-local" value={start} onChange={(res) => {
                                setStart(res.target.value)
                            }}/>
                        </Form.Label>
                        <Form.Label className="text-left w-100">
                            終了
                            <Form.Control type="datetime-local" value={end} onChange={(res) => {
                                setEnd(res.target.value)
                            }}/>
                        </Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="text-left w-100">
                            <p>メモ</p>
                            <textarea className="event-new-textarea" value={note} onChange={(res) => {
                                setNote(res.target.value)
                            }}/>
                        </Form.Label>
                    </Form.Group>


                    <Button type="submit">登録</Button>

                </Form>

                <p className='text-danger m-2'>{responseError ? "登録に失敗しました" : ""}</p>
            </div>


        </div>
    );


}

export default New;
