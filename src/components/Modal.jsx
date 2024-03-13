import React from 'react'
import { useDispatch } from 'react-redux';
import { editTodo } from '../redux/actions/todoActions';
const Modal = ({ todo, close }) => {
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        const updated = { ...todo, text: e.target[1].value }

        dispatch(
            editTodo(updated)
        )
        close()

    }
    return (
        <div className="modal d-block text-black  bg-black bg-opacity-75  " tabindex="-1">
            <div className="modal-dialog  modal-dialog-centered ">
                <div className="modal-content">
                    <form onSubmit={handleSubmit}>
                        <div className="modal-header">


                            <h5 className="modal-title">

                                Todo yu Düzenle

                            </h5>

                            <button
                            onClick={close}
                            type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body d-flex flex-column  ">
                            <label htmlFor="">Yeni ismi belirle:</label>

                            <input
                                className='bg-transparent text-black  '
                                type="text"
                                defaultValue={todo.text} />
                        </div>

                        <div className="modal-footer">

                            <button
                                onClick={close}
                                type="button"
                                className="btn btn-secondary" data-bs-dismiss="modal">

                                Kapat

                            </button>

                            <button

                                type="submit" className="btn btn-primary">
                                Kaydet
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal