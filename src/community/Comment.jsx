import React from 'react'

class Comment extends React.Component {
   render() {
      return (
         <ul className = 'comment'>
            {this.props.children}
        </ul>

         
      )
   }
}

export default Comment