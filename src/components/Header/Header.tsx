import React from "react";
import {NavLink} from "react-router-dom";

import styles from "./Header.module.css";
import logo1 from "../../assets/images/logo_part_1.png";
import logo2 from "../../assets/images/logo_part_2.png";

//types:
type HeaderPropsType = {
    isAuth: boolean
    login: null | string
    logoutUserThunk: () => void
}

//functional component:
const Header: React.FC<HeaderPropsType> = (props) => {

    const {
        isAuth,
        login,
        logoutUserThunk,
    } = props;

    //logout request:
    const logout = () => {
        logoutUserThunk();
    }

    return (
        <div className={styles.header}>

            <NavLink to={"/news"} className={styles.logoArea}>
                <div>
                    <img src={logo1} alt="logoPart1"/>
                </div>
                <div>
                    <img src={logo2} alt="logoPart2"/>
                </div>
            </NavLink>
            <div className={styles.loginBlock}>
                {
                    isAuth
                        ? <div className={styles.items}>
                            <div>
                                {/*<img src={                    //<-- no photo yet
                                    props.photos.small !== null
                                        ? props.photos.small
                                        : defaultSmallUserPhoto //defaultAsset
                                }/>*/}
                            </div>
                            <div>{login} </div>
                            <NavLink to={"/login"} onClick={logout}>Logout</NavLink>
                        </div>
                        : <div className={styles.items}>
                            <NavLink to={"/login"}>Login </NavLink>
                            <NavLink to={"/login"}>Sign up </NavLink>
                        </div>
                }
            </div>
        </div>
    )
}

export {
    Header
}