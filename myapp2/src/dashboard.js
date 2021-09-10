import React , {useState , useEffect} from 'react';
import {Link , Switch , Route} from 'react-router-dom';
import QuestionList from './questionlist';
import Question from './question';
import Answer from './answer';

const Dashboard = () =>{

    return(
        <div className="container mt-2">
            <div className="row mb-5">
                <div className="col-lg-5 text-white text-center">
                    <h2> <i className="fa fa-users"></i> My App </h2>
                    <small> <i className="fa fa-handshake-o"></i> You are Welcome </small>
                </div>
                <div className="col-lg-7 text-end pt-2">
                    <div className="btn-group">
                        <Link className="btn btn-light" to="/dashboard"> 
                            <i className="fa fa-home"></i> Dashboard 
                        </Link>
                        <Link className="btn btn-light" to="/dashboard/question"> 
                            <i className="fa fa-plus"></i> Ask Question
                        </Link>
                        <Link className="btn btn-light" to="/dashboard/answer"> 
                            <i className="fa fa-plus"></i> Add Answer
                        </Link>
                        <button className="btn btn-warning btn-sm" onClick={Logout}> 
                        <i className="fa fa-handshake-o"></i> Welcome {localStorage.getItem("name")}  - <i className="fa fa-power-off"></i> Logout 
                        </button>
                    </div>
                </div>
            </div>
            <Switch>
                <Route exact path="/dashboard" component={QuestionList}/>
                <Route exact path="/dashboard/question" component={Question}/>
                <Route exact path="/dashboard/answer" component={Answer}/>
            </Switch>
        </div>
    );
}

const Logout = () =>{
    localStorage.clear() // to clean name, userid and all other data from localstorage
    window.location.href="http://localhost:3000/#/";
    window.location.reload();
}

export default Dashboard;
