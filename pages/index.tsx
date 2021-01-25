import { NextPage } from "next";
import { Nav } from "../components/Nav";
import { SEO } from "../shared/SEO";

const Home: NextPage = () => {

    return (
        <>
            <SEO title="Wellness | Modern health, simplified." />
            <Nav />
        </>
    )
}

export default Home;