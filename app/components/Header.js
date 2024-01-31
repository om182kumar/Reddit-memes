

import { AppBar, Toolbar } from '@mui/material';
import RedditIcon from '@mui/icons-material/Reddit';
const Header = () => {

    //const logo = 'https://1000logos.net/wp-content/uploads/2017/05/Reddit-logo.jpg';

    return (
        <AppBar color="action" position='static'>
            <Toolbar>
                <RedditIcon style={{ width: 100 }}/>
                {/* <img src={logo} alt="logo" style={{ width: 100 }} /> */}
                <h2>Top Memes!!!</h2>
            </Toolbar>
        </AppBar>
    )
}

export default Header;