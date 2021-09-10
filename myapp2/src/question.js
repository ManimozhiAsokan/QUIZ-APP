import React, { useState } from 'react';
import axios from 'axios';

const Question = () => {
    const [question, processQuestion] = useState("");
    const [message, processMessage] = useState("");

    const save = () => {
        var url = "http://localhost:3003/question";
        var data = {
            "question": question,
        };
        axios.post(url , data).then(response=>{
            processMessage(question + " Save Successfully !")
        })
    }

    return (
        <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6 bg-white p-4 rounded">
                <h3 className="text-center text-primary"> Ask Question </h3>
                <p className="text-center text-danger">{message}</p>
                <div className="mb-3">
                    <label> Enter Question</label>
                    <input type="text" className="form-control"
                        onChange={obj => processQuestion(obj.target.value)} />
                </div>
                <div className="text-center">
                    <button className="btn btn-primary" onClick={save}>Save Question</button>
                </div>
            </div>
            <div className="col-lg-3"></div>
        </div>
    )
}

export default Question;