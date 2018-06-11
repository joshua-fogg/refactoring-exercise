import React from 'react';
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import { fetchUsers } from '../actions/users';
import filterUsers from '../actions/filter';

// const UserModel = {
//   name: { type: String },
//   age: { type: Number },
//   gender: { type: String },
//   __id: { type: Number }
// };

class UserTable extends React.Component {
  constructor({ users }) {
    super();
    this.state = { users, count: 29 };
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  componentWillReceiveProps({ users }) {
    this.setState({ users: users });
  }

  handleFilter(payload) {
    console.log(payload);
    this.props.dispatch(filterUsers());
  }

  render() {
    const userList = this.state.users.length > 1 ? (
      <p>
        {
          this.state.users.map((user) => {
            return (
              <li key={user._id} >
                {user.name}
              </li>
            );
          })
        }
      </p>
    ) : (
        <section>
          <p> No User Data Yet :/ </p>
          <button onClick={() => this.props.fetchUsers()}> Retry </button>
        </section>
      );


    const qualityType = {
      "male": "male",
      "female": "female"
    };

    function enumFormatter(cell, row, enumObject) {
      return enumObject[cell];
    }

    return <div>
      {/* <button onClick={() => this.addUser()}> Add User </button> */}
      <section>
        <BootstrapTable data={this.state.users} striped hover>
          <TableHeaderColumn isKey={true} dataField='id'>ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name' filter={{ type: 'TextFilter', delay: 200 }}>Name</TableHeaderColumn>
          <TableHeaderColumn dataField='age' filter={{ type: 'TextFilter', delay: 200 }}>Age</TableHeaderColumn>
          <TableHeaderColumn dataField='gender' >Gender</TableHeaderColumn>
        </BootstrapTable>
        {userList}
      </section>
    </div >;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
