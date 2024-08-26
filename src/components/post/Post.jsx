import './post.css'

const Post = () => {
  return (
    <div className='post'>
        <img  className = 'postimg' src="https://th.bing.com/th/id/OIP.R-Hr6uLivaFRTl0-_5HtQgHaEo?rs=1&pid=ImgDetMain" alt="" />
        <div className="postinfo">
            <div className="postcats">
                <span className="postcat">Music</span>

                <span className="postcat">Life</span>
            </div>
            <span className="posttitle">
                Lorem ipsum dolor sit
            </span>
            <hr/>
            <span className="postdate">1 hours ago</span>
        </div>
        <p className='postdesc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quo, pariatur aspernatur, asperiores rem saepe molestias non, voluptas architecto debitis commodi. Blanditiis dolorem consequatur minus in ipsa iusto earum vitae?
        Mollitia quidem, omnis numquam consequuntur dolores quos aspernatur? Accusamus, voluptatibus quos? Nisi dolorum, nesciunt, qui accusamus maiores repudiandae necessitatibus in ipsa nostrum illum fugiat veniam. Voluptate earum repellat minima sit.</p>
    </div>
  )
}

export default Post