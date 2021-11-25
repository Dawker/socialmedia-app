import { signOut, useSession } from 'next-auth/react'
import { IMiniProps } from '../../typescript/components/miniprofile.type';

import { generateMockData } from "../../utils/utils"

const MiniProfile: React.FC<IMiniProps> = ({ username, profilePic }) => {
  const fakeProfile: any = generateMockData(1);

  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img src={profilePic} className="w-16 h-16 rounded-full
        p-Profile" alt="profile pic" />
      <div className="flex-1 mx-4">
        <h2 className="font-semibold">{username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold"
        onClick={() => signOut()}>Sign out</button>
    </div>
  )
}

export default MiniProfile
