import React from 'react'
import { compose } from 'redux'
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom';
import { localizationCheck } from '../../hoc/localization';
import emailjs from 'emailjs-com';
import { Languages } from '../../utils/Languages';
import { sendMailActionCreator, sendMailSuccessActionCreator, sendMailFailureActionCreator } from '../../reducers/contactsReducer';
import Contacts from "./Contacts"


class ContactsContainer extends React.Component {
    sendContactEmail = async (data) => {
        await this.props.sendMail();
        await emailjs.send('gmail', 'template_profile_contact_me', data, 'user_tU0PKMcaJmjVUQ92i4GOQ')
            .then(() => this.props.sendMailSetSuccess(), () => this.props.sendMailSetFailure());
    }

    render() {
        let enDictionary = {
            pageName: "Contact me",
            name: "Name",
            email: "Email",
            subject: "Subject",
            message: "Message",
            sendText: "Send",
            sendMailSuccessAlert: "Success! Thank you for your time.",
            sendMailFailureAlert: "Oops! Something is wrong. Please try again."
        };
        let uaDictionary = {
            pageName: "Зв'яжіться зі мною",
            name: "Ім'я",
            email: "Email",
            subject: "Тема",
            message: "Повідомлення",
            sendText: "Відправити",
            sendMailSuccessAlert: "Успіх! Дякую за потрачений час.",
            sendMailFailureAlert: "Упс! Щось пішло не так. Спробуйте ще раз, будь ласка."
        };

        switch (this.props.currentLanguage) {
            case Languages.UA: return <Contacts dictionary={uaDictionary} sendContactEmail={this.sendContactEmail}
                sendMailInProgress={this.props.sendMailInProgress} sendMailIsSuccessful={this.props.sendMailIsSuccessful} />;

            default: return <Contacts dictionary={enDictionary} sendContactEmail={this.sendContactEmail}
                sendMailInProgress={this.props.sendMailInProgress} sendMailIsSuccessful={this.props.sendMailIsSuccessful} />
        }
    }
}

const mapStateToProps = (state) => {
    return {
        currentLanguage: state.siteLanguage.currentLanguage,
        sendMailInProgress: state.contacts.mailRequestInProgress,
        sendMailIsSuccessful: state.contacts.mailRequestIsSuccessful
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMail: () => dispatch(sendMailActionCreator()),
        sendMailSetSuccess: () => dispatch(sendMailSuccessActionCreator()),
        sendMailSetFailure: () => dispatch(sendMailFailureActionCreator())
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    localizationCheck,
    withRouter
)(ContactsContainer);