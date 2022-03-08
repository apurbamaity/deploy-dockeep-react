import React, { Component,useState,useEffect } from "react";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";
import Docs from './Docs'
import Chatbox from './Chatbox'
import './Insideteam.css'

const Docsrender = (props) =>{

        console.log(props.d.name)

        if(props.d.name == null){
                return(
                        <div className="text-danger"></div>
                )
        }else{
                return(
                        <div class="single_doc px-2">
                                <Docs doc={props.d} />
                        </div>
                )
        }

}
const Chatrender = (props) =>{
        if(props.d.msg === "no_message_chossen"){
                return(
                        <div className="text-danger"></div>
                )
        }else{
                return(
                        <div class="">
                                {props.d.msg}
                        </div>
                )
        }
}

const Renderchat = (props) =>{

        console.log(props.chat+"here is docssss chat")
        const url = process.env.REACT_APP_SERVER_URL
        const deletechat = (chatid) =>{
                console.log(chatid)   //print id of chat which need to be deleted
                axios.get(url+"/deletechat/"+chatid+"/"+localStorage.getItem("userid"))
                .then( (response) =>{

                        if(response.data === 200){
                                toast.success("⛔ message deleted successfully",{
                                        position:"top-center",autoClose:1000,
                                })
                                props.getallchat()
                        }else if(response.data === 400){
                                toast.error("⛔you can't delete this chat",{
                                        position:"top-center",autoClose:1000,
                                })
                                props.getallchat()
                        }
                },(error)=>{
                        console.log(error)
                })
        }

        



        return(

                <>

                {/*<Docs doc={null} />*/}

                        {props.chat.map((d)=>(
                                <div class="row doc_single mt-3">
                                                                                <div class="col">
                                                                                        <div class="row sender p-1">
                                                                                                <div class="d-flex flex-row justify-content-between">
                                                                                                        <div class="">
                                                                                                                <span>🧔🏻</span>
                                                                                                                <span class="h6 px-2">{d.username}</span>
                                                                                                        </div>

                                                                                                        <div class="">
                                                                                                                
                                                                                                                <span onClick={() => deletechat(d.id)}class="trash px-2">📥delete</span>
                                                                                                                <span class="h6 px-2 text-danger">{d.time}</span>
                                                                                                        </div>
                                                                                                        
                                                                                                </div>
                                                                                        </div>
                                                                                        <div class="documrnt d-flex flex-row flex-wrap mt-3">
                                                                                                <div class="px-2">
                                                                                                        <Docsrender d={d} />
                                                                                                        {/*<Docs doc={d} />*/}
                                                                                                        
                                                                                                </div> 
                                                                                        </div>
                                                                                        <div class="row">
                                                                                                <span class="font-weight-bolder p-large">
                                                                                                        
                                                                                                        <Chatrender d={d} />
                                                                                                </span>
                                                                                        </div>
                                                                                        {/*<div class="row">
                                                                                                <div class="d-flex flex-row">
                                                                                                        <div class="px-2">
                                                                                                                <div class="single_doc bg-success text-white p-1">
                                                                                                                <i class="fa fa-thumbs-up" aria-hidden="true"></i> 100
                                                                                                                </div>
                                                                                                        </div>
                                                                                                        <div class="px-2 ">
                                                                                                                <div class="single_doc bg-danger text-white p-1">
                                                                                                                <i class="fa fa-thumbs-down" aria-hidden="true"></i> 100
                                                                                                                </div>
                                                                                                        </div>
                                                                                                        
                                                                                                </div>
                                                                                        </div>*/}

                                                                                </div>
                                                                                
                                                                        </div>
     
                ))}

                <div class="w-100 container-fluid">
                        
                </div>
                


                </>
        )
}
export default Renderchat;
