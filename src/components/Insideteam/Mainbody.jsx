import React, { Component,useState,useEffect } from "react";
import Renderchat from './Renderchat.jsx'
import { ToastContainer,toast } from "react-toastify";
import axios from 'axios'
import Chatbox from './Chatbox'
import Docsrender from "./Docsrender.jsx";
import {useHistory} from 'react-router-dom'

import './Insideteam.css'

const CheckIfMember = (props) =>{
        const history = useHistory()
        console.log("checkifmember",props.member)
        props.member.map( (d) =>{
                if(d.userid === localStorage.getItem('userid')){
                        return(<></>)
                }
        })
        history.push({
                pathname: '/',
                status:"signin_success",
        });
        
}

const Searchresults = (props) => {

        if(props.searchresults.length == 0) {
                return(
                        <>
                                <div class="px-2 p-small"> No Relevent Docs </div>
                        </>
                )
        }else{
                return(
                        <>
                                <Renderdocs chat={props.searchresults} />
                        </>
                )

        }


}

const Renderdocs = (props) =>{
        console.log(props.chat+"herein docs")
        return(

                <>

                {


                props.chat.map((d) =>(

                        <div class="px-2">
                                 <Docsrender d={d} />
                        </div>
                ))



                }


                </>
        )

        
}

const Singlemember = (props) =>{

        if(props.index === 0){
                return(
                        <>
                                                <div class="d-flex flex-row justify-content-between mt-3 p-2 single_member bg-white">
                                                        <div>
                                                                <h6> <i class="fa fa-user fa-2x px-2" aria-hidden="true"></i>   {props.object.username}</h6>
                                                                <div class="p-small px-3">{props.object.userid}</div>
                                                        </div>
                                                        <div class="py-3">
                                                                <h6 class="pointer search_submit_2"> 
                                                                 admin
                                                                </h6>
                                                        </div>
                                                                                
                                                                                
                                                </div>


                                        </>
                )
        }else{
                return(
                        <>
                                                <div class="d-flex flex-row justify-content-between mt-3 p-2 single_member bg-white">
                                                        
                                                        <div>
                                                                <h6> <i class="fa fa-user fa-2x px-2" aria-hidden="true"></i>   {props.object.username}</h6>
                                                                <div class="p-small px-4">{props.object.userid}</div>
                                                        </div>
                                                        <div class="">
                                                                <h6 onClick={() => props.remove(props.object.id) } class="search_submit_1"> 
                                                                <i class="fa fa-chain-broken" aria-hidden="true"></i> 
                                                                </h6>
                                                        </div>
                                                                                
                                                                                
                                                </div>


                                        </>
                )
        }
}

const Showmwmber = (props) =>{

        const teamid = props.teamid
        console.log("inember",props.member)

        const remove = (memberid) =>{
                //console.log("hreee remove")
                const url = process.env.REACT_APP_SERVER_URL
                console.log(teamid)
                axios.get(url+"/removemember/"+teamid+"/"+memberid+"/"+localStorage.getItem('userid') )
                .then( (res) =>{
                        if(res.data === 200){
                                toast.success("⛔ member removed successfully",{
                                        position:"top-center",autoClose:1000,
                                })
                                props.getAllMembers()


                        }else if(res.data === 400){
                                toast.error("⛔ You can not remove",{
                                        position:"top-center",autoClose:1000,
                                })
                        }
                },(error) =>{

                })
        }

        return(
                <>
                        {
                                props.member.map( (o , i) =>(

                                        <Singlemember index={i} object={o} remove={remove}/>
                                ))
                        }

                </>
        )


}

