// Home.jsx
import React from "react";

import { Header } from "../components/header/header.jsx";
import { Nav } from "../components/nav/nav.jsx";
import { Footer } from "../components/footer/footer.jsx";
import { Main } from "../components/main/main.jsx";
import { Button } from "../components/button/button.jsx";
import { Card } from "../components/card/card.jsx";

function Home() {
    return (
        <>
            <Nav />
            <Header />
            <Main />
            <Button textValue="ABE" size="small" theme="light" />
            <Card headerText="Card Header" textValue="Card Text Value" />
            <Footer />
        </>
    );
}

export default Home;
