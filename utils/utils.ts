import faker from 'faker';


function generateMockData(howMany: number): any[] {
  let mockData = [...Array(howMany)].map((_, i) => {
    return {
      id: i,
      username: faker.name.findName(),
      userImage: faker.image.avatar(),
      image: faker.image.avatar(),
      caption: "ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  })

  return mockData;
}

export {
  generateMockData
}