import React from 'react'
import './SwipeButtons.css'
import {Replay as ReplayIcon , Close as CloseIcon, StarRate as StarRateIcon , Favorite as FavoriteIcon, FlashOn as FlashOnIcon} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton'
const SwipeButtons = () => {
    return (
        <div className='swipeButtons'>
            <IconButton className='swipeButtons__repeat'>
                <ReplayIcon fontSize ='large' />
            </IconButton>
            <IconButton className='swipeButtons__close'>
                <CloseIcon fontSize ='large' />
            </IconButton>
            <IconButton className='swipeButtons__star'>
                <StarRateIcon fontSize ='large' />
            </IconButton>
            <IconButton className='swipeButtons__right'>
                <FavoriteIcon fontSize ='large' />
            </IconButton>
            <IconButton className='swipeButtons__lightning'>
                <FlashOnIcon fontSize ='large' />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
