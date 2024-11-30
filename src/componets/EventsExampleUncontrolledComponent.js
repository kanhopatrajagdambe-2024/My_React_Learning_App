import React from 'react'

export default function EventExample2() {

    function handleDatabaseOperations(synthicevent){
        debugger;
       switch(synthicevent.target.name){
        case 'insert':
            document.write("Record Inserted")
            break;
            case 'delete':
            document.write("Record Deleted")
            break
            case 'update':
            document.write("Record Updated")
            break;
       }
        
    }
  return (
   <>
   <h1>Crud Operations</h1>
   <button name='insert' onClick={handleDatabaseOperations}>Insert</button>
   <button name='delete' onClick={handleDatabaseOperations}>Delete</button>
   <button name='update' onClick={handleDatabaseOperations}>Update</button>
   </>
  )
}
// Controlled component handles event using basic dom manipulation methods then it is called controlleed component"