import React, {createContext, useContext, useEffect} from 'react';
import './App.css';
import {useState} from 'react';
import Login from './auth/Login';
import Portal from "./portal/Portal";
import {User} from "./interfaces";
import {getCurrentUser} from "./auth/auth";
import {BrowserRouter as Router, Route, Routes, Navigate, BrowserRouter} from "react-router-dom";
import {Index as Event} from "./event/Index";
import {Index as SchoolIndex} from "./common/tokan/school/Index";
import {_404} from './errorpage/_404';

// グローバルで扱う変数・関数
export const AuthContext = createContext({} as {
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    isLogin: boolean
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
    currentUser: User | undefined
    setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>
})


const App: React.FC = () => {
    const [page, setPage] = useState("Login");

    const [loading, setLoading] = useState<boolean>(true);
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [currentUser, setCurrentUser] = useState<User | undefined>();


    // ユーザーが認証済みかどうかでルーティングを決定
    // 未認証だった場合は「/signin」ページに促す
    const Private = ({children}: { children: React.ReactElement }) => {
        if (!loading) {
            if (isLogin) {
                return children
            } else {
                return <Navigate to="/portal/login"/>
            }
        } else {
            return <></>
        }
    }

    // 確認できた場合はそのユーザーの情報を取得
    const handleGetCurrentUser = async () => {
        try {
            const res = await getCurrentUser()
            console.warn(res?.data.isLogin);

            if (res?.data.isLogin === true) {
                setIsLogin(true)
                setCurrentUser(res?.data.data)

                console.log(res?.data.data)
            } else {
                console.log("No current user")
            }

            setLoading(false);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        handleGetCurrentUser();
    }, [setCurrentUser])

    return (
        <div className="App">
            <AuthContext.Provider
                value={{loading, setLoading, isLogin, setIsLogin, currentUser, setCurrentUser}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Navigate to="/portal"/>}/>
                        <Route path="/portal" element={<Private><Portal/></Private>}/>
                        <Route path="portal">
                            <Route path="login" element={<Login/>}/>
                            <Route path="events" element={<Private><Event/></Private>}/>
                            <Route path="members" element={<Private><Portal/></Private>}/>
                            <Route path="meetings" element={<Private><Portal/></Private>}/>
                            <Route path="schools" element={<Private><SchoolIndex/></Private>}/>
                        </Route>
                        <Route path="*" element={<_404/>}/>


                    </Routes>
                </BrowserRouter>
            </AuthContext.Provider>
        </div>
    );
}


export default App;
