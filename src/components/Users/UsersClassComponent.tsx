import React from "react";
import {UsersInitialStateType, UsersType} from "../../redux/users-reducer";
import axios from "axios";
import defaultSmallUserPhoto from "../../ assets/images/defaultSmallUserPhoto.png"
import styles from "./Users.module.css";

//types:
type UsersPropsType = {
    usersPage: UsersInitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number

    //callBackTypes:
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<UsersType>) => void
}

//class component:
class UsersClassComponent extends React.Component<UsersPropsType, any> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users/").then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {

        const state = this.props.usersPage; //state!!!

        let pagesCount = state.totalUsersCount / state.pageSize

        //pages for pagination:
        let pages = []
        for(let i =1; i<=pagesCount; i++){
            pages.push(i)
        }

        return (
            <div className={styles.items}>
                Users:
                <hr/>

                {/*paginator:*/}
                <div>
                    {
                        pages.map(p=><span>{p}</span>)
                    }
                </div>
                {
                    state.users.map(u => <div key={u.id}>
                        <div>
                            <img src={
                                u.photos.small !== null
                                    ? u.photos.small
                                    : defaultSmallUserPhoto //defaultAsset
                            }/>
                        </div>
                        <div><b>{u.name}</b></div>
                        <div>{"Write message"}</div>
                        <div>
                            {
                                u.followed
                                    ?
                                    <button onClick={() => {
                                        this.props.unFollow(u.id);
                                    }}>unfollow</button>
                                    :
                                    <button onClick={() => {
                                        this.props.follow(u.id);
                                    }}>follow</button>
                            }
                        </div>

                        {/*description of location:*/}
                        <div>{"country:"}
                            {
                                u.location?.country //missed value
                                    ? u.location.country
                                    : " - "
                            }
                        </div>
                        <div>{"city:"}
                            {
                                u.location?.city //missed value
                                    ? u.location.city
                                    : " - "
                            }
                        </div>

                        <hr/>
                    </div>)
                }
            </div>
        )
    }
}

export {
    UsersClassComponent
}