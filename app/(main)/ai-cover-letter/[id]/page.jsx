import React from 'react'

 const CoverLetter = async({params}) => {
    const id=await params.id;
    console.log("Cover Letter ID:", id);
  return (
    <div>CoverLetter :{id}</div>
  )
}
export default CoverLetter;
