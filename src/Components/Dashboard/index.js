import { useNavigate, useSearchParams } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
    const [searchParam] = useSearchParams();
    var  isLogged = searchParam.get('isLogged'); 
    const navigateL = useNavigate();
   // console.log(isLogged);

    const teacherLayout = (e) => { 
      navigateL('/layout/teachers');

    }
    const studentLayout = (e) => {
      navigateL('/layout/students');
    }

    return( 
        <>
        { !isLogged &&  <div className='mt-3 fs-5 '>Admin must Log in</div>}  

        {  isLogged &&  <div className='dashWrap d-flex flex-column justify-content-center align-items-center'> 

                          <div><button className="btn btn-primary m-5 p-3 border border-dark rounded" onClick={teacherLayout} >View Teachers Records</button></div> 
                         <div><button className="btn btn-primary  m-5 p-3 border border-dark rounded" onClick={studentLayout} >View Students Records</button></div>   

                       {/* <div><NavLink className="nav-link m-5 p-3 border border-dark rounded" to="/layout/">View Teachers Records</NavLink></div> 
                         <div><NavLink className="nav-link  m-5 p-3 border border-dark rounded" to="/layout/">View Students Records</NavLink></div>    */}
                       </div>  }
        
        
        </>
    )
}
export default Dashboard;