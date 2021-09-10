import React , {useState , useEffect} from 'react';
import axios from 'axios';

const Answer = () =>{
const[answer , updateAnswer] = useState([]);
const[message , updateMessage] = useState("");

const getAnswer = () =>{
    axios.get("http://localhost:3004/answer")
    .then(response=>{
        updateAnswer(response.data.reverse());
    })
}

useEffect(()=>{
    getAnswer();
}, [true])

 const deleteAnswer = (pid) =>{
     var url = "http://localhost:3004/answer/"+pid;
     axios.delete(url).then(response=>{
         updateMessage("Answer Deleted Successfully");
         getAnswer();
     })
 }

    return(
            <div className="row">
                <div className="col-lg-12">
                    <div className="bg-white p-4 rounded">
                        <h3 className="text-center"> Answer List </h3>
                        <p className="text-center text-danger">{message}</p>
                        <table className = "table table-striped">
                            <thead>
                                <tr className="bg-light text-primary">
                                    <th>Id</th>
                                    <th> Answer </th>
                                    <th> Delete</th>
                                </tr>
                            </thead>
                            <tbody>    
                                {
                                    answer.map((ansinfo , index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{ansinfo.id}</td>
                                                <td>{ansinfo.answer}</td>
                                                <td>        
                                               
                        <button 
                            className="btn btn-danger" 
                            onClick={deleteAnswer.bind(this, ansinfo.id)}>
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

export default Answer;
