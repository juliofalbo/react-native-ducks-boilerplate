import React from 'react';
import { connect } from 'react-redux';
import { accountOperations, accountSelectors } from '../../store/account';

import Login from './Login';

class LoginContainer extends React.PureComponent {
  render () {
    return (<Login {...this.props} />);
  }
}

const mapStateToProps = (state) => ({
  username: accountSelectors.getUsername(state),
  password: accountSelectors.getPassword(state),
  loading: accountSelectors.getLoading(state),
  error: accountSelectors.getError(state)
});

const mapDispatchToProps = {
  login: accountOperations.login,
  update: accountOperations.update
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
