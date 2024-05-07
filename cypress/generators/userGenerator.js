export const getFakeLoginResponse = () => {
  return {
    ...getCommonFields(),
    token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOlt7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifSx7ImF1dGhvcml0eSI6IlJPTEVfQ0xJRU5UIn1dLCJpYXQiOjE3MTQ5OTQ3NDEsImV4cCI6MTcxNDk5NTA0MX0.qurVtYoxIxegwDgEvydp7O5WzBLdxi1Vky0tsmTnwx0'
  }
 
}

export const getRandomUser = () => {
  return {
    ...getCommonFields(),
    password: generateRandomString(8)
  }
  
}

const getCommonFields = () => {
  return {
    username: generateRandomString(8),
    firstName: generateRandomString(8),
    lastName: generateRandomString(8),
    email: `${generateRandomString(8)}@ergo.com`,
    roles: ['ROLE_ADMIN','ROLE_CLIENT']
  }
}

const generateRandomString = (length) => {
    return Array(length)
        .fill(0)
        .map(() => Math.random().toString(36).charAt(2)).join('');
}
