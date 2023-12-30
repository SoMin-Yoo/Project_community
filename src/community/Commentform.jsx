import React from 'react'

class Commentform extends React.Compoent {
   render() {
      return (
         <li className='comment-form'>
            <form>
               <span className='ps-box'>
                  <input type='text' className='int' placeholder='write comment'/>
               </span>
               <input type='submit' className='btn' value='submit' />
            </form>
         </li>
      )
   }
}

export default Commentform