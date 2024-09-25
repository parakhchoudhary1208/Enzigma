import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../features/todoSlice';

const TodoForm = ({isTodo, onClose}) => {

    const dispatch = useDispatch();

    const [todo, setTodo] = React.useState({
        id: '',
        assignedTo: '',
        status: 'not-started',
        dueDate: '',
        priority: 'normal',
        description: '',
    });

    React.useEffect(() => {
        if (isTodo) {
            setTodo(isTodo);
        }
    }, [isTodo]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isTodo) {
            dispatch(updateTodo(todo));
        } else {
            dispatch(addTodo({ ...todo, id: Date.now() }));
        }
        onClose();
    };

    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="slds-modal slds-fade-in-open form-modal">
            <div className="slds-modal__container">
                <button
                    className="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse close-btn"
                    onClick={onClose}
                    title="Close"
                >
                    <svg className="slds-m-top_x-small" xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 520 520" fill="#fff"><path d="m310 254 130-131c6-6 6-15 0-21l-20-21c-6-6-15-6-21 0L268 212a10 10 0 0 1-14 0L123 80c-6-6-15-6-21 0l-21 21c-6 6-6 15 0 21l131 131c4 4 4 10 0 14L80 399c-6 6-6 15 0 21l21 21c6 6 15 6 21 0l131-131a10 10 0 0 1 14 0l131 131c6 6 15 6 21 0l21-21c6-6 6-15 0-21L310 268a10 10 0 0 1 0-14z"/></svg>
                    <span className="slds-assistive-text">Close</span>
                </button>
                <header className="slds-modal__header">
                    <h2 className="slds-text-heading_medium">{isTodo ? 'Edit Task' : 'New Task'}</h2>
                </header>
                <section className="slds-modal__content">
                    <form onSubmit={handleSubmit}>
                        <div className="flex">
                            <div className="slds-form-element slds-p-around_small slds-size_1-of-2">
                                <label className="slds-form-element__label">Assigned To</label>
                                <input
                                    type="text"
                                    className="slds-input"
                                    value={todo.assignedTo}
                                    onChange={(e) => setTodo({ ...todo, assignedTo: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="slds-form-element slds-p-around_small slds-size_1-of-2">
                                <label className="slds-form-element__label">Status</label>
                                <select
                                    className="slds-select"
                                    value={todo.status}
                                    onChange={(e) => setTodo({ ...todo, status: e.target.value })}
                                >
                                    <option value="not started">Not Started</option>
                                    <option value="in progress">In Progress</option>
                                    <option value="completed">Completed</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="slds-form-element slds-p-around_small slds-size_1-of-2">
                                <label className="slds-form-element__label">Due Date</label>
                                <input
                                    type="date"
                                    className="slds-input"
                                    value={todo.dueDate}
                                    min={today}
                                    onChange={(e) => setTodo({ ...todo, dueDate: e.target.value })}
                                />
                            </div>
                            <div className="slds-form-element slds-p-around_small slds-size_1-of-2">
                                <label className="slds-form-element__label">Priority</label>
                                <select
                                    className="slds-select"
                                    value={todo.priority}
                                    onChange={(e) => setTodo({ ...todo, priority: e.target.value })}
                                >
                                    <option value="low">Low</option>
                                    <option value="normal">Normal</option>
                                    <option value="high">High</option>
                                </select>
                            </div>
                        </div>
                        <div className="slds-form-element slds-p-around_small">
                            <label className="slds-form-element__label">Description</label>
                            <textarea
                                className="slds-textarea"
                                value={todo.description}
                                onChange={(e) => setTodo({ ...todo, description: e.target.value })}
                            />
                        </div>
                        <footer className="slds-modal__footer">
                            <button type="submit" className="slds-button slds-button_brand">
                                {isTodo ? 'Update' : 'Save'}
                            </button>
                            <button type="cancel" className="slds-button slds-button_neutral" onClick={onClose}>
                                Cancel
                            </button>
                        </footer>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default TodoForm