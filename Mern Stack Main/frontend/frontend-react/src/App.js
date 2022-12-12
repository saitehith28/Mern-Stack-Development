import User from './User'
import Header from './Header'
import Employee from './Employee';
import EmployeeWithFunction from './EmployeeWithFunction';
import Company from './Company';
import ES6 from './ES6-features';
import { SayHi } from './ModuleDemo';
import { SayHello as S } from './ModuleDemo';
import * as me from './ModuleDemo'

function App() {
  const age=20;
  return (
    <div className="App">
      {/* <h1>My first react app is frontend-react app</h1>
      <Header/>
      <User name="Tehith"/>
      <h1>My first react app is frontend-react app</h1>
      <h1>My age is {age}</h1>
      <Employee/> */}
      
      {/* <EmployeeWithFunction name="careerx"/>
      <Company company="careerx"/> */}

      {/* <h1>ES6 Features</h1>
      <ES6/> */}

      <h1>Module Exports</h1>
      <SayHi/>
      <S/>
      <me.SayHi/>
      <me.SayHello/>
    </div>
  );
}

export default App;
