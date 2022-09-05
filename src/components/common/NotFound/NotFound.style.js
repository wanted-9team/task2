import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  width: 100%;
  margin: 100px auto;
  @media screen and (max-width: 768px) {
    max-width: 700px;
  }
  text-align: center;
`

export const MessageTitle = styled.h2`
  width: 409px;
  height: 51px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 51px;

  margin: 50px;
`

export const BacktoShoppingButton = styled.button`
  width: 199px;
  height: 49px;

  background: #333333;
  border-radius: 4px;
  color: #ffffff;
`
