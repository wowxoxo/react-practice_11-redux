import { connect, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import "./App.css";
import { changePassword, changeUsername } from "./store/login/actions-creators.ts";
import * as loginActionCreators from "./store/login/actions-creators.ts"

function App(props) {
  const { username, password, dispatch, changeUsername, changePassword } =
    props;

    const dispatch1 = useDispatch();
    const { changeUsername1 } = bindActionCreators(loginActionCreators, dispatch1)

  return (
    <div className="login-form">
      <form action="/examples/actions/confirmation.php" method="post">
        <h2 className="text-center">Log in</h2>
        <div className="form-group">
          <input
            type="text"
            value={username}
            // onChange={(event) => { dispatch({ type: 'CHANGE_USERNAME', payload: event.target.value }) }}
            // onChange={(event) => {
            //   dispatch(changeUsername(event.target.value));
            // }}
            onChange={(event) => {
              changeUsername(event.target.value);
            }}
            className="form-control"
            placeholder="Username"
            required="required "
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            value={password}
            // onChange={(event) => {
            //   dispatch(changePassword(event.target.value));
            // }}
            onChange={(event) => {
              changePassword(event.target.value);
            }}
            className="form-control"
            placeholder="Password"
            required="required"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block">
            Log in
          </button>
        </div>
        <div className="clearfix">
          <label className="pull-left checkbox-inline">
            <input type="checkbox" /> Remember me
          </label>
          <a href="#" className="pull-right">
            Forgot Password?
          </a>
        </div>
      </form>
      <p className="text-center">
        <a href="#">Create an Account</a>
      </p>
    </div>
  );
}

// putStateKeysToComponentPropsAndMap
const mapStateToProps = (state) => {
  console.log(state);
  return {
    username: state.login.username,
    password: state.login.password
  };
};

const mapDispatchToProps = {
  changeUsername,
  changePassword
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
