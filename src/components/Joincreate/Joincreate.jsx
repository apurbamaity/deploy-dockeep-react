import react from 'react';
import './Joincreate.css'
import { ToastContainer,toast } from "react-toastify";
 import 'react-toastify/dist/ReactToastify.css';


import Join from './Join'
import Navbar from './Navbar'
import Create from './Create'
import Footer from './Footer'

const Joincreate = () =>{

        return(
                <>
                        <ToastContainer />
                        <Navbar />
                        <Join />
                        <Create />
                        <Footer />
                </>
        )



}

export default Joincreate