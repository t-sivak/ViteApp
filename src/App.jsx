import {useEffect, useState} from "react";
import Header from "./components/header/Header.jsx";
import {Content} from "./components/content/Content.jsx";
import Footer from "./components/footer/Footer.jsx";
import axios from "axios";
import styles from "./App.module.scss";

function App() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products")
            .then((response) => {
                setData(response.data.products);
            })
            .catch((error) => console.log("Error receiving data", error));
    }, []);

    return (
        <div className={styles.container}>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App
