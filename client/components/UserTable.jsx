import React from "react";
import { render } from "react-dom";
import { connect } from 'react-redux';

import ReactTable from "react-table";
import "react-table/react-table.css";

const UserModel = {
  name: { type: String },
  age: { type: Number },
  gender: { type: String },
  __id: { type: Number },
};

const defaultUserList = [
  {
    name: "Jim",
    age: 30,
    gender: "male",
    _id: "b3Fshn8F976TZCTg"
  },
  {
    name: "Jane",
    age: 55,
    gender: "female",
    _id: "k3nEqkqlKmWZNejC"
  },
  {
    name: "Bob",
    age: 20,
    gender: "male",
    _id: "oqnu2ZnPTebp04bG"
  },
  {
    name: "Sally",
    age: 24,
    gender: "female",
    _id: "tKmv8RC6GlUnYcV3"
  }
]

class UserTable extends React.Component {
  constructor({ users }) {
    super()
    this.state = { users }
  }

  render() {
    return (
        <ReactTable
          data={ defaultUserList }
          columns={[
            {
              Header: "Name",
              accessor: "name"
            },
            {
              Header: "Age",
              accessor: "age"
            },
            {
              Header: "gender",
              accessor: "gender"
            }
          ]}
          defaultPageSize={10}
          // className="-striped -highlight"
          style={{ width: 400 + 'px' }}
        />
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(UserTable)