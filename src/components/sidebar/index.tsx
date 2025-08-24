import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import TvSeriesIcon from '@mui/icons-material/LiveTv';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Link, useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

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
            }}>
            <Box sx ={{ display: 'flex', gap: 5,
                flexDirection: {
                    xs: 'row',
                    lg: 'column'
                },
                alignItems: {
                    xs: 'center',
                    ls: 'start'
                },
                justifyContent: 'center',
                width: '100%'
            }}>
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Typography variant="h5" component="h1" my={2} fontWeight={400} fontSize={18}> Demo App</Typography>
                </Box>
                <Box sx={{ 
                    py:{ xs: "0px", lg: "16px" },
                    display: 'flex',
                    flexDirection: { xs: 'row', lg: 'column'},
                    gap: 4,
                }}>
                        {navLinks.map((item) => {
                            const isActive = pathname === item.path;
                            return (
                                <Link key={item.name} to={item.path} style={{ textDecoration: 'none' }}>
                                    <Box
                                        sx={{
                                            display: { xs: 'none', md: 'flex' },
                                            alignItems: 'center',
                                            gap: 3,
                                            textDecoration: 'none',
                                            px: 2,
                                            py: 1.2,
                                            borderRadius: 2,
                                            backgroundColor: isActive ? 'rgba(255,255,255,0.08)' : 'transparent',
                                            transition: 'background 0.2s',
                                            cursor: 'pointer',
                                            mb: 1,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 28,
                                                height: 28,
                                                color: isActive ? '#fff' : '#5A698F',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                transition: 'color 0.2s',
                                            }}
                                        >
                                            <item.icon />
                                        </Box>
                                        <Typography
                                            sx={{
                                                color: isActive ? '#fff' : '#5A698F',
                                                fontWeight: isActive ? 700 : 500,
                                                fontSize: isActive ? '1.1rem' : '1rem',
                                                letterSpacing: 0.2,
                                                transition: 'color 0.2s, font-size 0.2s, font-weight 0.2s',
                                            }}
                                        >
                                            {item.name}
                                        </Typography>
                                    </Box>
                                </Link>
                            );
                        })}
                </Box>
            </Box>
    </Box>
  );
}
export default SideBar;