import React from 'react';
import billgates from '../assests/billgates.jpg';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

const Biography = () => {
    return (
        <div className="container-fluid">
            <div className="row border border-primary m-5">
                <div className="col-xl-6 col-lg-6 col-md-6 border-end">
                    <img
                        src={billgates}
                        alt="responsive webite"
                        className="img-fluid"
                    />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 mt-5">
                    <EditText
                        name="textbox1"
                        defaultValue="Bill Gates"
                        inputClassName="bg-light"
                        className="fw-bold fs-2"
                    />
                    <EditTextarea
                        defaultValue="William Henry Gates III (born October 28, 1955) is an American business magnate, software developer, investor, author, and philanthropist. He is a co-founder of Microsoft, along with his late childhood friend Paul Allen.[2][3] During his career at Microsoft, Gates held the positions of chairman, chief executive officer (CEO), president and chief software architect, while also being the largest individual shareholder until May 2014.[4] He was a major entrepreneur of the microcomputer revolution of the 1970s and 1980s."
                        rows={15}
                    />
                </div>
            </div>
        </div>
    );
};

export default Biography;
