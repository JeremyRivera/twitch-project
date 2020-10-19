import React from 'react';
import Header from '../../components/Header';
import Search from '../../components/Search';
import TileContainer from '../../components/Tilecontainer';
import './styles.css'

const Home = props => {
    return (
        <div className='homewrapper'>
            <Header></Header>
            <Search></Search>
            <TileContainer></TileContainer>
        </div>
    );
}

export default Home;
