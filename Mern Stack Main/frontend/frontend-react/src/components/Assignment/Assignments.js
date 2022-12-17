import EmployeeFunction from './Functional/EmployeeFunction'
import OptimiseEmployeeFunction from './Functional/OptimiseEmployeeFunction'
import AlternativeEmployeeFunction from './Functional/AlternativeEmployeeFunction';
import EmployeeClass from './Class/EmployeeClass'
import OptimiseEmployeeClass from './Class/OptimiseEmployeeClass'
import AlternativeEmployeeClass from './Class/AlternateEmployeeClass'
function Assignments(){
    return(
        <div>
            <h1>Assignments</h1>
            <EmployeeFunction/>
            <OptimiseEmployeeFunction/>
            <AlternativeEmployeeFunction/>
            <EmployeeClass/>
            <OptimiseEmployeeClass/>
            <AlternativeEmployeeClass/>
        </div>
    )
}

export default Assignments;