import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { fetchUsers } from '../actions/users';
import filterUsers from '../actions/filter';

class UserTable extends React.Component {
  constructor({ users }) {
    super();
    this.state = {
      users,
      virginUsers: users,
      filters: {
        over30: false,
        under30: false,
        female: false,
        male: false
      }
    };
  }

  componentDidMount() {
    this.props.fetchUsers();
    this.state.filters.age = 'over30';
    this.filterUsers();
  }

  componentWillReceiveProps({ users }) {
    console.log(users);
    this.setState({ users: [...users], virginUsers: users });
  }

  componentWillMount() {
    this.selectedCheckBoxes = new Set();
  }

  handleFilters(filterKey) {
    this.state.filters[filterKey] = !this.state.filters[filterKey];
    this.filterUsers();
  }

  filterUsers () {
    const users = [...this.state.virginUsers];
    const filteredUsers = [];



    console.log('filter', users);
    this.setState({users: filteredUsers})

  }

  render() {

    const userList = this.state.virginUsers.length > 1
      ? this.state.users.map((user) => {
        return (
          <tr key={user.id}>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
          </tr>
        );
      }) : (
        <tr>
          <p> No User Data Yet :/  </p>
          <button onClick={() => this.props.fetchUsers()}> Retry </button>
        </tr>
      );

    return <div class="container">
      <label> Filters: </label>
      <section className="row">
        <button className="btn" onClick={() => this.handleFilters('over30') }> Over Thirty </button>
        <button className="btn" onClick={() => this.handleFilters('under30') }> Under Thirty </button>
        <button className="btn" onClick={() => this.handleFilters('male') } > Male </button>
        <button className="btn" onClick={() => this.handleFilters('female') }> Female </button>
        <button className="btn"> Remove Filters</button>
      </section>
      <section className="row">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
            </tr>
          </thead>
          <tbody>
            {this.state.virginUsers.length > 1 && userList}
          </tbody>
        </table>

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
