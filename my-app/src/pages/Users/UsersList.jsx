import React, { Component } from 'react';

import {
    Table,
    Button,
    Container
} from 'reactstrap';

class UsersList extends Component {
    render() {
        return (
            <React.Fragment>
                <div
                    style={{
                        marginTop: '7em',
                        width: '90%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}>

                    <h3> User Management </h3>
                    <hr />
                </div>

                <Container className="users" style={{ marginBottom: '120px' }}>
                    <br />
                    <Table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Lastname</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>State</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.data.map((element, i) => (
                                <tr key={i}>
                                    <td>{element.id}</td>
                                    <td>{element.name}</td>
                                    <td>{element.lastname}</td>
                                    <td>{element.email}</td>
                                    <td>{element.role}</td>
                                    <td>{element.state}</td>
                                    <td>
                                        <Button color="primary" onClick={() => this.props.showME(element)} > Edit </Button> {"  "}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
            </React.Fragment>
        )
    }
}

export default UsersList;
