import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../features/todoSlice';
import TodoForm from './TodoForm';
import TodoDelete from './TodoDelete';

const TodoTable = () => {
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();
    const [isFormOpen, setIsFormOpen] = React.useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
    const [todoToEdit, setTodoToEdit] = React.useState(null);
    const [todoToDelete, setTodoToDelete] = React.useState(null);

    const openAddForm = () => {
        setTodoToEdit(null);
        setIsFormOpen(true);
    };
    const openEditForm = (todo) => {
        setTodoToEdit(todo);
        console.log('Todos:', todos); 
        console.log(todo)
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
        setTodoToEdit(null);
    };

    const openDeleteModal = (todo) => {
        setTodoToDelete(todo);
        setIsDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setTodoToDelete(null);
    };

    const handleDeleteConfirm = () => {
        if (todoToDelete) {
            dispatch(deleteTodo(todoToDelete.id));
            closeDeleteModal();
        }
    };

    return (
        <>
            <header className="slds-box flex items-center justify-between">
                <div className="flex flex-col">
                    <div className="flex items-center">
                        <span className="slds-icon_container slds-icon-standard-product-required slds-m-right_x-small">
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 1000 1000" fill="#fff"><path fillRule="evenodd" d="M338 763h-40a20 20 0 0 1-20-20v-40a20 20 0 0 1 20-20h40a20 20 0 0 1 20 20v40a19 19 0 0 1-20 20Zm0-179h-40a20 20 0 0 1-20-20v-40a20 20 0 0 1 20-20h40a20 20 0 0 1 20 20v40a19 19 0 0 1-20 20Zm138-321-22-21a14 14 0 0 0-21 0L301 373l-54-52a14 14 0 0 0-21 0l-21 21a14 14 0 0 0 0 21l73 74a30 30 0 0 0 43 0l155-152a17 17 0 0 0 0-22Z"/><rect x="439" y="683" width="361" height="80" rx="20" ry="20"/><rect x="439" y="504" width="361" height="80" rx="20" ry="20"/><rect x="499" y="326" width="301" height="80" rx="20" ry="20"/></svg>
                        </span>
                        <div className="flex flex-col">
                            <h1 className="slds-text-heading_large">Tasks</h1>
                            <p className="slds-m-left_xx-small">All Tasks</p>
                        </div>
                    </div>
                    <p className="slds-m-top_x-small">{todos.length} records</p>
                </div>
                <div>
                    <button className="slds-button slds-button_brand add-btn" onClick={() => openAddForm()}>
                        New Task
                    </button>
                </div>
            </header>
        
            <div className="slds-scrollable">
                {todos.length > 0 ? (
                    <table className="slds-table slds-table_bordered slds-table_cell-buffer">
                        <thead>
                            <tr>
                                <th scope="col">
                                    <div className="table-header" title="ID">ID</div>
                                </th>
                                <th scope="col">
                                    <div className="table-header" title="Assigned To">Assigned To</div>
                                </th>
                                <th scope="col">
                                    <div className="table-header" title="Status">Status</div>
                                </th>
                                <th scope="col">
                                    <div className="table-header" title="Due Date">Due Date</div>
                                </th>
                                <th scope="col">
                                    <div className="table-header" title="Priority">Priority</div>
                                </th>
                                <th scope="col">
                                    <div className="table-header" title="Description">Description</div>
                                </th>
                                <th scope="col">
                                    <div className="table-header" title="Actions">Actions</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.map((todo, index) => (
                            <tr key={todo.id}>
                                <td>
                                    <div className="slds-truncate" title={todo.id}>{index++}</div>
                                </td>
                                <td>
                                    <div className="slds-truncate text-capitalize" title={todo.assignedTo}>{todo.assignedTo}</div>
                                </td>
                                <td>
                                <div className="slds-truncate text-capitalize" title={todo.status}>{todo.status}</div>
                                </td>
                                <td>
                                <div className="slds-truncate" title={todo.dueDate}>{todo.dueDate}</div>
                                </td>
                                <td>
                                <div className="slds-truncate text-capitalize" title={todo.priority}>{todo.priority}</div>
                                </td>
                                <td>
                                <div className="slds-truncate" title={todo.description}>{todo.description}</div>
                                </td>
                                <td>
                                    <button className="slds-button slds-button_neutral" onClick={() => openEditForm(todo)}>
                                        Edit
                                    </button>
                                    <button className="slds-button slds-button_destructive" onClick={() => openDeleteModal(todo)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-lg flex justify-center slds-m-around_xx-large slds-m-around_xx-large">No Task found</p>
                )}

            </div>
            {isFormOpen && <TodoForm isTodo={todoToEdit} onClose={closeForm} />}
            {isDeleteModalOpen && (
                <TodoDelete
                    message={`Do you want to delete the task: "${todoToDelete?.id}"?`}
                    onConfirm={handleDeleteConfirm}
                    onCancel={closeDeleteModal}
                />
            )}
        </>
    )
}

export default TodoTable