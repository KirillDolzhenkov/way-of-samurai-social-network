import React, {ChangeEvent, createRef} from "react";
import styles from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionType, RootReduxStoreType} from "../../redux/redux-store";
import { SetNewMessageTextAC } from "../../redux/dialogs-reducer";

//types:
type DialogsPropsType = {
    dispatch: (action: ActionType) => void
    store: RootReduxStoreType
}

//FC:
const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const state = props.store.getState().dialogPage; // !!!
    const testButtonRef: any = createRef();

    const onClickHandler = () => {
        let newMessage = testButtonRef.currentTarget?.value;
        props.dispatch(AddMessageAC(newMessage));

    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget?.value;
        props.dispatch(SetNewMessageTextAC(newText));
    }

    const dialogElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messageElements = state.messages.map(m => <Message message={m.message} id={m.id}/>);

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

function AddMessageAC(newMessage: any): ActionType {
    throw new Error("Function not implemented.");
}
