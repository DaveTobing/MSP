// import React from 'react'
// import './Plans.css'
// import {plansData} from '../../data/plansData'


// const Plans = () => {
//   return (
//     <div className="plans-container">
//       <div className="F-header" style={{
//         gap: '2rem'
//       }}>
//         <span className='stroke-text'>READY TO START</span>
//         <span>YOUR JOURNEY</span>
//         <span className='stroke-text'>NOW WITHUS</span>
//       </div>

//       {/* plans cards */}
//       <div className="plans">
//         {plansData.map((plans, i) =>(
//           <div className="plan" key={i}>
//             {plans.icon}
//             <span>{plans.name}</span>
//             <span>{plans.price}</span>

//             <div className="features">
//               {plans.features.map((feature, i)=>(
//                 <div className="feature">
//                   <img src={whitetick} alt="" />
//                   <span key={i}>{feature}</span>
//                 </div>
//               ))}
//             </div>

//             <div>
//               <span>See more benefits</span>
//             </div>
//             <button className='btn'>Join now</button>
//           </div>
//         ))}
//       </div>
      
//     </div>
//   )
// }

// export default Plans