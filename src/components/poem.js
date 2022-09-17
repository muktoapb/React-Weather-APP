import React from 'react'
export default function Poem({poem}) {
    const pline = poem?.lines.slice(0, 11);
    const linen = 1;
    // console.log(pline);
  return (
    <div className="poem_area">
        <h4 className='ptitle'>{poem?.title}</h4>
        <p className='pauthor'><em>{poem?.author}</em></p>
        <span className="line"></span>
        <div className='poemlines'>
            <p>
            {
            pline?.map((line, index)=>(
                // const myline = React.createElement('p', {key:linen}, line);
                // return myline;
                <span key={index}>{line} <br /></span>
            ))
            }
            </p>
        </div>
    </div>
  )
}
