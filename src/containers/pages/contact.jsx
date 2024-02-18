import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"
import { useEffect } from "react"

function Contact() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return(
        <Layout>
            <Navbar/>
            <div className="py-32">
                Contact
            </div>
            <Footer/>
        </Layout>
    )
}
export default Contact