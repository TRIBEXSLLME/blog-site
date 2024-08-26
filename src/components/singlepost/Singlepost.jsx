import './singlepost.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare , faTrashCan} from '@fortawesome/free-regular-svg-icons'

const singlepost = () => {
  return (
    <div className='singlepost'>
      <div className="singlepostwrapper">
        <img
        className='singlepostimg'
        src="https://s1.1zoom.me/b5050/637/Scenery_Mountains_Winter_493358_3840x2400.jpg" alt="" />
        <h1 className="singleposttitle">Lorem ipsum dolor sit amet.
          <div className="singlepostedit">
          <FontAwesomeIcon className='singleposticon' icon={faPenToSquare} />
          <FontAwesomeIcon className='singleposticon' icon={faTrashCan} />
          </div>
        </h1>
        <div className="singlepostinfo">
          <span className='singlepostauthor'>Author : <b>Khalid</b></span>
          <span className='singlepostdate'>1 hour ago</span>
        </div>
        <p className='singlepostdesc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, commodi ut. Non tempora nisi, nobis temporibus repellat doloremque molestiae iste, totam voluptate esse accusantium architecto aspernatur consectetur. Earum, cumque tenetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora delectus voluptate recusandae? Eos omnis aspernatur minima odit atque inventore mollitia doloremque voluptatibus a ipsa. Ratione a exercitationem voluptates? Quia, debitis Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae mollitia, laboriosam sunt aspernatur eaque atque quia itaque. Dicta blanditiis nesciunt, soluta nobis doloremque, error tempora ipsum consequatur ab tempore eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vel eum ratione voluptatem iusto dolores ex quo! Natus, dolores! Similique nobis quis harum asperiores laboriosam ea in accusantium nam amet?</p>
      </div>
    </div>
  )
}

export default singlepost