import './teacherCard.css'
import { useGlobalContext } from '../Context';
import { useNavigate } from 'react-router-dom';

const TeacherCard = (props) => {
    
    //console.log(props);
    const tID  = props.tId;
    const { teacher, setTeacher } = useGlobalContext(); 
    var current = teacher.find( el => el.tId === tID);
    const navigateP = useNavigate();
    //console.log(current); 

    const handleView = (e) => {
        let id = e.target.id;
        id= id.split('-');
        id = id[1];
        navigateP(`/profile/${id}?category=teachers`);

    }
    const handleEdit = (e) => {
        let id = e.target.id;
        id= id.split('-');
        id = id[1];
        navigateP(`/edit/${id}?category=teachers`);

    }
    const handleDelete = (e) => {
        let id = e.target.id;
        id= id.split('-');
        id = Number(id[1]);
        let idx = teacher.findIndex(el => el.tId === id) 
        teacher.splice(idx,1);
        setTeacher([...teacher]);
    }
     
      return (
        <div className='tCard border rounded p-4 m-3'>
            <p className='fs-5  fw-bold border border-dark rounded text-break '>{current.tName}</p>
            <p className='font-monospace text-break ' >ID: {current.tId}</p>
            <p className='fst-italic text-break'> {current.tMajor}</p>
            <div className='d-flex flex-wrap flex-column'>
                <button id={`tView-${current.tId}`} className='btn btn-sm btn-info m-1 text-break' onClick={handleView}>View</button>
                <button id={`tEdit-${current.tId}`} className='btn btn-sm  btn-warning m-1 text-break' onClick={handleEdit}>Edit</button>
                <button id={`tDel-${current.tId}`}  className='btn btn-sm  btn-danger m-1 text-break' onClick={handleDelete}>Delete</button>
            </div>
        </div>
      )
}
export default TeacherCard;