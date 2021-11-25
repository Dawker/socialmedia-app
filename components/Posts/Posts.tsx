import { useEffect, useState } from "react";

import Post from "../Post/Post"
import { IPost } from "../../typescript/components/post.types";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase/clientApp";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const unsubscribe = onSnapshot(query(collection(db, 'posts'), orderBy("timestamp", 'desc')), snapshot => {
      setPosts(snapshot.docs)
    });

    return () => {
      unsubscribe()
    }

  }, [])

  console.log(posts)

  return (
    <div>
      {posts.map((post: any) => (
        <Post
          key={post.id}
          id={post.id}
          caption={post.data().caption}
          profilePic={post.data().profilePic}
          image={post.data().image}
          username={post.data().username} />
      ))}
    </div>

  )
}

export default Posts
