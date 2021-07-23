import React from "react";
import {ContentArea} from "./ContentArea/ContentArea";
import styles from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, AppStateType, StoreType} from "../../redux/store";
import {RootReduxStoreType} from "../../redux/redux-store";


type ProfilePropsType = {
    /*state: AppStateType*/
    dispatch: (action: ActionType) => any

    store: RootReduxStoreType
}

const Profile: React.FC<ProfilePropsType> = (props) => {



    return (
        <div className={styles.profile}>
            <ProfileInfo/>
            <ContentArea
               /* state={props.state.profilePage}*/
                dispatch={props.dispatch}

                store={props.store}
            />
        </div>
    )
}

export {
    Profile
}