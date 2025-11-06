import React from 'react';
import {users} from "./data.js";

const Cwiczenia2 = () => {
    const imiona = users.map(user => user.name);
    const sumaZarobkow = users.filter(user => user.salary > 5000 && user.age > 30
    && !user.name.endsWith("a")).map(user => user.salary)
        .reduce((acc, salary) => acc + salary);
    return (
        <ol>
            {
                users.filter(user => user.salary > 5000 && user.age > 30)
                    .map(user => <li key ={user.id}
                                     style={{
                                         color: user.salary > 6500 ? "green ": "red"}}>
                        {user.name} {user.salary} {user.age}</li>)
            }
        </ol>
    )
};

export default Cwiczenia2;