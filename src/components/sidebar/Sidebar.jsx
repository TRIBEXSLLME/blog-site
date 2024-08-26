import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faXTwitter,faPinterestP , faSquareInstagram } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebaritem">
            <span className="sidebartitle">ABOUT ME</span>
            <img src="https://th.bing.com/th/id/R.8ab6ba66fd3ace2ccf52de8c8d8463ca?rik=vuy%2bemJ1EEJYRg&pid=ImgRaw&r=0" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quos rerum praesentium amet rem dolorum neque odit iste perferendis in! </p>
        </div>
        <div className="sidebaritem">
        <span className="sidebartitle">CATERGORIES</span>
        <ul className='sidebarlist'>
            <li className="sidebarlistitem"> Life </li>
            <li className="sidebarlistitem"> Music </li>
            <li className="sidebarlistitem"> Style </li>
            <li className="sidebarlistitem"> Sport </li>
            <li className="sidebarlistitem"> Tech </li>
            <li className="sidebarlistitem"> Cinema </li>
        </ul>
        </div>
        <div className="sidebaritem">
        <span className="sidebartitle">FOLLOW US</span>
        <div className="siderbarsocial">
        <FontAwesomeIcon className='sidebaricon' icon={faFacebook} />
        <FontAwesomeIcon className='sidebaricon' icon={faXTwitter} />
        <FontAwesomeIcon  className='sidebaricon'icon={faPinterestP} />
        <FontAwesomeIcon className='sidebaricon' icon={faSquareInstagram} />
        </div>
        </div>
    </div>
  )
}

export default Sidebar