import React from 'react'
import DaumPostcode from 'react-daum-postcode'

const Post = ({ getData }) => {
  const handleComplete = data => {
    let fullAddress = data.address
    let extraAddress = ''

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : ''
    }
    getData(data.address, data.bname, data.buildingName, fullAddress, data.zonecode)
  }

  const postCodeStyle = {
    display: 'block',
    position: 'absolute',
    top: '30%',
    width: '400px',
    height: '400px',
    padding: '7px',
    zIndex: 100,
  }

  return (
    <>
      <DaumPostcode style={postCodeStyle} autoClose onComplete={handleComplete} />
    </>
  )
}

export default Post
