import react,{useEffect} from 'react';

import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import './Home.css'

import { ToastContainer,toast } from 'react-toastify';

const Home = (props) =>{

        useEffect(() => {
                if(props.location.status === "create_team_success"){
                        toast.success("team created successfully",{
                                        position : "top-center",autoClose : 2000
                        })
                }

        },[]);




        return(
                <>
                        <ToastContainer />
                        <Navbar />
                        <Hero />
                        <Footer />


                </>
        )
}

export default Home