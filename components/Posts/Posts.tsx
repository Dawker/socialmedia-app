import { useEffect, useState } from "react";

import Post from "../Post/Post"
import { generateMockData } from "../../utils/utils";
import { IPost } from "../../typescript/components/post.types";

const Posts = () => {
  const [posts, setPosts] = useState(generateMockData(5));

  return (
    <div>
      {posts.map((post: IPost) => (
        <Post key={post.id} caption={post.caption} profilePic={post.profilePic} image={post.image} username={post.username} />
      ))}
    </div>
  )
}

export default Posts
