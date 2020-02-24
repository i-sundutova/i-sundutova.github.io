import React from 'react'

const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={"formControl " + (hasError ? "inputValidationError" : "")}>
            {props.children}

            {hasError && <span className="fieldValidationError">{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const InputText = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input type="text" {...input} {...restProps}/></FormControl>
}

export const InputPassword = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input type="password" {...input} {...restProps}/></FormControl>
}

export const InputEmail = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input type="email" {...input} {...restProps}/></FormControl>
}