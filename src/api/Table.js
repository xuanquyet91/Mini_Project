// import React from 'react'

// const Table = ({data}) => {
//   console.log(data);
//   console.log(data.email);
//   return (
//     <div>
//       <div className='list'>
//        <tbody >
//          <tr >
//            <th className="listItem">Name</th>
//            <th className="listItem">SurName</th>
//            <th className="listItem">email</th>
//          </tr>
//          {data.map((item)=> (
//           <tr key={item.id}>
//             <td className="listItem">{item.first_name}</td>
//             <td className="listItem">{item.last_name}</td>
//             <td className="listItem">{item.email}</td>
//           </tr>
//         ))}
//       </tbody>
//     </div>
//     </div>
//   )
// }

// export default Table
import React from 'react'
import style from "../css/main.css";

function Table ({data}) {


  return (
    <div className='list'>
      <tbody >
        <tr >
          <th className="listItem">Name</th>
          <th className="listItem">SurName</th>
          <th className="listItem">email</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="listItem">{item.first_name}</td>
            <td className="listItem">{item.last_name}</td>
            <td className="listItem">{item.email}</td>
          </tr>
        ))}
      </tbody>
    </div>
  )
}

export default Table