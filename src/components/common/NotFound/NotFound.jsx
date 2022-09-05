import * as S from './NotFound.style'
import { useNavigate } from 'react-router-dom'

const ShopList = () => {
  const navigate = useNavigate()
  const goMainPage = () => {
    navigate('/fruit_store')
  }

  return (
    <>
      <S.MainContainer>
        <S.MessageTitle>잘못된 접근입니다.</S.MessageTitle>

        <S.BacktoShoppingButton onClick={goMainPage}>쇼핑 계속하기</S.BacktoShoppingButton>
      </S.MainContainer>
    </>
  )
}
export default ShopList
