import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import BlogList from "components/home/blogList"
import CTA from "components/home/cta"
import Feactures from "components/home/feactures"
import Header from "components/home/header"
import Incentive from "components/home/incentives"
import LogoCloud from "components/home/logoCloud"
import UseCases from "components/home/use_cases"
import Layout from "hocs/layouts/layout"
import { useEffect } from "react"

function Home() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return(
        <Layout>
            <Navbar/>
            <div data-scroll-section className="pt-28">
                <Header/>
                <Incentive/>
                <UseCases/>
                <Feactures/>
                <CTA/>
                <LogoCloud/>
                <BlogList/>
            </div>
            <Footer/>
        </Layout>
    )
}
export default Home