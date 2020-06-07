import React from "react";
import styles from './users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://download-cs.net/steam/avatars/3412.jpg',
                followed: true,
                fullName: 'Dmitriy',
                status: 'Hi, i"m boss',
                location: {sity: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://download-cs.net/steam/avatars/3412.jpg',
                followed: false,
                fullName: 'Vitos',
                status: 'Student boss',
                location: {sity: 'Kam-Pod', country: 'Ukraine'}
            },
            {
                id: 3, photoUrl: 'https://download-cs.net/steam/avatars/3412.jpg',
                followed: true, fullName: 'Sasha', status: 'Student', location: {sity: 'Moscou', country: 'Russia'}
            }
        ])
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div><img src={u.photoUrl} className={styles.userPhoto}/></div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.sity}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}
export default Users