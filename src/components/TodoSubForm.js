import React from 'react'

function TodoSubForm(params) {
    const subtodos = params.subtodos;
    return (
        <>
            {subtodos != "" ?

                <form className="col-12 col-lg-8 border">
                    <div className="sub-todo-header">
                        <span>{subtodos.text} Details</span>
                    </div>
                    <div className="p-2">
                        <label className="form-label">Quantity</label>
                        <input type="text" className="form-control" aria-describedby="emailHelp" />
                    </div>
                    <div className="p-2">
                        <label className="form-label">Quantity</label>
                        <input type="number" className="form-control" aria-describedby="emailHelp" />
                    </div>
                    <div className="p-2">
                        <label className="form-label">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
                :
                null}
        </>
    )
}

export default TodoSubForm;
