import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {authLogin} from "../../../redux/auth-reducer";


const MyPosts = (props) => {


    let postsElement = props.postsData.map(p => <Post message={p.message} likes={p.likesCount}/>);

    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();

    };

    let onPostChange = () => {
        let body = newPostElement.current.value;
        props.updateNewPostText(body);
    }
    const onSubmit = (formData) =>{
        console.log(formData);

    }
    return <div>

        <div className={s.newPost}>
            <h3>My posts</h3>
            <div><textarea ref={newPostElement} value={props.newPostT} onChange={onPostChange}/></div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <AddPostReduxForm onSubmit={onSubmit}/>
        </div>

        <div className={s.item}>
            posts

        </div>
        {postsElement}


    </div>


}
const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'print your post'} name={'newPost'} component={'input'}/>
            </div>
            <div>
                <button >Add post</button>
            </div>
        </form>)
}

const AddPostReduxForm = reduxForm({form: 'addPost'})(AddPostForm)

export default MyPosts;