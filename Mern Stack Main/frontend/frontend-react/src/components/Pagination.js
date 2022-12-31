import {useState} from "react";
import CustomPagination from "./CustomPagination";
var usersdata=[
    {
        "id":1,
        "name":"test1"
    },
    {
        "id":2,
        "name":"test2"
    },
    {
        "id":3,
        "name":"test3"
    },
    {
        "id":4,
        "name":"test4"
    },
    {
        "id":5,
        "name":"test5"
    },
    {
        "id":6,
        "name":"test6"
    },
    {
        "id":7,
        "name":"test7"
    },
    {
        "id":8,
        "name":"test8"
    },
    {
        "id":9,
        "name":"test9"
    },
    {
        "id":10,
        "name":"test10"
    }
]
function Pagination(){
    const [users,setUsers]=useState(usersdata);
    const [currentPage,setCurrentPage]=useState(1);
    const [usersPerPage,setUsersPerPage]=useState(3);

    const indexOfLastUsers=currentPage*usersPerPage;
    const indexOfFirstUsers=indexOfLastUsers-usersPerPage;

    const displayedUsers=users.slice(indexOfFirstUsers,indexOfLastUsers);
    const totalPages=Math.ceil(users.length/usersPerPage);
    return(
        <div>
            <h1>Pagination</h1>
            <table className="table table-primary">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        displayedUsers.map((item)=>{
                            return(
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <CustomPagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages}/>
        </div>
    )
}

export default Pagination;