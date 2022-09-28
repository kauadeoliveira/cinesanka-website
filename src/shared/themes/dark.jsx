import { createTheme } from "@mui/material"


const temas = (mode) => ({
    palette: {
        mode, 
        ...(mode === 'light')
        ? {
            primary: {
                main: '#2bff00'
            }
        }
        : {
            primary: {
                main: '#FF0002'
            }
        }
    }
})




// const darkTheme = createTheme({
//     palette: {
//         mode: 'dark'
//     }
// })


const darkTheme = createTheme(temas('dark'))
export default darkTheme