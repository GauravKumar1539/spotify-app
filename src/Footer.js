import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PauseCircleOutlinedIcon from '@mui/icons-material/PauseCircleOutlined';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import { Grid , Slider} from '@mui/material';
import { useDataLayerValue } from './DataLayer';

function Footer() {
  const [{ token, item, playing }, dispatch] = useDataLayerValue();
  console.log("aabra",item);
  return (
    <div className='footer'>
      <div className='footer_left'>
      <img
          className="footer__albumLogo"
          src='https://www.musicroom.com/product/image/large/dam299764_0.jpg'
          alt=''
        />
        <div className='footer_songInfo'>
          <h4>Photograph </h4>
          <p>Ed Sheeran</p>
        </div>
      </div>
      <div className='footer_middle'>
        <ShuffleIcon className='footer_green'/>
        <SkipPreviousIcon className='footer_icon'/>
        <PlayCircleOutlineIcon fontSize='large' className='footer_icon'/>
        <SkipNextIcon className='footer_icon'/>
        <RepeatIcon className='footer_green'/>
      </div>
      <div className='footer_right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer