import Post from '../post/Post';
import './posts.css'

function Posts() {
    console.log('posts');
    
  return (
    <div className='posts'>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
  )
}

export default Posts