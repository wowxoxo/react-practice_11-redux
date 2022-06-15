import { connect, ConnectedProps, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import "./App.css";
import { changePassword, changeUsername } from "./store/login/actions-creators";
import * as loginActionCreators from "./store/login/actions-creators"
import { RootState } from "./store/reducers";
import { Dispatch } from "react";
import { LoginAction } from "./store/login/actions";

interface DispatchToProps {
  dispatch?: Dispatch<LoginAction>
}

interface AppProps extends PropsFromRedux, DispatchToProps {
  msg: string
}

function App(props: AppProps) {
  const { username, password, dispatch, changeUsername, changePassword } =
    props;

    const dispatch1: Dispatch<LoginAction> = useDispatch();
    // const { changeUsername1 } = bindActionCreators(loginActionCreators, dispatch1)

    const username2 = useSelector((state: RootState) => state.login.username)
    const hobbies: readonly string[] = useSelector((state: RootState) => state.login.hobbies)

    // hobbies.push('sdsd')

    // const arr = []
    // arr.push('sd')

  return (
    <div className="login-form">
      <form action="/examples/actions/confirmation.php" method="post">
        <h2 className="text-center">Log in</h2>
        {hobbies.map(hobby => (<div key={hobby}>{hobby}</div>))}
        <div className="form-group">
          <input
            type="text"
            value={username}
            // onChange={(event) => { dispatch({ type: 'CHANGE_USERNAME', payload: event.target.value }) }}
            // onChange={(event) => {
            //   dispatch(changeUsername(event.target.value));
            // }}
            // onChange={(event) => {
            //   changeUsername(event.target.value);
            // }}
            onChange={(event) => {
              dispatch1(changeUsername(event.target.value));
            }}
            className="form-control"
            placeholder="Username"
            required={true}
          />
          <div>{username2}</div>
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
            required={true}
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
const mapStateToProps = (state: RootState) => {
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

const AppConnector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof AppConnector>

export default AppConnector(App);
