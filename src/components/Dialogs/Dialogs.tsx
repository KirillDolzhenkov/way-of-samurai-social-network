import React, {ChangeEvent} from "react";
import styles from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsInitialStateType} from "../../redux/dialogs-reducer";
import { Redirect } from "react-router-dom";

//types:
export type DialogsPropsType = {
    dialogsPage: DialogsInitialStateType
    addMessage: (newMessageText: string) => void
    setNewMessageText: (newText: string) => void
    isAuth: boolean
}


//function component:
const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const state = props.dialogsPage; // state!!!

    let dialogElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messageElements = state.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>);

    const addMessageHandler = () => {
        if (state.newMessageText) {
            props.addMessage(state.newMessageText.trim());
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget?.value;
        props.setNewMessageText(newText);
    }
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addMessageHandler();
        }
    }


    if (!props.isAuth){ //auth Redirect!!!
        return <Redirect to={"/Login"}/>
    }

    return (
        <div className={styles.dialogsPage}>

            <div className={styles.dialogs}>
                {
                    dialogElements
                }
            </div>

            <div className={styles.messages}>
                {
                    messageElements
                }
                <div>
                    <hr/>
                    <textarea
                        value={state.newMessageText}
                        maxLength={100000}
                        onChange={onChangeHandler}
                        placeholder={"Write something"}
                        onKeyPress={onKeyPressHandler}
                    />
                    <span>
                        <button onClick={addMessageHandler}>Send</button>
                    </span>
                </div>
            </div>

        </div>
    )
}

export {
    Dialogs
}
