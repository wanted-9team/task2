import styled, { css } from 'styled-components'

export const RegisterContaiDiv = styled.div`
  display: flex;
  width: 1200px;
  background-color: #eee;
  margin: 0 auto;
  padding: 73px 100px;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 708px;
    padding: 53px 20px;
  }
  @media (max-width: 414px) {
    width: 374px;
    padding: 53px 20px;
    flex-direction: column;
  }
`

export const BoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 452px;
  @media (max-width: 768px) {
    width: 329px;
  }
`
export const HalfBox = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  ${({ attr }) => {
    switch (attr) {
      case 'half':
        return css`
          width: 215px;
        `
      case 'option':
        return css`
          width: 200px;
        `
      case 'checkbox':
        return css`
          flex-direction: row-reverse;
          width: 100px;
          align-items: center;
          justify-content: flex-end;
          h3 {
            font-weight: 400;
          }
        `
      case 'shippingFree':
        return css`
          flex-direction: row-reverse;
          width: 100px;
          align-items: center;
          justify-content: center;
          margin-top: 20px;
          h3 {
            font-weight: 400;
          }
          .shippingFree {
            justify-content: center;
          }
        `
      default:
        return css`
          width: 100%;
        `
    }
  }}
`
export const LabelText = styled.h3`
  padding: 5px 0;
  font-weight: 600;
  font-size: 16px;
`
export const TextInput = styled.input`
  height: 42px;
  border-radius: 4px;
  border: 1px solid #a1a1a1;
  padding: 10px;
  &[type='checkbox'] {
    height: auto;
  }
`

export const TextArea = styled.textarea`
  height: 227px;
  resize: none;
  border-radius: 4px;
  border: 1px solid #a1a1a1;
`
export const StatusBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const CheckInput = styled.input``

export const OptionButton = styled.button`
  height: 42px;
  background-color: #a1a1a1;
  border-radius: 4px;
`
export const OptionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const OptionBoxDiv = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 18px 15px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
`
export const ShippingBoxDiv = styled.div`
  display: flex;
  align-items: center;
`
export const PreviewWapper = styled.div`
  margin-top: 5px;
  padding: 10px;
  border: 1px solid #b8b8b8;
`
export const ImgBoxWrapper = styled.div`
  background-color: #a1a1a1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  border-radius: 4px;
  div {
    padding: 10px 0;
  }
  span {
    font-size: 0.8rem;
  }
  input {
    display: none;
  }
`
export const PreviewContainer = styled.div`
  display: flex;
  height: auto;
`

export const ImagePreviewWrapper = styled.div`
  margin-right: 5px;
  position: relative;
  img {
    max-width: 70px;
    height: 70px;
    @media (max-width: 768px) {
      max-width: 55px;
    }
  }
  .icon_container {
    position: absolute;
    top: 5%;
    right: 5%;
  }
`
