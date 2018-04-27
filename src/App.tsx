import * as React from 'react';
import './App.css';
import {users} from './data/users';
import IUser from './models/user';
import TableRow from './TableRow';


const initialState = {
  users: [{id: 1, login: 'user1'}],
  usersMaster: []
};

interface IState {
  users: IUser[],
  usersMaster: IUser[]
}

class App extends React.Component<{}, IState> {
  public searchInput: HTMLInputElement;
  public readonly state: IState = initialState;
  

  public onBtnClick = (): void => {
    this.setState({
      users,
      usersMaster: users,      
    });
  }

  public onSearch = () => {
    const query = this.searchInput.value;
    const filteredUsers = this.state.usersMaster.filter((user: IUser) => {
                            return user.login.indexOf(query) > -1;
                          });
    this.setState({
      users: filteredUsers
    });
  }

  public render(): JSX.Element {
    return (
      <div className="App">
        Search: <input 
                  type="text" 
                  ref={(el) => this.searchInput = el as HTMLInputElement} 
                  onKeyUp={this.onSearch}
                />
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
              <TableRow user={user} key={index} />
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
