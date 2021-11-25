import faker from 'faker';

import { IUser } from '../typescript/type';

function generateMockData(howMany: number): IUser[] {
  let mockData = [...Array(howMany)].map((_, i) => {
    return {
      id: i,
      username: faker.name.findName(),
      userImage: faker.image.avatar(),
      profilePic: faker.image.avatar(),
      image: faker.image.avatar(),
      caption: "ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  })
  return mockData;
}

export {
  generateMockData
}