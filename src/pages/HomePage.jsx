// Home.jsx
import React from "react";

import { Header } from "../components/header/header.jsx";
import { Nav } from "../components/nav/nav.jsx";
import { Footer } from "../components/footer/footer.jsx";
import { Main } from "../components/main/main.jsx";
import { Button } from "../components/button/button.jsx";
import { Card } from "../components/card/card.jsx";

function HomePage() {
    return (
        <>
            <main>
                <Header />
                <Main />
                <Button textValue="ABE" size="small" theme="light" />
                <Button textValue="ABE" size="medium" theme="light" />
                <Button textValue="ABE" size="small" theme="dark" />
                <Button textValue="ABE" size="large" theme="light" />
                <Card
                    headerText="Card Header"
                    textValue="This is just some dummy card, with some crazy aahh text"
                />
                <Card
                    headerText="Card Header"
                    textValue="This is just some dummy card, with some crazy aahh text"
                />
                <Card
                    headerText="Card Header"
                    textValue="This is just some dummy card, with some crazy aahh text"
                />
                <Card
                    headerText="Card Header"
                    textValue="This is just some dummy card, with some crazy aahh text"
                />
                <Card
                    headerText="Card Header"
                    textValue="This is just some dummy card, with some crazy aahh text"
                />
                <Card
                    headerText="Card Header"
                    textValue="This is just some dummy card, with some crazy aahh text"
                />
                <Card
                    headerText="Card Header"
                    textValue="This is just some dummy card, with some crazy aahh text"
                />
                <Card
                    headerText="Card Header"
                    textValue="This is just some dummy card, with some crazy aahh text"
                />
                <Card
                    headerText="Card Header"
                    textValue="This is just some dummy card, with some crazy aahh text"
                />
                <Card
                    headerText="Card Header"
                    textValue="This is just some dummy card, with some crazy aahh text"
                />
                <Card
                    headerText="Card Header"
                    textValue="This is just some dummy card, with some crazy aahh text"
                />
                <Card
                    headerText="Card Header"
                    textValue="This is just some dummy card, with some crazy aahh text"
                />
                <Card
                    headerText="Card Header"
                    textValue="This is just some dummy card, with some crazy aahh text"
                />
                <Card
                    headerText="Card Header"
                    textValue="This is just some dummy card, with some crazy aahh text"
                />
                <Card
                    headerText="Card Header"
                    textValue="This is just some dummy card, with some crazy aahh text"
                />
                <Card
                    headerText="Card Header"
                    textValue="This is just some dummy card, with some crazy aahh text"
                />
                <Card
                    headerText="Card Header"
                    textValue="This is just some dummy card, with some crazy aahh text"
                />
            </main>
        </>
    );
}

export default HomePage;
