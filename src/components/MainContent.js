// import React from 'react'
// import {connect} from 'react-redux'
//
// const MainContent = (props) => {
//   return (
//     <div className="col-xs-8">
//        <h1>{props.regulation.name}</h1>
//        <blockquote className="blockquote">
//          <p className="mb-0">{props.regulation.title}</p>
//          <footer className="blockquote-footer">{props.regulation.source.replace("—", "")}</footer>
//        </blockquote>
//        <ul className="proportions">
//          {props.regulation.proportions.map((proportion) => {
//            return <li>{proportion}</li>
//          })}
//        </ul>
//        <p>{props.regulation.abstract}</p>
//     </div>
//   )
// }
// //
// // const mapStateToProps = (state) =>{
// //   return {
// //     cocktail: state.currentCocktail
// //   }
// // }
// //
// // export default connect(mapStateToProps)(MainContent)
// export default connect(MainContent)
