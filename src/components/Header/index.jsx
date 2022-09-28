/* eslint-disable react/no-unescaped-entities */
import { Button, FormControl, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, TextField } from "@mui/material";
import { Container, Box } from "@mui/system";
import { DinamicSearchBar, HeaderContainer } from "./styles";
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";




const Header = ({ size }) => {
    const theme = useTheme()
    const [animation, setAnimation] = useState(false)


    function openSearchBar() {
        setAnimation(true)
    }

    function closeSearchBar() {
        setAnimation(false)
    }
    if(size === 'large'){
        return ( 
        <>
        <HeaderContainer style={{color: theme.palette.primary.main}}>
            <h1>Cine Sanka's</h1>
            <Avatar sx={{width: '30px', height: '30px'}}/>
        </HeaderContainer>
            <div style={{width: '400px', margin: '5px auto'}}>
                <FormControl variant="standard" size="small" fullWidth >
                    <OutlinedInput
                    placeholder="Search"
                    startAdornment={
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    }
                    />
                </FormControl>
            </div>
        </>
        );
    }
    else{
        return(
            <HeaderContainer style={{color: theme.palette.primary.main}} size={size}>
                <h1>Cine Sanka's</h1>
                <div style={{display: 'flex', justifyContent: 'space-between', width: '250px'}}>
                    <DinamicSearchBar animation={animation}>
                        <IconButton onClick={openSearchBar}>
                            <SearchIcon />
                        </IconButton>   

                        <FormControl variant="standard" size="small">
                            <OutlinedInput
                            placeholder="Search"
                            startAdornment={
                                <IconButton>
                                <SearchIcon />
                            </IconButton>
                            }
                            endAdornment={
                                <IconButton onClick={closeSearchBar}>
                                    <CloseIcon fontSize="small"/>
                                </IconButton>
                            }
                            />
                        </FormControl>
                    </DinamicSearchBar>
                    <Avatar sx={{width: '30px', height: '30px'}}/>
                </div>
            </HeaderContainer>
        )
    }
}
 
export default Header;