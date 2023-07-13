


function ListItem(prop) {
    return (
        <li key={prop.item.id}>
                    <label>
                      <input type='checkbox' checked={prop.item.completed} onChange={e => prop.toggleValue(e.target.checked, prop.item.id)}/>{prop.item.title}
                    </label>
                    <button onClick={() => prop.deleteItem(prop.item.id)}>Delete</button>
                    <button onClick={() => prop.editItem(prop.item.id)}>Edit</button>
                  </li>
    )
}

export default ListItem;