const serviceNameFormatter = (service) => {
    switch (service) {
        case '윤식단 단품 샐러드 도시락 정기배송 다이어트 건강 식단 새벽배송 배달 저염식 단백질':
            return '윤식단 맛보기 박스'
        case '윤식단 샐러드 정기배송 1일 1식 20일 프로그램 도시락 배달 건강 식단 새벽 구독 저염':
            return '1일 1식 20일 프로그램'
        case '[윤식단] 샐러드 정기 배달 - 1일1식10일 프로그램(2주)':
            return '1일 1식 14일 프로그램'
        case '윤식단 샐러드 정기배송 1일 1식 20일 프로그램 도시락 배달 건강 식단 새벽 구독 저염':
            return '1일 1식 20일 프로그램'
        case '윤식단 샐러드 정기배송 1일 2식 20일 프로그램 도시락 배달 다이어트 식단 새벽 구독':
            return "1일 2식 20일 프로그램"
        case '윤식단 샐러드 정기배송 1일 2식 10일 프로그램 도시락 배달 다이어트 식단 새벽 구독':
            return '1일 2식 10일 프로그램'
        case '윤식단 샐러드 정기배송 1일 3식 10일 프로그램 도시락 배달 다이어트 식단 새벽 구독':
            return '1일 3식 10일 프로그램'
        case '윤식단 샐러드 정기배송 1일 3식 20일 프로그램 도시락 배달 다이어트 식단 새벽 구독':
            return '1일 3식 20일 프로그램'
        default:
            return '상품이 아님'
    }
}

const proteinValueFormatter = () => {

}

const carbohydrateValueFormatter = () => {

}

export default {
    serviceNameFormatter
}
