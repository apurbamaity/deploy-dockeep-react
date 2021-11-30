import React, { Component,useState,useEffect } from "react";
import Renderchat from './Renderchat.jsx'
import axios from 'axios'
import Chatbox from './Chatbox'
import Docsrender from "./Docsrender.jsx";

import './Insideteam.css'

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

                        <Docsrender d={d} />
                ))



                }


                </>
        )

        
}

const Showmwmber = (props) =>{

        return(
                <>
                        {
                                props.member.map( (o) =>(
                                        <>
                                                <div class="d-flex flex-row justify-content-between m-1 pointer">
                                                        <div>
                                                                <h6> <i class="fa fa-user" aria-hidden="true"></i>   {o.username}</h6>
                                                        </div>
                                                        {/*<div>
                                                                <h6> <i class="fa fa-chain-broken text-danger" aria-hidden="true"></i> </h6>
                                                        </div>*/}
                                                                                
                                                                                
                                                </div>


                                        </>
                                ))
                        }

                </>
        )


}

const Mainbody = (props) =>{

        
        console.log(props.id)

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
                                setMember(response.data)
                        },(error)=>{

                })
        }


        useEffect(() => {
                getAll()
                getAllMembers()
        },[]);




        return(


                <>


                                                        <div class="small_sidebar p-3">

                                                                <div class="d-flex flex-direction-row py-2">
                                                                        <div class="px-2">
                                                                                <input onChange={updateSearch} type="text" classNamae="w-100 px-2" placeholder="enter file name" />
                                                                        </div> 
                                                                        <div class="" onClick={getRelevantDocs}>
                                                                                <i class="fa fa-search" aria-hidden="true"></i>
                                                                        </div> 
                                                                </div>

                                                                <div className="py-1">
                                                                        <Searchresults searchresults={searchresults} />
                                                                </div> <br />


                                                                <h5 class="text-danger doc_single">docs manager</h5>

                                                                

                                                                
                                                                <div class="col">
                                                                        <Renderdocs chat={chat} />
                                                                </div><br/>

                                                                <br/>

                                                                <h5 class="text-danger doc_single">All Team Members</h5>
                                                                <div class="col">
                                                                        <Showmwmber member={member} />
                                                                </div><br/>


                                                        </div>

                        <div class="container">
                                <div>
                                        <div>
                                                <div class="row py-3">

                                                        <div class="col-lg-4 col-sm-0 sidebar p-3 small_sidebar_hide">

                                                                <div class="d-flex flex-direction-row py-2">
                                                                        <div class="px-2">
                                                                                <input onChange={updateSearch} type="text" classNamae="w-100 px-2" placeholder="enter file name" />
                                                                        </div> 
                                                                        <div class="" onClick={getRelevantDocs}>
                                                                                <i class="fa fa-search" aria-hidden="true"></i>
                                                                        </div> 
                                                                </div>

                                                                <div className="py-1">
                                                                        <Searchresults searchresults={searchresults} />
                                                                </div> <br />


                                                                <h5 class="text-danger doc_single">docs manager</h5>
                                                                <Renderdocs chat={chat} />
                                                                <br/>


                                                                {/*<div class="invite_link text-center p-2">
                                                                        <h5>Add TeamMates</h5>
                                                                        <div class="p-large text-danger">
                                                                                https:://google.com/join-here
                                                                        </div>
                                                                </div><br/>*/}

                                                                <h5 class="text-danger doc_single">All Team Members</h5>
                                                                <div class="col">
                                                                        <Showmwmber member={member} />
                                                                </div><br/>
                                                        </div>

                                                        

                                                        <div class="col-lg-8 col-sm-12 chatbar p-3">
                                                                <h5>message manager</h5>
                                                                <div class="col">
                                                                        <Renderchat id={props.id} chat={chat}/>

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