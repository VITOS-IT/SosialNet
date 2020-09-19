import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControl/FormsContlos";


const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo((props) => {

    console.log("RENDER YO");
    let postsElement = props.postsData.map(p => <Post message={p.message} likes={p.likesCount}/>);


    const onSubmit = (value) =>{
        props.addPost(value.newPostText);
    }

    return <div>

        <div className={s.newPost}>
            <h3>My posts</h3>
            <AddNewPostReduxForm onSubmit={onSubmit}/>
        </div>

        <div className={s.item}>
            posts
        </div>
        {postsElement}
    </div>


});
const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'print your post'}
                       name={'newPostText'}
                       validate={[required, maxLength10]}
                       component={Textarea}/>
            </div>
            <div>
                <button >Add post</button>
            </div>
        </form>)
}

const AddNewPostReduxForm = reduxForm({form: 'addPost'})(AddNewPostForm)

export default MyPosts;