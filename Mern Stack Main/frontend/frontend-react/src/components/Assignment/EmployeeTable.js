function EmployeeTable(props) {
    return (
        <div>
            <table className="table table-primary">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Salary</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.empInfo.name}</td>
                        <td>{props.empInfo.age}</td>
                        <td>{props.empInfo.salary}</td>
                        <td>{props.empInfo.address}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeTable;