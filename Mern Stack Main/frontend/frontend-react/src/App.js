import User from './User'
import Header from './Header'
import Employee from './Employee';
import EmployeeWithFunction from './EmployeeWithFunction';
import Company from './Company';
function App() {
  const age=20;
  return (
    <div className="App">
      <h1>My first react app is frontend-react app</h1>
      {/* <Header/>
      <User name="Tehith"/>
      <h1>My first react app is frontend-react app</h1>
      <h1>My age is {age}</h1>
      <Employee/>
       */}
      <EmployeeWithFunction name="careerx"/>
      <Company company="careerx"/>
    </div>
  );
}

export default App;
