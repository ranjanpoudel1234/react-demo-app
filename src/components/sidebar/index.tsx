import React from 'react';
import HomeIcon from '../home-icon';
import MovieIcon from '../movie-icon';
import TvSeriesIcon from '../series-icon';
import BookmarkIcon from '../bookmark-icon';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';

const navLinks =[
    {name: 'Home', icon: HomeIcon, path: '/'},
    {name: 'Movies',icon: MovieIcon, path: '/movies'},
    {name: 'TV Series',icon: TvSeriesIcon, path: '/tv-series'},
    {name: 'BookMarks',icon: BookmarkIcon, path: '/bookmark'},
]

const SideBar = () => {
    const { pathname } = useLocation();

  return (
    <Box
        sx={{ 
            backgroundColor: '#161D2F',
            padding: 2,
            borderRadius: 2,
            display: 'flex',
            flexDirection: {
                xs: 'row',
                lg: 'column'
            },
            alignItems: 'center',
            justifyContent: 'space-between',
            width:{
                sm: '100%',
                lg: 200
            },
        }}></Box>
  );
}
export default SideBar;