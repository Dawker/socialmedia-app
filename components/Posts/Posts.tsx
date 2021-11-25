import { useEffect, useState } from "react";

import Post from "../Post/Post"
import { generateMockData } from "../../utils/utils";
import { IPost } from "../../typescript/components/post.types";

const Posts = () => {
  const [posts, setPosts] = useState(generateMockData(5));

  return (
    <div>
      {posts.map((post: IPost) => (
        <Post key={post.id} caption={post.caption} profilePic={'https://lh3.googleusercontent.com/a-/AOh14Gil8NhiQUgZneEnrsh2bretXazhrEpKmLT9Fgpu=s96-c'} image={'https://lh3.googleusercontent.com/a-/AOh14Gil8NhiQUgZneEnrsh2bretXazhrEpKmLT9Fgpu=s96-c'} username={post.username} />
      ))}
    </div>
  )
}

export default Posts
