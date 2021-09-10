import React , {useState , useEffect} from 'react';
import axios from 'axios';

const QuestionList = () =>{
const[question , updateQuestion] = useState([]);
const[message , updateMessage] = useState("");

const getQuestion = () =>{
    axios.get("http://localhost:3003/question")
    .then(response=>{
        updateQuestion(response.data.reverse());
    })
}

useEffect(()=>{
    getQuestion();
}, [true])

 const deleteQuestion = (pid) =>{
     var url = "http://localhost:3003/question/"+pid;
     axios.delete(url).then(response=>{
         updateMessage("Question Deleted Successfully");
         getQuestion();
     })
 }

    return(
            <div className="row">
                <div className="col-lg-12">
                    <div className="bg-white p-4 rounded">
                        <h3 className="text-center"> Question List </h3>
                        <p className="text-center text-danger">{message}</p>
                        <table className = "table table-striped">
                            <thead>
                                <tr className="bg-light text-primary">
                                    <th>Id</th>
                                    <th> Question </th>
                                    <th> Delete</th>
                                </tr>
                            </thead>
                            <tbody>    
                                {
                                    question.map((queinfo , index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{queinfo.id}</td>
                                                <td>{queinfo.question}</td>
                                                <td>        
                                               
                        <button 
                            className="btn btn-danger" 
                            onClick={deleteQuestion.bind(this, queinfo.id)}>
                            <i className="fa fa-trash"></i>
                        </button>
                                              </td>
                                             </tr> 
                                        )

                                    })
                            }
                            </tbody>
                          </table>   
                    </div>
                </div>
            </div>
    )
}

export default QuestionList;