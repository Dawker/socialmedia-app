import { useEffect, useState } from "react";
import faker from 'faker';

import Post from "../Post/Post"

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fakeStories = [...Array(5)].map((_, i) => {
      return {
        id: i,
        username: faker.name.findName(),
        userImage: faker.image.avatar(),
        image: faker.image.avatar(),
        caption: "ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }
    })
    setPosts(fakeStories);

  }, [])
  return (
    <div>

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Posts
