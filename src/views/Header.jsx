import React from 'react'
import { connect } from 'react-redux'
import { Link, IndexLink } from 'react-router'
import {bindActionCreators} from 'redux'
import {userActions} from '../actions'

class Header extends React.Component {
  render() {
    const {username, actions} = this.props;
    return (
      <header>
        <ul>
          <li>
            <IndexLink to="/" activeClassName="active" >首页</IndexLink>
          </li>
          <li>
            <Link to="/about" activeClassName="active">关于我们</Link>
          </li>
        </ul>
        {username ? 
        <span className="user-info">你好，{username} | <a href="javascript:;" onClick={()=>actions.logout()}>退出</a></span> : 
        <span className="user-info"><Link to="/login">登录</Link></span>
        }
      </header>
    )
  }
}

const mapStateToProps = state => ({
  username: state.user.username
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...userActions
  }, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)