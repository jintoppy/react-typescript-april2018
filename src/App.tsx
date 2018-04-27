import * as React from 'react';
import './App.css';
import {users} from './data/users';
import IUser from './models/user';


const initialState = {
  users: [{id: 1, login: 'user1'}]
};

interface IState {
  users: IUser[]
}

class App extends React.Component<{}, IState> {
  public readonly state: IState = initialState;

  public onBtnClick = (): void => {
    this.setState({
      users
    });
  }

  public render(): JSX.Element {
    return (
      <div className="App">
        Search: <input type="text"/>
        <div className="container">
          <table>
            <thead>
            <tr>
              <th>ID</th>
              <th>Login</th>
            </tr>
            </thead>
            <tbody>
          {this.state.users.map((user: IUser, index: number) => {
            return (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.login}</td>
              </tr>
            )
          })}
          </tbody>
          </table>
          <button onClick={this.onBtnClick}>Reload</button>
        </div>
      </div>
    );
  }
}

export default App;
