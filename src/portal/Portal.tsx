import React from 'react';
import axios from 'axios';
import {Col, Row} from "react-bootstrap";
import {useContext} from "react";
import '../App.css';
import {useNavigate} from "react-router-dom";

const ITEM_CLASSNAME="portal-item m-2 border border-2 border-primary";

const Portal : React.FC = ()=>{
    const navigate = useNavigate();
    return(
        <>
            <div className="m-1 border-bottom">
                <h1>Portal</h1>

            </div>
            <Row>
                <Col>
                    <div className={ITEM_CLASSNAME} onClick={()=>navigate("/portal/events")}>
                        <p className="text-center">イベント管理</p>
                        <p className="text-muted">各種イベントの登録･確認･追加ができます</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={ITEM_CLASSNAME} onClick={()=>navigate("/members")}>
                        <p>メンバー管理</p>
                        <p className="text-muted">メンバーの登録･確認･削除ができます</p>
                    </div>
                </Col>
                <Col>
                    <div className={ITEM_CLASSNAME} onClick={()=>navigate("/meetings")}>
                        <p>面談管理</p>
                        <p className="text-muted">面談の記録･確認･削除ができます</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={ITEM_CLASSNAME} onClick={()=>navigate("/portal")} >
                        <p className="text-muted">議事録</p>
                        <p className="text-muted">現在、機能を提供していません</p>
                    </div>
                </Col>
            </Row>


        </>
    )

}
export default Portal;
