// import User from './User'
import Header from './Header'
import Employee from './Employee';
import EmployeeWithFunction from './EmployeeWithFunction';
import Company from './Company';
import ES6 from './ES6-features';
import { SayHi } from './ModuleDemo';
import { SayHello as S } from './ModuleDemo';
import * as me from './ModuleDemo'
import GreetDefaultNewName from './ModuleDemo';
import ToDo from './ToDo';
import User from './components/User';
import Article from './components/Article';
import ArticleSingle from './components/ArticleSingle';
import Counter from './components/Counter';
import Parent from './components/Parent';
import ParentData from './components/ParentData';
import UpdateArticle from './components/UpdateArticles';

function App() {
  const age=20;
  var scores=[10,20,30,40];
  function add(){
    console.log("I am add function inside App Component")
  }
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

      {/* <h1>Module Exports</h1>
      <SayHi/>
      <S/>
      <me.SayHi/>
      <me.SayHello/>
      <GreetDefaultNewName/> */}

      {/* <Employee company="Careerx" scores={[1,2,3,4]}/> */}
      {/* <Employee company="Careerx" scores={scores} add={add}/>
      <ToDo/> */}

      {/* <User/> */}

      {/* <ArticleSingle/>
      <Article/> */}

      {/* <Counter/> */}

      {/* <Parent/> */}

      {/* <ParentData/> */}

      {/* <ArticleSingle/> */}
      <UpdateArticle/>
    </div>
  );
}

export default App;
