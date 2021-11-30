import react,{useState,useEffect} from 'react';
import axios from 'axios'
import './Home.css'


const Teams = (props) =>{

        const data = props.team


        if(props.team == ""){
                return(
                        <>
                                <h1 class="text-center text-success">all your teams will shown here</h1>
                        </>
                )
        }else{
                return(

                <>
                
                {data.map((d)=>(
                    /*<Sing name={d.name} link={d.imglink} />*/
                    <>
                        
                        <div class="col-lg-3 col-md-4 col-12 p-3">
                                <div class="D p-2">
                                        <a href={"/team/"+d.teamid+"#comehere"}><div class="">
                                                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                                style={{width:"100%"}} />
                                        </div></a>
                                        <div class="text-center">
                                                <span class="p-large">{d.teamname}</span><br/>
                                                <div class="unread p-large">TEAM KEY </div>
                                                <div class="unread h4 text-white">{d.teamid}</div>
                                        </div>
                                </div>
                                                                
                        </div>
                    </>
                ))}  

                </>

                
                )
        }



}




const Hero =()=>{


        const [team,setTeam] = useState([]);
        const userid = localStorage.getItem("userid")

        useEffect(() => {
                
                if(userid != null){


                        const url = process.env.REACT_APP_SERVER_URL

                        const teamname = localStorage.getItem('userid')
                //console.log(teamname)
                        axios.get(url+"/getallteam/"+teamname)
                        .then( (response) => {
                                console.log(response)
                                if(response.data == ""){
                                        console.log("yah uits nulll")
                                }
                                setTeam(response.data)
                        },(error)=>{

                        })



                }
                

        },[]);


        return(
                <>

                        <div class="Hero mt-5">


                                <div class="container">
                                        <div class="row">
                                                
                                                <div class="col-lg-6 col-md-6 col-12 text-danger px-5 image">
                                                        <img 
                                                        src="https://www.notion.so/cdn-cgi/image/format=auto,width=640,quality=100/front-static/pages/product/home-page-hero-refreshed-v3.png"
                                                         />
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-12 py-5">
                                                        <h1 class="text-danger head_text">ONE WORKSPACE. EVERY TEAM.</h1>
                                                        <div class="p-large head_para">WE ARE MORE THAN A DOC TRY IT FREE TODAY OR JOIN A EXISTING TEAM</div>
                                                        <div class="py-3 head_btn">
                                                                <a href="/joinorcreate#join"><input type="submit" class="btn w-100 btn-info" value="join a team" /></a>
                                                        </div>
                                                </div>
                                         </div>
                                </div>


                                {/*MAIN DIV --2 */}
                                <div class="container py-lg-3 py-0">
                                        <div class="B py-3">
                                                <div class="d-flex justify-content-center py-3">
                                                        <div class="A"> TRUSTED BY TEAMS AT</div>
                                                </div>
                                                <div class="d-flex flex-row justify-content-center">
                                                        <div class="px-2 text-danger">PIXER</div>
                                                        <div class="px-2 text-info">TRAVELPARK</div>
                                                        <div class="px-2 text-success">SPOTIFY</div>
                                                </div>


                                        </div>
                                </div><br/><br/><br/>


                                {/* MAIN DIV -- 4*/}

                                <div class="container p-2">
                                        <div class=" B1  p-2">

                                                <div class="explore_teams text-center h3 py-3">
                                                        EXPLORE ALL YOUR TEAMS
                                                </div>
                                                <div class=" row" id="team">


                                                        <Teams team={team}/>


                                                        {/*<div class="col-lg-3 col-md-4 col-12 p-3">
                                                                <a href="/team/01"><div class="D p-2">
                                                                        <div class="">
                                                                                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                                                                style={{width:"100%"}} />
                                                                        </div>
                                                                        <div class="text-center">
                                                                                <span class="p-large">team name</span><br/>
                                                                                <div class="unread p-large">40 undone tasks</div>
                                                                        </div>
                                                                </div></a>
                                                                
                                                        </div>
                                                         <div class="col-lg-3 col-md-4 col-12 p-3">
                                                                <a href="/team/02"><div class="D p-2">
                                                                        <div class="">
                                                                                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                                                                style={{width:"100%"}} />
                                                                        </div>
                                                                        <div class="text-center">
                                                                                <span class="p-large">team name</span><br/>
                                                                                <div class="unread p-large">40 undone tasks</div>
                                                                        </div>
                                                                </div></a>
                                                                
                                                        </div>
                                                        <div class="col-lg-3 col-md-4 col-12 p-3">
                                                                <a href="/team/03"><div class="D p-2">
                                                                        <div class="">
                                                                                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                                                                style={{width:"100%"}} />
                                                                        </div>
                                                                        <div class="text-center">
                                                                                <span class="p-large">team name</span><br/>
                                                                                <div class="unread p-large">40 undone tasks</div>
                                                                        </div>
                                                                </div></a>
                                                                
                                                        </div>
                                                        <div class="col-lg-3 col-md-4 col-12 p-3">
                                                                <a href="/team/04"><div class="D p-2">
                                                                        <div class="">
                                                                                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                                                                style={{width:"100%"}} />
                                                                        </div>
                                                                        <div class="text-center">
                                                                                <span class="p-large">team name</span><br/>
                                                                                <div class="unread p-large">40 undone tasks</div>
                                                                        </div>
                                                                </div></a>
                                                                
                                                        </div>*/}
                                                </div>
                                        </div>
                                </div>


                                {/* MAIN DIV -- 3*/}
                                <div class="container py-lg-5 py-3 main_div">
                                        <div class="inn">
                                                <div class="row C">
                                                       
                                                        <div class="col-lg-6 col-md-6">
                                                                <img src="https://media.istockphoto.com/vectors/happy-young-employees-giving-support-and-help-each-other-vector-id1218490893?k=20&m=1218490893&s=612x612&w=0&h=svJxkZEFiciFHufK4LNn13TpNip1cVPW9Ig0Ahuugqs="
                                                                />
                                                        </div>
                                                        <div class="col-lg-6 col-md-6" style={{position: 'relative'}}>
                                                                <div style={{/*position: 'absolute' , top:"50%"*/}} class="h-100 d-flex justify-content-center align-items-center">
                                                                        <div class="h4">

                                                                                YOUR ALL TEAMS WILL BE SHOWN HERE..<br/><br/>
                                                                                <a href="/joinorcreate#join"><input type="submit" class="btn btn-success w-100 " value="join a team" /></a><br/><br/>
                                                                                <a href="/joinorcreate#create"><input type="submit" class="btn btn-warning w-100 " value="create a team" /></a>
                                                                                </div><br/>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>







                        </div>
                        



                </>
        )
}

export default Hero