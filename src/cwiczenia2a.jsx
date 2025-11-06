import React from 'react';
import {users} from "./data.js";

const Cwiczenia2A = () => {
    // 1. Użytkownicy z Wrocławia
    const usersFromWroclaw = users.filter(user => user.city === "Wrocław");

    // 2. Użytkownicy poniżej 28 lat
    const youngUsers = users.filter(user => user.age < 28);

    // 3. Średnie zarobki
    const averageSalary = (users.reduce((sum, user) => sum + user.salary, 0) / users.length).toFixed(2);

    // 4. Imiona użytkowników z zarobkami > 6000 zł
    const highEarners = users.filter(user => user.salary > 6000).map(user => user.name);

    // 5. Nowa tablica {name, city}
    const nameCityArray = users.map(user => ({ name: user.name, city: user.city }));
    console.log("Tablica {name, city}:", nameCityArray);

    // 6. Imiona zaczynające się na "M"
    const usersWithM = users.filter(user => user.name.startsWith("M"));

    // 7. Sortowanie po wieku
    const sortedByAge = [...users].sort((a, b) => a.age - b.age);

    return (
        <div>
            <h2>1. Użytkownicy z Wrocławia</h2>
            <ol>
                {usersFromWroclaw.map(user => (
                    <li key={user.id}>{user.name}, {user.age} lat, {user.salary} zł</li>
                ))}
            </ol>

            <h2>2. Użytkownicy poniżej 28 lat</h2>
            <ul>
                {youngUsers.map(user => (
                    <li key={user.id}>{user.name} - {user.age} lat</li>
                ))}
            </ul>

            <h2>3. Średnie zarobki</h2>
            <p>{averageSalary} zł</p>

            <h2>4. Użytkownicy zarabiający więcej niż 6000 zł</h2>
            <ul>
                {highEarners.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>

            <h2>6. Użytkownicy, których imię zaczyna się na "M"</h2>
            <ul>
                {usersWithM.map(user => (
                    <li key={user.id}>{user.name}, {user.age} lat, {user.city}, {user.salary} zł</li>
                ))}
            </ul>

            <h2>7. Użytkownicy posortowani po wieku</h2>
            <table border="1" cellPadding="5">
                <thead>
                <tr>
                    <th>Imię</th>
                    <th>Wiek</th>
                    <th>Miasto</th>
                    <th>Zarobki</th>
                </tr>
                </thead>
                <tbody>
                {sortedByAge.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.city}</td>
                        <td>{user.salary} zł</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Cwiczenia2A;