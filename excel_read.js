
// const xlsx = require('xlsx')
import xlsx from "xlsx"
import custom from "./custom.js"
// const custom = require('./custom')

// @files 엑셀 파일을 가져온다.
const excelFile = xlsx.readFile('dummy.xlsx')

// @breif 엑셀 파일의 첫번째 시트의 정보를 추출
const sheetName = excelFile.SheetNames[0] // @details 첫번째 시트 정보 추출
const firstSheet = excelFile.Sheets[sheetName] // @details 시트의 제목 추출

// @details 엑셀 파일의 첫번째 시트를 읽어온다.
const jsonData = xlsx.utils.sheet_to_json(firstSheet, { defval: '' })


// 같은 주문끼리 모아주기 
const groupOrder = (jsonData) => {
  let init_buyer = jsonData[0].구매자명
  let init_receiver = jsonData[0].수취인명
  let order = [];
  let totalOrder = [];
  jsonData.forEach((item) => {

    // 같은 주문끼리 모으기
    if (item.구매자명 !== init_buyer || init_receiver !== item.수취인명) {
      init_buyer = item.구매자명
      init_receiver = item.수취인명
      totalOrder.push(order);
      order = [];
    }
    order.push(item)
  })
  totalOrder.push(order)
  return totalOrder
}

const groupedRaw = groupOrder(jsonData);

// 출력된 주문서 => 주문서 변환
const processRaw = (groupedRaw) => {
  let initOrder = {};
  let totalOrder = [];
  groupedRaw.forEach(order => {

    order.forEach(item => {
      let password;

      initOrder.구매자명 = item.구매자명
      initOrder.수취인명 = item.수취인명
      initOrder.구매자연락처 = item["구매자연락처"]
      initOrder.배송지 = item["(기본주소)"] + item["(상세주소)"]
      initOrder['(기본주소)'] = item["(기본주소)"]
      initOrder['(상세주소)'] = item["(상세주소)"]

      initOrder['공동현관 비밀번호'] = item["(상세주소)"]

      initOrder['배송메세지'] = item["배송메세지"]
      initOrder.시작일 = "설정"
      initOrder.종료일 = "설정"
      initOrder.상품명 = custom.serviceNameFormatter(item.상품명)

    })
    totalOrder.push(initOrder)
    initOrder = {}
  })
  return totalOrder
}
console.log(processRaw(groupedRaw));

// console.log(groupOrder(jsonData))


// 필요한 데이터 구매자명, 수취인명, 구매자 연락처, 배송지, (기본주소), (상세주소), 옵션정보에 공동현관 비밀번호
// 배송메시지, 시작일, 종료일, 상품명, 탄수화물 구성(주문이 있는 경우만 작성)
