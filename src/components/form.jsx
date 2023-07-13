

function Form(prop) {

    //

    function handleSubmit(e) {
        e.preventDefault();
        //setTodo([...todo, { id : crypto.randomUUID, title : newItem, completed : false }])    // todo -> initial value not the current one
    
        prop.propName(prop.newItem);
    
        prop.setnewItem("")
    }

    return (
        <form onSubmit={handleSubmit} className='form-body'>
        <label htmlFor='add-item-form'></label>
        <input type='text' id='add-item-form' placeholder='Add item here' value={prop.newItem} onChange={ e => prop.setnewItem(e.target.value)}></input>
        <button type='button'>Add</button>
      </form>
    )
}

export default Form;