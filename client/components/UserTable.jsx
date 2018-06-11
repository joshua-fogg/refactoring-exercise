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

  UNSAFE_componentWillReceiveProps({ users }) {
    this.setState({ users: [...users], virginUsers: [...users] });
  }

  handleFilters(filterKey, value) {
    if (filterKey.includes('30')) {
      this.setState({ ageFilter: filterKey });
    } else {
      this.setState({ genderFilter: filterKey });
    }
    this.filterUsers(filterKey);
  }

  resetTable() {
    this.setState({
      users: [...this.state.virginUsers],
      ageFilter: false,
      genderFilter: false
    });
  }

  filterUsers(filterKey) {
    const users = [...this.state.virginUsers];
    // const filters = this.state.filters;
    const filteredUsers = users.filter(user => {

      // If just age filters
      if (this.state.ageFilter && !this.state.genderFilter) {
        if (this.state.ageFilter === 'over30' && Number(user.age) >= 30) { return user; }
        if (this.state.ageFilter === 'under30' && Number(user.age) < 30) { return user; }
      }
      // if just genderFilter
      if (this.state.genderFilter && !filter.ageFilter) {
        if (this.state.genderFilter === user.gender) { return user; }
      }

      if (this.state.ageFilter && this.state.genderFilter) {
        if (this.state.ageFilter === 'over30' && Number(user.age) >= 30 && this.state.genderFilter === 'male') { return user; }
        if (this.state.ageFilter === 'under30' && Number(user.age) <= 30 && this.state.genderFilter === user.gender) { return user; }
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

    return <div className="container">
      <h2> Friends List </h2>
      <label> Filters: </label>
      <section className="row">
        <button className={classNames('btn', { active: (this.state.ageFilter === 'over30') })} onClick={() => this.handleFilters('over30')}> Over Thirty </button>
        <button className={classNames('btn', { active: (this.state.ageFilter === 'under30') })} onClick={() => this.handleFilters('under30')}> Under Thirty </button>
        <button className={classNames('btn', { active: (this.state.genderFilter === 'male') })} onClick={() => this.handleFilters('male')} > Male </button>
        <button className={classNames('btn', { active: (this.state.genderFilter === 'female') })} onClick={() => this.handleFilters('female')}> Female </button>
        <button className="btn" onClick={() => this.resetTable()}> Remove Filters</button>
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
