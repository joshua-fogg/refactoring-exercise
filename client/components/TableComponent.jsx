import React from "react";
import { render } from "react-dom";
import { connect } from 'react-redux';
import Table from 'react-toolbox/lib/table/Table.js';

const UserModel = {
    name: { type: String },
    age: { type: Number },
    gender: { type: String },
    __id: { type: Number },
};

class UserTable extends React.Component {
    constructor({ users }) {
        super()
        this.state = {
            source: users,
        }
    }

    render() {
        return (
            <Table
                model={UserModel}
                source={this.state.source}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
      users: state.users
    }
  }

export default connect(
    mapStateToProps
  )(UserTable)