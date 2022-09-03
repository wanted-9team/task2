import styled, { css } from 'styled-components'

export const RegisterContaiDiv = styled.div`
  display: flex;
  width: 1200px;
  background-color: #eee;
  margin: 0 auto;
  padding: 73px 100px;
  justify-content: space-between;
`

export const BoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 458px;
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
          width: 209px;
        `
      case 'marginLeft':
        return css`
          margin-left: 17px;
          flex: 1;
        `
      default:
        return css`
          width: 100%;
          flex: 1;
        `
    }
  }}
`
export const LabelText = styled.h3`
  padding: 5px 0;
`
export const TextInput = styled.input`
  height: 42px;
  border-radius: 4px;
  border: 1px solid #a1a1a1;
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
`
export const OptionBoxDiv = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 18px 15px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
`
