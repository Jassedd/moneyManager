import { Component } from "react";

function InputField(props) {
    return(
        <div>
            <input
            id={props.id}
            type={props.type}
            value= {props.value}
            placeholder={props.placeholder}
            className={props.className}
            onChange={props.onChange}
            />
        </div>
    );

};

export default InputField;