import { useState } from "react"
import { IUser } from "../../typescript/type"

import { generateMockData } from "../../utils/utils"

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState<IUser[]>(() => generateMockData(5))

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-semibold text-gray-400">Suggestion for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {suggestions.map((profile) => (
        <div className="flex item-center justify-between mt-4" key={profile.id}>
          <img src={"https://lh3.googleusercontent.com/a-/AOh14GhWXn1ZsR3e3AJXNj1_ZMtz2jOlaD1FXC1r6fHl=s96-c"} className="w-10 h-10 rounded-full border 
            p-Profile" alt="profile pic" />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">New to instagram</h3>
          </div>
          <button className="text-blue-400 text-xs font-semibold">
            Follow
          </button>

        </div>
      ))}

    </div>
  )
}

export default Suggestions
