import { generateMockData } from "../../utils/utils"

const MiniProfile = () => {
  const fakeProfile: any = generateMockData(1)

  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img src={"https://lh3.googleusercontent.com/a-/AOh14GhWXn1ZsR3e3AJXNj1_ZMtz2jOlaD1FXC1r6fHl=s96-c"} className="w-16 h-16 rounded-full
        p-Profile" alt="profile pic" />
      <div className="flex-1 mx-4">
        <h2 className="font-semibold">maneaionutt</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold">Sign out</button>
    </div>
  )
}

export default MiniProfile
