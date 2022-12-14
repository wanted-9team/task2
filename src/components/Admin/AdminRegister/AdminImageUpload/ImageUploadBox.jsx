import React, { useState, useRef, useEffect } from 'react'
import ImagePreview from './ImagePreview'
import * as S from '../AdminRegister.style'
import { BsUpload } from 'react-icons/bs'
const ImageUploadBox = ({ max = 5, setUploadedImages, uploadedImages }) => {
  const [previewImages, setPreviewImages] = useState([])
  const uploadBoxRef = useRef()
  const inputRef = useRef()

  useEffect(() => {
    const uploadBox = uploadBoxRef.current
    const input = inputRef.current

    const handleFiles = files => {
      for (const file of files) {
        if (!file.type.startsWith('image/')) continue
        const reader = new FileReader()
        reader.onloadend = e => {
          const result = e.target.result
          if (result) {
            setUploadedImages(prev => [...prev, result].slice(0, max))
          }
        }
        reader.readAsDataURL(file)
      }
    }

    const changeHandler = e => {
      const files = e.target.files
      handleFiles(files)
    }

    const dropHandler = e => {
      e.preventDefault()
      e.stopPropagation()
      const files = e.dataTransfer.files
      handleFiles(files)
    }

    const dragOverHandler = e => {
      e.preventDefault()
      e.stopPropagation()
    }

    uploadBox.addEventListener('drop', dropHandler)
    uploadBox.addEventListener('dragover', dragOverHandler)
    input.addEventListener('change', changeHandler)

    return () => {
      uploadBox.removeEventListener('drop', dropHandler)
      uploadBox.removeEventListener('dragover', dragOverHandler)
      input.removeEventListener('change', changeHandler)
    }
  }, [max])

  useEffect(() => {
    const imageJSXs = uploadedImages.map((image, idx) => {
      const isDeleteImage = element => {
        return element === image
      }
      const deleteFunc = () => {
        uploadedImages.splice(uploadedImages.findIndex(isDeleteImage), 1)
        setUploadedImages([...uploadedImages])
      }
      return <ImagePreview image={image} deleteFunc={deleteFunc} key={idx} />
    })
    setPreviewImages(imageJSXs)
  }, [uploadedImages])
  return (
    <>
      <S.Label className="drag_or_click" htmlFor="ida" ref={uploadBoxRef}>
        <S.LabelText>?????? ?????????</S.LabelText>
        <S.ImgBoxWrapper className="ImgBoxWrapper">
          <BsUpload />
          <div>?????? ?????? ???????????? ???????????? ??????????????????.</div>
          <span>????????????: 2MB ??????, ?????? 5???</span>
          <input
            type="file"
            multiple
            accept="image/*"
            id="ida"
            ref={inputRef}
            className="ImgUploadInput"
          />
        </S.ImgBoxWrapper>
      </S.Label>

      <S.PreviewWapper>
        <S.PreviewContainer>{previewImages}</S.PreviewContainer>
      </S.PreviewWapper>
    </>
  )
}

export default ImageUploadBox
