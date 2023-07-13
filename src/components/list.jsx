import ListItem from "./listItem";

function List(prop) {
    return (
        <ul className='to-do-container'>
        {prop.todo.length === 0 && 'Nothing on the list till now...'}
        {prop.todo.map( item => {

          return <ListItem item={item} key={item.id} toggleValue = {prop.toggleValue} deleteItem = {prop.deleteItem} editItem={prop.editItem}/>
        })}
        
        
      </ul>
    )
}

export default List;