import { LoginResponse } from "../types/login"
import { Roles } from "../types/roles"
import { User } from "../types/user"

export const getFakeToken = () => {
  return {
    token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVTlVOIiwiYXV0aCI6W3siYXV0aG9yaXR5IjoiUk9MRV9DTElFTlQifV0sImlhdCI6MTcxNTA3MjMyMCwiZXhwIjoxNzE1MDcyNjIwfQ.yYTsxpORqECsxf1SSNH2yV4zn34eM9qiEqJmbwew0tc'
  }
}

export const getFakeLoginResponse = (): LoginResponse => {
  return {
    ...getCommonFields(),
    ...getFakeToken()
  }
 
}

export const getRandomUser = (): User => {
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
    roles: [ Roles.ROLE_ADMIN, Roles.ROLE_CLIENT ]
  }
}

const generateRandomString = (length: number) => {
    return Array(length)
        .fill(0)
        .map(() => Math.random().toString(36).charAt(2)).join('');
}
