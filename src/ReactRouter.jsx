import React from 'react';
import {
    Link,
    BrowserRouter,
    Route,
    Routes,
    useNavigate,
    Navigate,
    useParams
} from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    function handleLogin() {
        // logika logowania (na razie uproszczona)
        navigate("/dashboard");
    }

    return (
        <div>
            <h2>Logowanie</h2>
            <button onClick={handleLogin}>Zaloguj</button>
        </div>
    );
}

function Dashboard() {
    return <h2>Panel użytkownika</h2>;
}

function OldAboutRedirect() {
    return <Navigate to="/about" />;
}

function UserProfile() {
    const { id } = useParams();
    return <h2>Profil użytkownika o ID: {id}</h2>;
}

function ProductCategory() {
    const { category, id } = useParams();
    return <h2>Produkt {id} z kategorii {category}</h2>;
}

function Profile() {
    const { username } = useParams();
    return (
        <h2>
            {username
                ? `Profil użytkownika ${username}`
                : "Nie wybrano użytkownika"}
        </h2>
    );
}

function Home() {
    return <h2>Strona główna</h2>;
}

function About() {
    return <h2>O nas</h2>;
}

function Contact() {
    return <h2>Kontakt</h2>;
}

function Products() {
    return (
        <div>
            <h2>Lista produktów</h2>
            <ul>
                <li><Link to="/product/books/123">Produkt książki 123</Link></li>
                <li><Link to="/product/electronics/456">Produkt elektroniki 456</Link></li>
            </ul>
        </div>
    );
}

function Cart() {
    return <h2>Koszyk</h2>;
}

function Checkout() {
    return <h2>Podsumowanie zamówienia</h2>;
}

const ReactRouter = () => {
    return (
        <BrowserRouter>
            <nav style={{ marginBottom: '20px', backgroundColor: '#eee', padding: '10px' }}>
                <Link to="/">Strona główna</Link> |{" "}
                <Link to="/about">O nas</Link> |{" "}
                <Link to="/contact">Kontakt</Link> |{" "}
                <Link to="/login">Logowanie</Link> |{" "}
                <Link to="/dashboard">Dashboard</Link> |{" "}
                <Link to="/old-about">Stary link</Link> |{" "}
                <Link to="/user/10">Profil #10</Link> |{" "}
                <Link to="/products">Produkty</Link> |{" "}
                <Link to="/cart">Koszyk</Link> |{" "}
                <Link to="/checkout">Zamówienie</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/old-about" element={<OldAboutRedirect />} />

                <Route path="/user/:id" element={<UserProfile />} />

                <Route path="/product/:category/:id" element={<ProductCategory />} />

                <Route path="/profile/:username?" element={<Profile />} />

                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </BrowserRouter>
    );
};

export default ReactRouter;
