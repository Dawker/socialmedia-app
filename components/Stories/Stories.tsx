import faker from 'faker';
import { useEffect, useState } from 'react';

import { IStories } from '../../typescript/components/stories.type';
import Story from '../Story/Story';

const Stories = () => {
  const [stories, setStories] = useState<IStories[]>([]);

  useEffect(() => {
    const fakeStories = [...Array(20)].map((_, i) => {
      return {
        id: i,
        name: faker.name.findName(),
        image: faker.image.avatar(),
      }
    })
    setStories(fakeStories);

  }, [])

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border rounded-sm 
      overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {stories.map(({ id, name, image }) => (
        <Story key={id} name={name} image={image} />
      ))}

    </div>
  )
}

export default Stories
