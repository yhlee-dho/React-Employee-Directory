import React from "react";
import TableHeader from "./tableHeader";
import Results from "./results";

function Table({users, search}) {
    return(
        <table>
            <thread>
                <tr>
                    <th>Picture</th>
                    <TableHeader title = "First Name" userData = {users}/>
                    <TableHeader title = "Last Name" userData = {users}/>
                    <TableHeader title = "Gender" userData = {users}/>
                    <TableHeader title = "City" userData = {users}/>
                    <TableHeader title = "State" userData = {users}/>
                    <TableHeader title = "Country" userData = {users}/>

                </tr>
            </thread>
            <tbody>
                <Results user={users} search={search}/>
            </tbody>
        </table>
    )
}

export default Table;