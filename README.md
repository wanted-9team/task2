# 원티드 프리온보딩 6차 1차 과제

## 과제 설명

원티드 프리온보딩 프론트엔드 기업협업과제

[👉 선발 과제 관련 링크](https://younuk.notion.site/f1d012dc9bec4fbc916b30e0fe332021)

- 수행 기간: 2022년 9월 2일 ~ 9월 5일

## 배포 URL

## 디자인

https://www.figma.com/file/Ii7SDsQVqLcTFHELEzRhFg/%ED%94%84%EB%A3%A8%EB%96%BC-%EB%A6%AC%EB%89%B4%EC%96%BC?node-id=0%3A1

## 실행 방법

```
$ git clone https://github.com/wanted-9team/task2
$ cd task2
$ npm install
$ npm start
```

## 9팀 소개

| <img src="https://avatars.githubusercontent.com/u/92010078?v=4"/> | <img src="https://avatars.githubusercontent.com/u/92101831?v=4"/> | <img src="https://avatars.githubusercontent.com/u/69101321?v=4"/> | <img src="https://avatars.githubusercontent.com/u/59791809?v=4"> | <img src="https://avatars.githubusercontent.com/u/85508157?v=4"/> | <img src="https://avatars.githubusercontent.com/u/71773680?v=4"> | <img src="https://avatars.githubusercontent.com/u/97271725?v=4"> |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| <a href="https://github.com/many-yun">[팀장] 김다윤</a>           | <a href="https://github.com/blcklamb">김채정</a>                  | <a href="https://github.com/jaehyeon74">박재현</a>                | <a href="https://github.com/hlezg08">성혜린</a>                  | <a href="https://github.com/sacultang">오영재</a>                 | <a href="https://github.com/estherjj">전에스더</a>               | <a href="https://github.com/jungdeokwoo">정덕우</a>              |

## 라우팅

- 사용자 기능
  - /fruit_store : 스토어 상품목록 조회
  - /fruit_store/:id= : 스토어 상품 상세 조회
  - /shop_payment/?order_code=: 스토어 상품 주문
  - /shop_list: 스토어 상품 주문 내역확인
- 관리자 기능
  - /admin_register : 스토어 상품목록 등록 페이지
  - /admin_shop/:id : 스토어 상품목록 관리 페이지

## 과제 달성 사항 및 해결 방법

### :: 1. 사용자 기능

#### Assignment1

- &#9745; 스토어 상품목록 조회(30개 이상의 상품목록, 10개 단위의 페이지네이션, 인피니트 스크롤 X)

#### Assignment2

- &#9745; 스토어 상품 상세조회(이미지, 상품 옵션, 수량, 가격 등)

#### Assignment3

- 스토어 상품 주문(상품 선택, 수량, 배송주소, 연락처 등)

#### Assignment4

- 스토어 상품 주문 내역확인 (주문 번호, 상품명, 주문 수량, 주문 옵션)

<br/>

### :: 2. 관리자 기능

#### Assignment1

- &#9745; 스토어 상품목록 등록 페이지(이미지, 상품 옵션, 수량, 가격 등)
  > 참고 파일: [[AdminRegisterProvider.jsx](https://github.com/wanted-9team/task2/blob/dev/src/store/AdminRegisterProvider.jsx)]
  > <br>
  > 문제사항 : 등록하기 버튼과 Input 페이지간에 props drilling이 생기는 Issue <br>
  > 해결 : `useContext`를 사용하여 props drilling을 해결하였습니다.

#### Assignment2

- &#9745; 스토어 상품목록 관리 페이지
  - &#9745; 상품 삭제 기능
  - &#9745; 상품 노출 여부 조정 기능(상품은 유지되어 있되, 노출 여부를 수정하는 기능)

## 레포지토리 구조

### 기술 스택

<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>

<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>

- 선택 이유:
  - 컴포넌트 이름을 가독성 좋게 구성할 수 있기 때문에 유지 보수에 좋습니다.
  - 컴포넌트 단위로 스타일을 지정해줄 수 있어 재사용성이 높습니다.
  - 컴포넌트의 props를 활용해서 경우에 따른 스타일을 적용시켜 줄 수 있습니다.
  - 클래스나, 태그 중복에 의한 스타일 에러를 막아주기 때문에 일반 css나 scss보다 유용합니다.
  - 기본적으로 scss와 비슷한 문법으로 사용법이 어렵지 않습니다.
  - css-in-js 라이브러리중 가장 널리 쓰이며, 참고할 수 있는 자료가 많습니다.

<details>
<summary style="font-size:17px">더미 데이터 목업</summary>

`src/mocks/data.js`

```
[
	{
		id:
		name:
		imageUrls: [ ]
		quantity : ?
		price:
		status:[sale,soldout, best]
		sale : 10
		select : [{option:1kg, price:10000},{option:2kg, price:18000}]
		description : ""
		origin: ""
		shipping:{option: "", price: 0, info: ""}
		visible:true
	}
]
```

</details>
<br>
<details>
<summary style="font-size:17px"> API 명세</summary>

### 1. 상품조회

- url : `/productlist`
- method : `GET`
- parameter : `page=number`

#### 응답예시

```
data:
	list: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
	totalPage: 4
	totalResults: 32
```

### 2. 상품등록

- url : `/createproduct`
- method : `POST`
- body :
  - **id**: number
    **name**: string
    **imageUrl**: string[]
    **quantity**: number
    **price**: number
    **status**: string[]
    **sale**: number
    **select**: [ {option: string, price: number} ]
    **description**: string[]
    **origin**: string
    **shipping**: {option: string, price: number, info: string}
    **visible**: boolean

#### 응답예시

```
// status: 400
data: {message: 'required data is not present'}

// status: 200
data: {message: '등록되었습니다.'}
```

### 3. 상품 삭제

- method : `DELETE`
- url : `/deleteproduct`
- parameter : `id=number`

#### 응답예시

```
status: 204
statusText: "No Content"
```

### 4. 주문내역

- url : `/orderlist`
- method : `GET`

#### 응답예시

```
data: {
    email: '',
    userName: '',
    productName: '',
    deliveryMemo: '',
    price: '',
    phone: '',
    select: '',
    totalPrice: '',
    boughtNumber: 1,
    orderNumber: '',
    imageUrl: '',
    shipping: {
      option: '',
      price: 0,
      info: '',
    },
    origin: '',
    id: 0,
    sale: 0,
    address: '',
    detailAddress: '',
    fullAddress: '',
  }


```

### 5. 주문등록

- url : `/createorde`
- method : `POST`
- body :

  - {
    email: '',  
    userName: '',  
    productName: '',  
    deliveryMemo: '',  
    price: '',  
    phone: '',  
    select: '',  
    totalPrice: '',  
    boughtNumber: 1,  
    orderNumber: '',  
    imageUrl: '',  
    shipping: {  
    option: '',  
    price: 0,  
    info: '',  
    },  
    origin: '',  
    id: 0,  
    sale: 0,  
    address: '',  
    detailAddress: '',  
    fullAddress: '',  
    }

    #### 응답예시

```
// status: 400
data: {message: 'No-Data'}

// status: 200
data: {message: '등록되었습니다.'}
```

</details>

</details>
<br>
<details>
<summary style="font-size:17px">폴더 구조</summary>

```
│  App.jsx
│  index.jsx
│
├─api
│   └─index.js
│
├─components
│   ├─Admin
│   │   ├─AdminRegister
│   │   │   ├─AdminImageUpload
│   │   │   ├─AdminInput
│   │   │   └─AdminOption
│   │   ├─AdminShop
│   │   └─AdminShopItem
│   │
│   ├─common
│	  │   ├─Carosuel
│   │   ├─Footer
│   │   ├─Headers
│   │   ├─Pagination
│   │   └─Status
│   │
│   ├─FruitStore
│   │   ├─FruitStoreItem
│   │   └─FruitStoreList
│		│
│   └─ShopPayment
│       ├─DaumPostCode
│       ├─OrderSummary
│       ├─ShopList
│       └─ShopPaymentInfo
├─mocks
│
├─pages
│   ├─Admin
│   ├─FruitStore
│   ├─FruitStoreDetail
│   ├─ShopList
│   └─ShopPayment
│
├─store
│
├─styles
│
└─utils
```

</details>
