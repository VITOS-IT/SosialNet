import React from "react";
import styles from "./FormsContlos.module.css"

export const Textarea = ({input, meta, ...props}) =>{
    const  hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error: '')}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )

}