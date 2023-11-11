import styled from "styled-components";
import {auth, provider} from '../fire';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from "../features/user/userSlice";



import Icon from './logo.svg'
import homeIcon from './home-icon.svg'
import search from './search-icon.svg'
import watch from './watchlist-icon.svg'
import originals from './original-icon.svg'
import movie from './movie-icon.svg'
import series from './series-icon.svg'

import { useEffect } from "react";




const Header = (props)=>{

    const dispatch = useDispatch();
    const history = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);


    const handleAuth = ()=> {
        if (!userName) {

            auth
            .signInWithPopup(provider)
            .then((result) => {
                setUser(result.user)
                console.log(result.user);
            })
            .catch((error) =>{
                alert(error.message);
            })
        } else if (userName){
            auth.signOut().then(() =>{
                dispatch(setSignOutState())
                history('/')
            }).catch((error) => alert(error.message))
        }

    };

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };

    useEffect(()=>{
        auth.onAuthStateChanged(async (user) =>{
            if (user) {
                setUser(user);
                history('/home');
            }
        });
    }, [userName]);

    return(
        <Nav>
            <Logo>
                <img src={Icon} alt="Disney +" />
            </Logo>
            {!userName ? <Login onClick={handleAuth}>Login</Login> : 
            <>
                <Navmenu>
                <a href="/home">
                    <img src={homeIcon} alt="homeIcon" />
                    <span> HOME </span>
                </a>
                <a href="/home">
                    <img src={search} alt="homeIcon" />
                    <span>SEARCH</span>
                </a>
                <a href="/home">
                    <img src={watch} alt="homeIcon" />
                    <span>WATCHLIST</span>
                </a>
                <a href="/home">
                    <img src={originals} alt="homeIcon" />
                    <span>ORIGINALS</span>
                </a>
                <a href="/home">
                    <img src={movie} alt="homeIcon" />
                    <span>MOVIES</span>
                </a>
                <a href="/home">
                    <img src={series} alt="homeIcon" />
                    <span>SERIES</span>
                </a>
            </Navmenu>
            <SignOut>
                <UserImg src={userPhoto} alt= {userName}/>
                <DropDown>
                    <span onClick={handleAuth}>Sign out</span>
                </DropDown>
            </SignOut>
            </>
            }
            
            {/* <Login onClick={handleAuth}>LOGIN</Login> */}
        </Nav>
    );
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`;

const Logo = styled.a`
    padding: 0px;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;

    img {
        display: block;
        width: 100%;
    }
`;
const Navmenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    margin: 0;
    padding: 0;
    justify-content: flex-end;
    position: relative;
    margin-left: 25px;
    margin-right: auto;

    a{
        display: flex;
        align-items: center;
        padding: 0 12px;

        img{
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        }
        span{
            color: rgb(249, 249, 249);
            font-size: 14px;
            letter-spacing: 1.42px;
            line-height: 1px;
            padding: 2px 0px;
            white-space: nowrap;
            position: relative;


            &:before{
                background-color: rgb(249, 249, 249);
                border-radius: 0 0 4px 4px;
                content: '';
                height: 2px;
                left: 0;
                opacity: 0;
                position: absolute;
                bottom: -6.5px;
                right: 0;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
                visibility: hidden;
                width: auto;
            }
        }
        &:hover{
            span:before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }import Login from './Login';

        }

    }

    @media (max-width: 768px){
        display: none;
    }
`;

const Login = styled.a`
    background-color: rgba(0,0,0,.6);
    letter-spacing: 1.4px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    padding: 8px 16px;
    transition: .8s ease-out;
    cursor: pointer;

    &: hover{
        background-color: white;
        color: rgba(0,0,0,1);
        border-color: transparent;
        
    }
`;
const UserImg = styled.img`
    heigth: 100%;
    border-radius: 50%;
    width: 100%
`;
const DropDown = styled.div`
    /* visibility: hidden; */
    position: absolute;
    top: 48px;
    right: 0px;
    background: rgb(19,19,19);
    border: 1px solid rgb(151, 151, 151, 0.34);
    border-radius: 4px;
    letter-spacing: 3px;
    padding: 10px;
    font-size: 14px;
    box-shadow: rgb:(0 0 0 / 50%) 0px 0px 18px 0px;
    width: 100px;
    opacity: 0;
`;

const SignOut = styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    /* align-items: center; */
    justify-content: center;

    &:hover {
        ${DropDown}{
            opacity: 1;
            transition-duration: 1s;
        }
    }    
`;


export default Header;