import {
  BookmarkIcon, ChatIcon, DotsHorizontalIcon,
  EmojiHappyIcon, HeartIcon, PaperAirplaneIcon
} from '@heroicons/react/outline'

const Post: React.FC<any> = ({ post }) => {
  const { username, userImage, image, caption } = post;
  return (
    <div className="bg-white my-7 border rounded-sm">
      <div className="flex items-center p-5">
        <img src={userImage} className="rounded-full h-12 w-12 
          object-contain border p-1 mr-3" alt="profile image" />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      <img src={image} className="object-cover w-full" alt="post image" />
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>
      <p className="p-5 truncate">
        <span className="font-semibold">{username} </span>
        {caption}
      </p>
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input className="border-none flex-1 focus:ring-0 outline-none"
          placeholder="Add a comment..." type="text" />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  )
}

export default Post
