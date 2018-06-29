import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {userActions} from '../actions'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  componentDidMount () {
  }
  render () {
    const {actions, location, loading} = this.props
    const {username, password} = this.state
    return (
      <div className='login'>
        <p><span>用户名：</span><input type='text' value={username} onChange={(e) => this.setState({username: e.target.value})} /></p>
        <p><span>密码：</span><input type='password' value={password} onChange={(e) => this.setState({password: e.target.value})} /></p>
        <p><button className="btn btn-primary"   onClick={() => actions.login(username, password, location.state && location.state.nextPathname ? location.state.nextPathname : '/')}>登录</button></p>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  loading: state.user.loading
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...userActions
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