const Mainbody = (props) =>{

        
        console.log(props.id)
        const history = useHistory()

        const [search,setSearch] = useState("");
        const [searchresults,setSearchResults] = useState([]);

        const [chat,setChat] = useState([])
        const [member , setMember] = useState([])


        const updateSearch = (event) => {
                setSearch(event.target.value)
                //console.log(teamname)
        }

        const getRelevantDocs = () =>{
                const url = process.env.REACT_APP_SERVER_URL

                axios.get(url+"/getrelevantdocs/"+search+"/"+props.id)
                .then( (response) => {
                        setSearchResults(response.data)
                },(error)=>{

                })

        }

        const getAll = () => {

                const url = process.env.REACT_APP_SERVER_URL

                        const teamname = localStorage.getItem('userid')
                        axios.get(url+"/getallchats/"+props.id)
                        .then( (response) => {
                                //console.log(response.data)
                                setChat(response.data)
                        },(error)=>{

                })

        }

        const getAllMembers = () => {

                const url = process.env.REACT_APP_SERVER_URL

                        //const teamname = localStorage.getItem('userid')
                        axios.get(url+"/getallmembers/"+props.id)
                        .then( (response) => {
                                console.log(response.data)
                                var match = 0
                                
                                response.data.map( (d) =>{
                                        if(d.userid === localStorage.getItem('userid')){
                                               setMember(response.data)
                                               console.log("matcheddd")
                                               match = 1
                                        }
                                })
                                if(match == 0){
                                        history.push({
                                                pathname: '/',
                                                status:"team_access_denied",
                                        });
                                }
                                

                        },(error)=>{

                })
        }
        function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
        }

        const checkIfMember = () =>{
                console.log("herreree")
                console.log(member)
                /*member.map( (d) => {
                        console.log(d.userid)
                        if(d.memberid === localStorage.getItem('userid')){
                                return
                        }
                })*/
                /*history.push({
                        pathname: '/',
                        status:"signin_success",
                 });*/
        }


        useEffect(() => {
                getAll()
                getAllMembers()
        },[]);




        return(


                <>


                                                        <div class="small_sidebar py-3 px-1">

                                                                <div class="d-flex flex-direction-ro px-2 py-2 search_box_with_icon justify-content-between">
                                                                        <div class="px-1 search_box w-50">
                                                                                <input onChange={updateSearch} type="text" classNamae="w-100 px-2 search_box" placeholder="search for a file" />
                                                                        </div> 
                                                                        <div class="pointer" onClick={getRelevantDocs}>
                                                                                🔍find
                                                                        </div> 
                                                                </div>

                                                                <div className="py-1">
                                                                        <Searchresults searchresults={searchresults} />
                                                                </div> <br />


                                                                <h5 class="text-danger doc_single">docs manager</h5>

                                                                

                                                                
                                                                <div class="col">
                                                                        <Renderdocs chat={chat}/>
                                                                </div><br/>

                                                                <br/>

                                                                <h5 class="text-danger doc_single">All Team Members</h5>
                                                                <div class="col px-1">
                                                                        <Showmwmber getAllMembers={getAllMembers} teamid={props.id} member={member} />
                                                                </div><br/>


                                                        </div>

                        <div class="container main_body">
                                <div>
                                        <div>
                                                <div class="row py-3">

                                                        <div class="col-lg-4 col-sm-0 sidebar p-3 small_sidebar_hide">

                                                                <div class="d-flex flex-direction-ro px-2 py-2 search_box_with_icon justify-content-between">
                                                                        <div class="px-1 search_box w-80">
                                                                                <input onChange={updateSearch} type="text" classNamae="w-100 px-2 search_box" placeholder="search for a file" />
                                                                        </div> 
                                                                        <div class="pointer" onClick={getRelevantDocs}>
                                                                                🔍find
                                                                        </div> 
                                                                </div>

                                                                <div className="py-1">
                                                                        <Searchresults searchresults={searchresults} />
                                                                </div> <br />


                                                                <h5 class=" doc_single_left_bar ">docs manager</h5>
                                                                        <Renderdocs chat={chat} />  <br/>


                                                                {/*<div class="invite_link text-center p-2">
                                                                        <h5>Add TeamMates</h5>
                                                                        <div class="p-large text-danger">
                                                                                https:://google.com/join-here
                                                                        </div>
                                                                </div><br/>*/}

                                                                <h5 class=" doc_single_left_bar">All Team Members</h5>
                                                                <div class="col px-2">
                                                                        <Showmwmber getAllMembers={getAllMembers} teamid={props.id} member={member} />
                                                                </div><br/>
                                                        </div>

                                                        

                                                        <div class="col-lg-8 col-sm-12 chatbar p-3">
                                                                <h5>message manager</h5>
                                                                <div class="col">
                                                                        <Renderchat getallchat={getAll} id={props.id} chat={chat}/>

                                                                        <div id="comehere" class="row doc_single hide_this m-1">
                                                                                <div class="col">
                                                                                        <div class="row sender p-1">
                                                                                                <div class="d-flex flex-row justify-content-between">
                                                                                                        <div class="">
                                                                                                                <span><i class="fa fa-user-circle" aria-hidden="true"></i></span>
                                                                                                                <span class="h6 px-2">senders name</span>
                                                                                                        </div>

                                                                                                        <div class="">
                                                                                                                
                                                                                                                <span class="h6 px-2 text-danger">23/11/2021</span>
                                                                                                        </div>
                                                                                                        
                                                                                                </div>
                                                                                        </div>
                                                                                        <div class="d-flex flex-row flex-wrap mt-3">
                                                                                                <div class="px-2 single_doc">
                                                                                                        <div class="text">
                                                                                                                <span><h6> <i class="fa fa-file" aria-hidden="true"></i> DOCS1   
                                                                                                                <i class="fa text-danger fa-arrow-circle-down" aria-hidden="true"></i></h6></span>
                                                                                                        </div>
                                                                                                </div> 
                                                                                        </div>
                                                                                        <div class="row">
                                                                                                <span class="font-weight-bolder p-large">
                                                                                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid distinctio quasi praesentium, neque nemo alias labore velit, quibusdam, asperiores accusantium est fugit consectetur eligendi modi laborum nihil culpa voluptatibus. Vitae saepe praesentium vero, ratione facere obcaecati aspernatur! Nihil fuga alias eligendi rem harum debitis qui repudiandae saepe molestias, dignissimos voluptas!
                                                                                                </span>
                                                                                        </div>
                                                                                </div>
                                                                        </div>



                                                                </div>
                                                        </div>




                                                </div>
                                        </div>
                                </div>
                        </div>

                        <Chatbox met={getAll} id={props.id} />



                </>
        )



}


export default Mainbody;