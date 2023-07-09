import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
  // pulling the playlists
  const [{playlists},dispatch] = useDataLayerValue();
  console.log('hi5',playlists);
  return (
    <div className='sidebar'>
        <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" className='side_logo' alt="" />
        <SidebarOption  title="Home" Icon={HomeIcon}/>
        <SidebarOption title="Search" Icon={SearchIcon}/>
        <SidebarOption title="Your Library" Icon={LibraryMusicIcon}/>
        <br />
        <strong className='sidebar_title'> Playlists </strong>
        <hr />
        {playlists?.items?.map((playlist) => (
          <SidebarOption title={playlist.name} />
        ))}
    </div>
  )
}

export default Sidebar