import React from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import store from '../../redux/redux-store';
import Dialogs from './Dialogs';




// const DialogsContainer = (props) => {




// 	return <StoreContext.Consumer>
// 		{store => {
// 			let state = store.getState().messagesPage;

// 			let onSendMessageClick = () => {
// 				store.dispatch(sendMessageCreator());
// 			}
// 			let onNewMessageChange = (body) => {
// 				store.dispatch(updateNewMessageBodyCreator(body));

// 			}
// 			return <Dialogs updateNewMessageBody={onNewMessageChange}
// 				sendMessage={onSendMessageClick}
// 				messagesPage={state}
// 			/>
// 		}
// 	}
// 	</StoreContext.Consumer>
// }



let mapStateToProps = (state) => {
	return {
		messagesPage: state.messagesPage
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: () => {
			store.dispatch(sendMessageCreator());
		},
		updateNewMessageBody: (body) => {
			store.dispatch(updateNewMessageBodyCreator(body));
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer