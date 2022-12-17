import React from 'react';
class ArticleList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Articles Data</h1>
                <table class="table-primary" style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Content</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.articles.map((item) => {
                                return <tr>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.content}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ArticleList;
