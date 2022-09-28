import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import StarsIcon from '@mui/icons-material/Stars';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import { useState } from 'react';
import Link from 'next/link';


const BottomNav = () => {
    // Navigation State
    const [valueNav, setValueNav] = useState()

    function handleValueNavigation(e, newValue) {
        setValueNav(newValue)
    }
    return ( 
        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 2}} elevation={3}>
            <BottomNavigation
            showLabels
            onChange={handleValueNavigation}
            value={valueNav}
            >
                <BottomNavigationAction label="Inicio" icon={<HomeIcon />} href="/"/>
                <BottomNavigationAction label="Meus ingressos" icon={<LocalActivityIcon />}/>
                <BottomNavigationAction label="Carrinho" icon={<ShoppingCartIcon />}/>
            </BottomNavigation>
        </Paper>
     );
}
 
export default BottomNav;