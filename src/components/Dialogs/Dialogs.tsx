import React, {ChangeEvent, createRef} from "react";
import styles from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionType, AppStateType} from "../../redux/store";

//types:
type DialogsPropsType = {
    state: AppStateType
    dispatch: (action: ActionType) => AppStateType | undefined
}

//custom ActionCreators:
const AddMessageAC = (newMessage: string) => {
    return {type: "ADD-MESSAGE", newMessage} as const
}
const SetNewMessageTextAC = (newText: string) => {
    return {type: "SET-NEW-MESSAGE-TEXT", newText} as const
}

//FC:
const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const testButtonRef: any = createRef()

    const onClickHandler = () => {
        let newMessage = testButtonRef.currentTarget?.value;
        props.dispatch(AddMessageAC(newMessage));
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget?.value;
        props.dispatch(SetNewMessageTextAC(newText));
    }

    const dialogElements = props.state.dialogPage?.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messageElements = props.state.dialogPage?.messages.map(m => <Message message={m.message} id={m.id}/>);

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
                        value={props.state.dialogPage?.newMessageText}
                        onChange={onChangeHandler}
                        ref={testButtonRef}
                        placeholder={"Write something"}
                    />
                    <span>
                        <button onClick={onClickHandler}>send</button>
                    </span>
                </div>
            </div>

        </div>
    )
}

export {
    Dialogs
}