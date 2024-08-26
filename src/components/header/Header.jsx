import './header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="headertitles">
            <span className='headertitlesmall'>React & Node</span>
            <span className='headertitlelarge'>Blog</span>
        </div>
        <img 
        className='headerimage'
        src="https://wallpapertag.com/wallpaper/full/7/b/6/868461-desktop-backgrounds-scenery-1920x1200-720p.jpg" alt="" />
    </div>
  )
}

export default Header