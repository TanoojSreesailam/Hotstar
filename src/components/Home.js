/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components'
import ImgSlide from './ImgSlide';
import Viewers from './Viewers';
import Recommends from './Recommends';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trend from './Trend';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import db from '../fire';
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';

const Home = (props) => {
    const dispatch = useDispatch();
    const username = useSelector(selectUserName);
    let recommend = [];
    let newDisney = [];
    let original = [];
    let trending = [];

    useEffect(()=>{
        db.collection('movies').onSnapshot((snapshot) =>{
            snapshot.docs.map((doc) => {
                console.log(recommend)
                switch (doc.data().type) {
                    case 'recommend':
                        recommend = [...recommend, {id: doc.id, ...doc.data()}]
                        break;
                    case 'new':
                        newDisney = [...newDisney, {id: doc.id, ...doc.data()}]
                        break;
                    case 'trending':    
                        trending = [...trending, {id: doc.id, ...doc.data()}]
                        break;
                    case 'original':
                        original = [...original, {id: doc.id, ...doc.data()}]
                        break;
                    default:
                }
            });
            dispatch(
                setMovies({
                recommend: recommend,
                newDisney: newDisney,
                trending: trending,
                original: original,
            })
            );
        })
    }, [username]);


    return(
        <Container>
            <ImgSlide />
            <Viewers/>
            <Recommends/>
            <NewDisney/>
            <Originals/>
            <Trend/>
        </Container>
    )
}

const Container = styled.main`
    position: relative;
    height: 100%;
    min-height: calc(100vh -250px);
    display: block;
    overflow-x: hidden;
    top: 76px;
    padding: 0 calc(3.5vw + 5px);

    &:after{
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: '';
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
    
`;


export default Home;