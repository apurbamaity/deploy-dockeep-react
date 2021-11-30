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
                        <div className="text-danger">no file choosen</div>
                )
        }else{
                return(
                        <Docs doc={props.d} />
                )
        }

}

const Renderchat = (props) =>{

        console.log(props.chat+"here is docssss chat")

        



        return(

                <>

                {/*<Docs doc={null} />*/}

                        {props.chat.map((d)=>(
                                <div class="row doc_single m-1">
                                                                                <div class="col">
                                                                                        <div class="row sender p-1">
                                                                                                <div class="d-flex flex-row justify-content-between">
                                                                                                        <div class="">
                                                                                                                <span><i class="fa fa-user-circle" aria-hidden="true"></i></span>
                                                                                                                <span class="h6 px-2">{d.username}</span>
                                                                                                        </div>

                                                                                                        <div class="">
                                                                                                                
                                                                                                                <span class="h6 px-2 text-danger">{d.time}</span>
                                                                                                        </div>
                                                                                                        
                                                                                                </div>
                                                                                        </div>
                                                                                        <div class="documrnt d-flex flex-row flex-wrap mt-3">
                                                                                                <div class="px-2 single_doc">
                                                                                                        <Docsrender d={d} />
                                                                                                        {/*<Docs doc={d} />*/}
                                                                                                        
                                                                                                </div> 
                                                                                        </div>
                                                                                        <div class="row">
                                                                                                <span class="font-weight-bolder p-large">
                                                                                                        {d.msg}
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
