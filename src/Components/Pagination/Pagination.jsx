import React from 'react'
import Card from 'react-bootstrap/Card';

export const Pagination = ({gotoNextPage,gotoPrevPage}) => {
  return (
    <div class='d-flex justify-content-between'>
        {gotoPrevPage && <button 
        className="btn btn-primary m-5"
        style={{ width: '120px', height: '60px'}} 
        onClick={gotoPrevPage}>Previous</button>}
        
        {gotoNextPage && <button 
        className="btn btn-primary m-5"
        style={{ width: '120px', height: '60px'}}
        onClick={gotoNextPage}>Next</button>}
    </div>
  )
}
