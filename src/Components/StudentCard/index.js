import './studentCard.css';
import { useGlobalContext } from '../Context';
import { useNavigate } from 'react-router-dom';

const StudentCard = (props) => {
    
    //console.log(props);
    const sID  = props.sId;
    const navigateP = useNavigate();
    const { student, setStudent } = useGlobalContext(); 
    var current = student.find( el => el.sId === sID)
    //console.log(current); 

    const handleView = (e) => {
        let id = e.target.id;
        id= id.split('-');
        id = id[1];
        navigateP(`/profile/${id}?category=students`);

    }
    const handleEdit = (e) => {
        let id = e.target.id;
        id= id.split('-');
        id = id[1];
        navigateP(`/edit/${id}?category=students`);

        
    }
    const handleDelete = (e) => {
        let id = e.target.id;
        id= id.split('-');
        id = Number(id[1]);
        let idx = student.findIndex(el => el.sId === id) 
        student.splice(idx,1);
        setStudent([...student]);
    }
     
      return (
        <div className='sCard border rounded p-4 m-3'>
            <p className='fs-5  fw-bold border border-dark rounded text-break '>{current.sName}</p>
            <p className='font-monospace text-break ' >ID: {current.sId}</p>
            <p className='fst-italic text-break'> {current.sClass}</p>
            <div className='d-flex flex-wrap flex-column'>
                <button id={`sView-${current.sId}`} className='btn btn-sm btn-info m-1 text-break' onClick={handleView}>View</button>
                <button id={`sEdit-${current.sId}`} className='btn btn-sm  btn-warning m-1 text-break' onClick={handleEdit}>Edit</button>
                <button id={`sDel-${current.sId}`}  className='btn btn-sm  btn-danger m-1 text-break' onClick={handleDelete}>Delete</button>
            </div>
        </div>
      )
}
export default StudentCard;