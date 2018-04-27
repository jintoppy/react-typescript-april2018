import * as React from 'react';
import IUser from './models/user';

interface IProps {
    user: IUser
}

const TableRow: React.SFC<IProps> = ({user}: IProps) => {
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.login}</td>
        </tr>
    )
}

export default TableRow;