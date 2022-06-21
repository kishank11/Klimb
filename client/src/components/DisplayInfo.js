import React, { useState, useEffect } from 'react';
import { readData } from './jsonToBackendApi';

const DisplayInfo = () => {
  const [detail, setDetails] = useState([]);
 

  useEffect(() => {
    let mounted = true;
    readData('detail').then((data) => {
      if (mounted) {
        setDetails(data);
      }
    });
    return () => (mounted = false);
  }, [detail]);


  return (
    <div>
      <h3>Details</h3>
      <div>
        <table className='table'>
          <tr>
   <th>Name of the candidate</th>
   <th>Email</th>
   <th>Mobile No.</th>
   <th>Date of Birth</th>
   <th>Work Experience</th>
   <th>Resume Titile</th>
   <th>Current Location</th>
   <th>Postal Address</th>
   <th>Current Employer</th>
   <th>Current Designation</th>
          
         </tr>
         {/*
          {user &&
            user.map((u, i) => {
              return (
                <tr key={u._id}>
                    <th>{u.Name of the candidate}</th>
   <th>{u.Email}</th>
   <th>{u.Mobile No.}</th>
   <th>{u.Date of Birth}</th>
   <th>{u.Work Experience}</th>
   <th>{u.Resume Titile}</th>
   <th>{u.Current Location}</th>
   <th>{u.Postal Address}</th>
   <th>{u.Current Employer}</th>
   <th>{u.Current Designation}</th>
                 
                
                </tr>
              );
            })} */}
        </table>
      </div>
     
     
    </div>
  );
};

export default DisplayInfo;
