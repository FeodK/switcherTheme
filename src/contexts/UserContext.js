import { createContext } from 'react';

export const UserContext = createContext({
  userName: 'Гость',
  changeUserName: () => {}
});
