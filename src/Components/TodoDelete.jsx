import React from 'react'

const TodoDelete = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="slds-modal slds-fade-in-open form-modal">
            <div className="slds-modal__container">
                <header className="slds-modal__header delete-header">
                    <button
                        className="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse close-btn"
                        onClick={onCancel}
                        title="Cancel"
                    >
                        <svg className="slds-m-top_x-small" xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 520 520" fill="#fff"><path d="m310 254 130-131c6-6 6-15 0-21l-20-21c-6-6-15-6-21 0L268 212a10 10 0 0 1-14 0L123 80c-6-6-15-6-21 0l-21 21c-6 6-6 15 0 21l131 131c4 4 4 10 0 14L80 399c-6 6-6 15 0 21l21 21c6 6 15 6 21 0l131-131a10 10 0 0 1 14 0l131 131c6 6 15 6 21 0l21-21c6-6 6-15 0-21L310 268a10 10 0 0 1 0-14z"/></svg>
                        <span className="slds-assistive-text">Close</span>
                    </button>
                    <h2 className="slds-text-heading_medium">Confirmation</h2>
                </header>
                <section className="slds-modal__content slds-p-around--large">
                    <p className="delete-msg">{message}</p>
                </section>
                <footer className="slds-modal__footer">
                    <button className="slds-button slds-button_neutral" onClick={onCancel}>
                        Cancel
                    </button>
                    <button className="slds-button slds-button_destructive" onClick={onConfirm}>
                        Confirm
                    </button>
                </footer>
            </div>
        </div>
    )
}

export default TodoDelete