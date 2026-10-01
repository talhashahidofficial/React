import { createContext } from "react"

import ChildC from './ChildC';

const Data = createContext();
const username = "Haris Lassan";

const App = () => {
  return (
    <Data.Provider value = {username}>
      <ChildC/>
    </Data.Provider>
  )
}
export {Data};
export default App
