import './profile.css'; 
import { useGlobalContext } from '../Context';
import { useParams, useSearchParams } from 'react-router-dom'; 


const Profile = () => {

    const { teacher, student } = useGlobalContext(); 
    const { id } = useParams(); 
    const [ searchParams ] = useSearchParams();
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

     // console.log(teacher);
    
     return(        
        <div className='profile p-5'> 
            { category === 'teachers' && 
            <div className='pCard mx-auto my-3 p-4'>  
           <table className='table w-75 fst-italic mx-auto p-3'>
            <tbody>
                <tr className='text-break text-start fs-5 '>
                    <td>Teacher Name : </td>
                    <td>{current.tName}</td>
                </tr>
                <tr className='text-break text-start fs-6'>
                    <td>Teacher ID :  </td>
                    <td className='font-monospace'>{current.tId}</td>
                </tr>
                <tr className='text-break text-start fs-6'>
                    <td>Major Subject : </td>
                    <td >{current.tMajor}</td>
                </tr>
                <tr className='text-break text-start fs-6'>
                    <td>Subjects :  </td>
                    <td >{current.tSubjects.toString()}</td>
                </tr>
                <tr className='text-break text-start fs-6'>
                    <td>Classes : </td>
                    <td >{current.tGrade.toString()}</td>
                </tr></tbody>

            </table>

                {/* <div className='container my-4'>
                    <div className='row justify-content-center'>                                   
                        <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8 col-xl-6">   
                       
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
                                        <input type="text" className="form-control  " id="edit-tMajor" defaultValue={current.tMajor}aria-label="Name" aria-describedby="addon-wrapping" readOnly/>
                                    </div>
                                    <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded">
                                        <span className="input-group-text   fw-bold fst-italic" >Subjects :</span>
                                        <input type="text" className="form-control  " id="edit-tSubjects" defaultValue={current.tSubjects.toString() } aria-label="City" aria-describedby="addon-wrapping" readOnly  />
                                    </div>
                                    <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded">
                                        <span className="input-group-text   fw-bold fst-italic" >Teaching Classes :</span>
                                        <input type="text" className="form-control  " id="edit-tGrade" defaultValue={current.tGrade.toString() } aria-label="City" aria-describedby="addon-wrapping" readOnly  />
                                    </div>
                        </div>   
                               
                        </div>  
                </div> */}
            </div>  }
            { category === 'students' && 
            <div className='pCard  m-3 p-4'> 
            <table className='table w-75 mx-auto p-3'>
            <tbody>
                <tr className='text-break text-start fs-5 '>
                    <td>Name : </td>
                    <td>{current.sName}</td>
                </tr>
                <tr className='text-break text-start fs-6'>
                    <td>Student ID : </td>
                    <td className='font-monospace'>{current.sId}</td>
                </tr>
                <tr className='text-break text-start fs-6'>
                    <td>Class : </td>
                    <td >{current.sClass}</td>
                </tr>
                <tr className='text-break text-start fs-6'>
                    <td>Date of Birth :  </td>
                    <td >{current.sDOB}</td>
                </tr>
                <tr className='text-break text-start fs-6'>
                    <td>House : </td>
                    <td >{current.sHouse}</td>
                </tr>
                <tr className='text-break text-start fs-6'>
                    <td>Rank : </td>
                    <td >{current.sRank}</td>
                </tr>
                </tbody>
            </table>
            <br/>
            <p className=' text-break fs-5'>Report Card: </p> 
            {subjects.map((el,i) => {
                return (<div className="progress w-75 mx-auto my-1 p-1" key ={el} style={{height: "2rem"}}>
                    <div key={i} className="progress-bar" role="progressbar" style= {{width: `${arr[el]}%`}} aria-valuenow={arr[el]} aria-valuemin="0" aria-valuemax="100"> 
                    {el} : {arr[el]}%</div>
                </div>)
            })}
            </div>  }
        </div>
        
    )
}
export default Profile;