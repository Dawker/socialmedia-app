import { useState } from 'react';

import { IStories } from '../../typescript/components/stories.type';
import { generateMockData } from '../../utils/utils';
import Story from '../Story/Story';

const Stories = () => {
  const [stories, setStories] = useState<IStories[]>(() => generateMockData(20));

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border rounded-sm 
      overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {stories.map(({ id, username, profilePic }) => (
        <Story key={id} username={username} profilePic={'https://lh3.googleusercontent.com/a-/AOh14GhhnmTLkOt8vjOjq81GluGGj6LO7bVcHl4XieTn=s96-c'} />
      ))}

    </div>
  )
}

export default Stories
