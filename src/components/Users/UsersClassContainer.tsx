import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";

import {
    /*follow,*/
    followThunkCreator,
    getUsersThunkCreator,
    setCurrentPage,
    /*setFollowingProgress,*/
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    /*unFollow,*/
    unFollowThunkCreator,
    UsersInitialStateType,
    UsersType
} from "../../redux/users-reducer";
import {usersAPI} from "../../api/api";
import {AppStateType} from "../../redux/redux-store";
import {Preloader} from "../common/Preloader/Preloader";
import preloaderStyle from "../common/Preloader/Preloader.module.css"
import {Users} from "./Users";

//types:
type mapStateToPropsType = {
    usersPage: UsersInitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: any[]
}

type mapDispatchToPropsType = {
   /* follow: (id: number) => void
    unFollow: (id: number) => void*/
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
  /*  setFollowingProgress: (toggleFollowingProgress: boolean, id: number) => void*/

    //thunkTypes:
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    unFollowThunkCreator: (userId: number) => void
    followThunkCreator: (userId: number) => void
}
type UsersClassContainerPropsType = mapStateToPropsType & mapDispatchToPropsType;

//class container component:
class UsersClassContainer extends React.Component<UsersClassContainerPropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize); //usersAPI.getUsers()
    }

    //onPageChanged Fn for pagination:
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false);
                this.props.setUsers(data.items);
            });
    }

    render() {
        return (
            <>
                {
                    this.props.isFetching
                        ? <div className={preloaderStyle.main}><Preloader/></div>
                        : <Users
                            {...this.props}
                            onPageChanged={this.onPageChanged}
                        />
                }
            </>
        )
    }
}

//container component:
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


//HOC:
const UsersContainer = compose<React.FC>(
    connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
        {
           /* follow,*/
           /* unFollow,*/
            setUsers,
            setCurrentPage,
            setTotalUsersCount,
            setIsFetching,
            /*setFollowingProgress,*/

            //thunkCreators:
            getUsersThunkCreator,
            unFollowThunkCreator, //need rename to unFollow
            followThunkCreator  //need rename to follow
        }),
)(UsersClassContainer);

export {
    UsersContainer
}