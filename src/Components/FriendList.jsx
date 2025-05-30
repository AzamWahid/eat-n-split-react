import React from 'react'
import Friend from './Friend'

const FriendList = ({ friendList , isSelected, setIsSelected }) => {
  return (
    <>
      {friendList?.map((frnd,idx) => {

       return <Friend frnd={frnd} key={idx} frndIdx={idx} isSelected={isSelected}  setIsSelected={setIsSelected} />



      })}
    </>
  )
}

export default FriendList