import './layout.css'; 
import { useGlobalContext } from '../Context';
import TeacherCard from '../TeacherCard';
import StudentCard from '../StudentCard';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'; 

const Layout = () => {

    const { teacher, student } = useGlobalContext(); 
    const { category } = useParams();

    useEffect ( () => {
    //    console.log(category);
    },[])

     // console.log(teacher);
    
     return(        
        <div className='layout p-5'> 
            { category === 'teachers' && teacher.map( (el) => <TeacherCard key={el.tId} id={`tCard-${el.tId}`} tId = {el.tId} > </TeacherCard> )  }
            { category === 'students' && student.map( (el) => <StudentCard key={el.sId} id={`sCard-${el.sId}`} sId = {el.sId} > </StudentCard> )  }
        </div>
        
    )
}
export default Layout;