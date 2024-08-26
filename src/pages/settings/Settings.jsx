import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Settings = () => {
  return (
    <div className='settings'>
        <div className="settingswrapper">
           <div className="settingstitle">
            <span className="settingsupdatetitle">Update your account</span>
            <span className="settingsdeletetitle">Delete account</span>
            </div>
            <form  className="settingsform">
                <label >Profile Picture </label>
                <div className="settingsPP">
                    <img src="https://th.bing.com/th/id/R.8ab6ba66fd3ace2ccf52de8c8d8463ca?rik=vuy%2bemJ1EEJYRg&pid=ImgRaw&r=" alt="" />
                    <label htmlFor="fileinput">
                    <FontAwesomeIcon className='settingsPPicon' icon={faUser} />
                    </label>
                    <input type="file"  id='fileinput' style={{display:'none'}}/>
                </div>
                <label >Username</label>
                <input type="text" placeholder='Khalid' />
                <label >Email</label>
                <input type="email" placeholder='khalid@gmail.com' />
                <label >Password</label>
                <input type="password"  />
                <button className="settingssubmit">Update</button>
            </form>
           
        </div>
        <Sidebar />
    </div>
  )
}

export default Settings