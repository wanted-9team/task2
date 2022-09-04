import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
`
export const FlexWrapper = styled.div`
  display: flex;
`
export const SlideWrapper = styled.div`
  display: flex;
`
export const SlideImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
  flex: none;
`
export const SlideItem = styled.div`
  width: 100%;
  height: 300px;
  object-fit: contain;
  flex: none;
`
export const LeftButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 25%;
  left: 10%;
  font-size: 1.5rem;
  color: #d4d4d4;
  z-index: 10;
  user-select: none;
`
export const RightButton = styled.button`
  position: absolute;
  cursor: pointer;
  top: 25%;
  right: 10%;
  font-size: 1.5rem;
  color: #d4d4d4;
  z-index: 10;
  user-select: none;
`
export const TextTable = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
`
export const TextStrong = styled.h5`
  font-size: 1.75rem;
  font-weight: 700;
  margin: 10px 0;
`
export const Text = styled.p`
  font-size: 1rem;
  color: #404040;
  line-height: 27px;
`
export const LogoImg = styled.img`
  width: 35px;
  height: 35px;
  margin: 10px 0;
`
