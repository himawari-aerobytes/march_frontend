import React, {useContext, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import {useState} from 'react';
import {AuthContext} from "../App";
import {signIn} from "./auth";
import Cookies from "js-cookie";



const Login:React.FC=()=> {

  //state type here
  const [email,setEmail]= useState("");
  const [password,setPassword] = useState("");
  const [responseError,setResponseError] = useState<boolean>(false);
  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false);

  //context type here
  const {isLogin,setIsLogin} = useContext(AuthContext);
  const {currentUser,setCurrentUser} = useContext(AuthContext);

  const navigate = useNavigate();


  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=> {
      e.preventDefault();
      try {
          const res = await signIn({"email":email,"password":password})
          console.log(res)

          if (res.status === 200) {
              // ログインに成功した場合はCookieに各値を格納
              Cookies.set("_access_token", res.headers["access-token"])
              Cookies.set("_client", res.headers["client"])
              Cookies.set("_uid", res.headers["uid"])

              setIsLogin(true)
              setCurrentUser(res.data.data)

              navigate("/portal")

              console.log("Signed in successfully!")
          } else {
              setAlertMessageOpen(true)
          }
      } catch (err) {
          console.log(err)
          setAlertMessageOpen(true)
      }
  }

  // useEffect(()=>{
  //   if(isLogin){
  //     navigate("/portal");
  //   }

  // },[isLogin]);

  return (
    <div className="App">
      <div>
        <h1 className='m-2'>利用者ログイン</h1>
     
      <Form onSubmit={handleSubmit} className="w-70">
        <Form.Group>
        <Form.Label className="text-left w-100">
          Email
          <Form.Control className="form-shadow" type="email" value={email} onChange={(res)=>{setEmail(res.target.value)}} />
        </Form.Label>
        </Form.Group>
        <Form.Group >
        <Form.Label className="text-left w-100">
          Password
          <Form.Control className="form-shadow" type="password" value={password} onChange={(res)=>{setPassword(res.target.value)}}/>
        </Form.Label>
        </Form.Group>
        
        <Button type="submit" >login</Button>

      </Form>

        <p className='text-danger m-2'>{responseError ? "ログインに失敗しました" :""}</p>
      </div>
    </div>
  );


}

export default Login;
