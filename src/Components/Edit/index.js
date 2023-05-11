import './edit.css';
import { useGlobalContext } from '../Context';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'; 
import { useState } from 'react';

const Edit = (e) => {

    const { teacher, setTeacher, student, setStudent } = useGlobalContext(); 
    const { id } = useParams(); 
    const [ searchParams ] = useSearchParams();
    const navigateE = useNavigate();
    const [sFlag, setSFlag] = useState(false);
    var category = searchParams.get('category');
    var current;
    var arr;
    var subjects;
    if(category === 'teachers'){
        current = teacher.find( el => el.tId === Number(id))
       }
       else if(category === 'students'){
        current = student.find( el => el.sId === Number(id))
        arr = current.marks 
        subjects = Object.keys(arr);
       }

       const handleTeacherForm = (e) => {
            e.preventDefault();
          
            let id = document.getElementById('edit-tId').value;
            let major = document.getElementById('edit-tMajor').value;
            let subj = document.getElementById('edit-tSubjects').value;
            let grade = document.getElementById('edit-tGrade').value;
            let idx = teacher.findIndex(el => el.tId === Number(id) ); 
            teacher[idx].tMajor = major;
            teacher[idx].tSubjects = subj.split(",");
            teacher[idx].tGrade = grade.split(",");
            setTeacher([...teacher]);
            setSFlag(true);
            setTimeout( ()=> {navigateE('/layout/teachers');}, 3000)
            
            
       }

       const handleStudentForm = (e) => {
        e.preventDefault();
      
        let id = document.getElementById('edit-sId').value;
        let name = document.getElementById('edit-sName').value;
        let DOB = document.getElementById('edit-sDOB').value;
        let cls = document.getElementById('edit-sClass').value; 
        let house = document.getElementById('edit-sHouse').value; 
        let rank = document.getElementById('edit-sRank').value; 
        let mark = {}; 
        subjects.map(el => {
            mark[el] = document.getElementById(el).value; 
            return true;
        })

        let idx = student.findIndex(el => el.sId === Number(id) ); 
        student[idx].sName = name;
        student[idx].sDOB = DOB;
        student[idx].sClass = cls;
        student[idx].sHouse = house;
        student[idx].sRank = rank;
        student[idx].marks = {...mark};
        setStudent([...student]);
        setSFlag(true);
        setTimeout( ()=> {navigateE('/layout/students');}, 3000)           
   }

    return(
        <div className='edit '>
            { category === 'teachers' && 
            <form id="edit-teacher" onSubmit={handleTeacherForm}>
                <div className='container my-5'>
                    <div className='row justify-content-center'>                                   
                        <div className=" col-sm-10 col-md-8 col-lg-6 col-xl-5">   
                        { sFlag && <h4 className='text-success'> Teacher Details updated successfully</h4>}
                        <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded">
                                       <span className="input-group-text   fw-bold fst-italic" >Teacher ID: *</span>
                                        <input type="text" className="form-control  " id="edit-tId" defaultValue={current.tId} aria-label="Name" aria-describedby="addon-wrapping" readOnly />
                                    </div> 
                                    <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded">
                                       <span className="input-group-text   fw-bold fst-italic" >Teacher Name : *</span>
                                        <input type="text" className="form-control  " id="edit-tName" defaultValue={current.tName} aria-label="Name" aria-describedby="addon-wrapping" readOnly />
                                    </div> 
                                    <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded">
                                        <span className="input-group-text   fw-bold fst-italic" >Major Subject: </span>
                                        <input type="text" className="form-control  " id="edit-tMajor" defaultValue={current.tMajor}aria-label="Name" aria-describedby="addon-wrapping" required/>
                                    </div>
                                    <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded">
                                        <span className="input-group-text   fw-bold fst-italic" >Subjects :</span>
                                        <input type="text" className="form-control  " id="edit-tSubjects" defaultValue={current.tSubjects.toString() } aria-label="City" aria-describedby="addon-wrapping" required  />
                                    </div>
                                    <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded">
                                        <span className="input-group-text   fw-bold fst-italic" >Teaching Classes :</span>
                                        <input type="text" className="form-control  " id="edit-tGrade" defaultValue={current.tGrade.toString() } aria-label="City" aria-describedby="addon-wrapping" required  />
                                    </div>
                                    <button type='submit' className='btn btn-primary btn-sm'>Save Changes</button>  
                        </div>   
                               
                        </div>  
                </div>
            </form> }

            { category === 'students' && 
            <form id="edit-student" onSubmit={handleStudentForm}>
                <div className='container my-5'>
                    <div className='row justify-content-center'>                                   
                        <div className=" col-sm-10 col-md-8 col-lg-6 col-xl-5">   
                        { sFlag && <h4 className='text-success'> Student Details updated successfully</h4>}
                        <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded">
                                       <span className="input-group-text   fw-bold fst-italic" >Student ID: *</span>
                                        <input type="text" className="form-control  " id="edit-sId" defaultValue={current.sId} aria-label="Name" aria-describedby="addon-wrapping" readOnly />
                                    </div> 
                                    <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded">
                                       <span className="input-group-text   fw-bold fst-italic" >Student Name : *</span>
                                        <input type="text" className="form-control  " id="edit-sName" defaultValue={current.sName} aria-label="Name" aria-describedby="addon-wrapping" required />
                                    </div> 
                                    <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded">
                                       <span className="input-group-text   fw-bold fst-italic" >Gender : *</span>
                                        <input type="text" className="form-control  " id="edit-sGender" defaultValue={current.sGender} aria-label="Name" aria-describedby="addon-wrapping" readOnly />
                                    </div> 
                                    <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded">
                                       <span className="input-group-text   fw-bold fst-italic" >DOB : *</span>
                                        <input type="text" className="form-control  " id="edit-sDOB" defaultValue={current.sDOB} aria-label="Name" aria-describedby="addon-wrapping" required />
                                    </div> 
                                    <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded">
                                       <span className="input-group-text   fw-bold fst-italic" >Class : *</span>
                                        <input type="text" className="form-control  " id="edit-sClass" defaultValue={current.sClass} aria-label="Name" aria-describedby="addon-wrapping" required />
                                    </div> 
                                    <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded">
                                       <span className="input-group-text   fw-bold fst-italic" >House : *</span>
                                        <input type="text" className="form-control  " id="edit-sHouse" defaultValue={current.sHouse} aria-label="Name" aria-describedby="addon-wrapping" required />
                                    </div> 
                                    <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded">
                                       <span className="input-group-text   fw-bold fst-italic" >Rank : *</span>
                                        <input type="text" className="form-control  " id="edit-sRank" defaultValue={current.sRank} aria-label="Name" aria-describedby="addon-wrapping" required />
                                    </div> 
                    {subjects.map((el) => {
                      return (
                         <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded" key={el}>
                                        <span className="input-group-text   fw-bold fst-italic" >{el} :  </span>
                                        <input type="text" className="form-control" id={el} defaultValue={arr[el]} aria-label="Name" aria-describedby="addon-wrapping" required/>
                        </div> )
                     })}

                    <button type='submit' className='btn btn-primary btn-sm'>Save Changes</button>  

                    </div>   
                               
                    </div>  
                </div>
            </form> }
            
        </div>
    )
}
export default Edit;