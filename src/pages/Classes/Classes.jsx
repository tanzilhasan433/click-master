

// import { useEffect, useState } from 'react';
// // import useClasses from '../../hook/useClasses';

// const Classes = () => {
//     // const [classes] = useClasses();
//     // const approvedClasses = classes.filter(item => item.status === "approved")
//     // const selectedData = {handleSubmit} 
//     const [allClasses,setAllClasses] = useState([])

//     useEffect(()=> {
//         fetch('http://localhost:4000/classes')
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             setAllClasses(data)
//         })
//     },[])
//     return (
//         <div className=''>


//             <div className='grid pt-14 mb-14 md:grid-cols-3 justify-center gap-4'>
//                 {
//                     allClasses.map((classItem,index)=> <div key={index}>

//                         <div className="card w-96 bg-base-100 shadow-xl">
//                                   <figure><img src={classItem.img} /></figure>
//                               <div className="card-body">
//                                   <h2 className="card-title">{classItem.name}</h2>
//                                  <p>${classItem.price}</p>
//                              <div className="card-actions justify-end">
//                                     <button  className="btn btn-primary">Selected</button>
//                             </div>
//                         </div>                                   
//                     </div>
                    

//                     </div>)
//                 }
//             </div>


//         </div>
//     );
// };

// export default Classes;


import ClassesCard from '../../Components/ClassesCard/ClassesCard';
import useClasses from '../../hook/useClasses';
const Classes = () => {
    const [classes] = useClasses();
    const approvedClasses = classes.filter(item => item.status === "Approved")
    
    return (
        <div className='grid pt-14 mb-14 md:grid-cols-3 justify-center gap-4'>
            {
                approvedClasses.map(classItem => <ClassesCard
                    key={classItem._id}
                    classItem={classItem}
                ></ClassesCard>)
            }
        </div>
    );
};

export default Classes;