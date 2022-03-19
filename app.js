const request = require('request')
const config = require('./config')

// 25개 전화번호를 가진 리스트 필요
// 스크립트를 실행하면 while 문안에서 무한으로 처리
// For문을 돌려서 처리 한건마다 요청
// 1건만다 1~2초 슬립
// 모든건이 끝나면 20초 슬립

// 슬립 설정
const lastSleep = 2000
const midSleep  = 1000

// 메인 실행 함수
const main = async () => {

    // 전체건수
    const arrCnt = config.list.length-1

    while(true) { 
        for(i in config.list) {
            console.log(config.list[i].phone + " [" + i + "] " + arrCnt)

            let data = {
                phone : config.list[i].phone,
                indx : i,
            }

            call(data)

            // 마지막일경우 5초 중간은 1초
            await timer(( i == arrCnt ) ? lastSleep : midSleep)
        }
    }
}

// API Call 함수
const call = (data) => {
    const options = {
        uri: 'http://localhost:3000',
        method: 'POST',
        body: data,
        json: true        
    }
    console.log(data)

    request.post(options, (error, response, body) => {
        console.log("body", body)    
    })
    
}

// Timer 함수
const timer = ms => new Promise(res => setTimeout(res, ms))

main()