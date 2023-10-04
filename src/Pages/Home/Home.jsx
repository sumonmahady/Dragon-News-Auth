import React from 'react';
import Header from '../../Shared/Header/Header';
import Navbar from '../../Shared/Navbar/Navbar';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../../Shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews/BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';


const Home = () => {
    const news = useLoaderData()
    
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            
           <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>

           <div> <LeftSideNav></LeftSideNav> </div>
            <div className='text-2xl md:col-span-2 '>
                {
                    news.map(aNews => <NewsCard
                    key={aNews._id}
                    news={aNews}
                    ></NewsCard> )
                }
            </div>
            <div > <RightSideNav></RightSideNav> </div>

           </div>
        </div>
    );
};

export default Home;