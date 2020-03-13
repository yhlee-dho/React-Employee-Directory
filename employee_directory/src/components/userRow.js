import React from "react";

function userRow({user}) {
    return (
        <tr>
            <td>{user.name.first}</td>
            <td>{user.name.last}</td>
            <td>{user.gender}</td>
            <td>{user.location.city}</td>
            <td>{user.location.state}</td>
            <td>{user.location.country}</td>

            <td><img alt="user" src={user.picure.thumbnail}/></td>

        </tr>
    )
};

export default userRow;