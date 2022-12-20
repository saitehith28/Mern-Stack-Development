import { useSelector } from "react-redux";
function CourseListPage() {
    const courses = useSelector(state => state.courses.courses);
    return (
        <div>
            <h1>Course List</h1>
            <ul>
                {
                    courses.map((item, index) => {
                        return (
                            <div className="list-group" key={index}>
                                <a className="list-group-item list-group-item-action active" aria-current="true">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">{item.courseName}</h5>
                                            <small>{item.startDate}</small>
                                    </div>
                                    <p className="mb-1">{item.instructorName}</p>
                                    <small>{item.schedule}</small>
                                </a>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default CourseListPage;