import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { fetchUsers } from '../actions/users';
import { filter } from 'rsvp';

class UserTable extends React.Component {
  constructor({ users }) {
    super();
    this.state = {
      users,
      virginUsers: users,
      ageFilter: false,
      genderFilter: false
    };
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  componentWillReceiveProps({ users }) {
    this.setState({ users: [...users], virginUsers: [...users] });
  }

  handleFilters(filterKey, value) {
    this.setState({ filterKey, value });
    this.filterUsers(filterKey);
  }

  resetTable() {
    this.state.users = [...this.state.virginUsers];
    this.state.filters = { ageFilter: false, genderFilter: false };
  }

  filterUsers(filterKey) {
    const users = [...this.state.virginUsers];
    const filters = this.state.filters;
    const filteredUsers = users.filter(user => {

      // If just age filters
      if (filters.ageFilter && !filter.genderFilter) {
        if (filters.ageFilter === 'over30' && user.age >= 30) { return user; }
        if (filters.ageFilter === 'under30' && user.age <= 30) { return user; }
      }
      // if just genderFilter
      if (filters.genderFilter && !filter.ageFilter) {
        if (filters.genderFilter === user.gender) { return user; }
      }

      if (filters.ageFilter && filters.genderFilter) {
        if (filters.ageFilter === 'over30' && user.age >= 30 && filters.genderFilter === 'male') { return user; }
        if (filters.ageFilter === 'under30' && user.age <= 30 && filters.genderFilter === user.gender) { return user; }
      }
    });

    this.setState({ users: filteredUsers });
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
        <button className={classNames('btn', { active: Boolean(this.state.ageFilter === 'over30') })} onClick={() => this.handleFilters('over30')}> Over Thirty </button>
        <button className={classNames('btn', { active: Boolean(this.state.ageFilter === 'under30') })} onClick={() => this.handleFilters('under30')}> Under Thirty </button>
        <button className={classNames('btn', { active: Boolean(this.state.genderFilter === 'male') })} onClick={() => this.handleFilters('male')} > Male </button>
        <button className={classNames('btn', { active: Boolean(this.state.genderFilter === 'female') })} onClick={() => this.handleFilters('female')}> Female </button>
        <button className="btn" onCLick={() => this.resetTable()}> Remove Filters</button>
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
