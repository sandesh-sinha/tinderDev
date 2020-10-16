import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/Forum';
import './Header.css';
import IconButton from '@material-ui/core/IconButton';
import {Link, useHistory} from 'react-router-dom';
import ArrowBackTosIcon from '@material-ui/icons/ArrowBackIos'

function Header({backButton}) {
    const history = useHistory();
    return (
        <div className='header'>
            { backButton ? (
                <IconButton onClick={ () => history.replace(backButton)}>
                        <ArrowBackTosIcon className='header__icon' fontSize='large' />
                </IconButton>
            ) : (
            <IconButton>
                <PersonIcon className='header__icon'  fontSize='large'/>
            </IconButton> 
            )}    
            <Link to='/'>
                <img src='https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png' alt='tinderlogo'  
                    className='header__logo'
                />
            </Link>
            <Link to='./chat'>
                <IconButton>
                    <MessageIcon className='header__icon'  fontSize='large'/>
                </IconButton>
            </Link>
        </div>
    )
}

export default Header; 