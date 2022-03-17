// 25개 전화번호를 가진 리스트 필요
// 스크립트를 실행하면 while 문안에서 무한으로 처리
// For문을 돌려서 처리 한건마다 요청
// 1건만다 1~2초 슬립
// 모든건이 끝나면 20초 슬립


const list = [
    {indx : 0, phone: "1"},
    {indx : 1, phone: "2"},
    {indx : 2, phone: "3"},
    {indx : 3, phone: "4"},
    {indx : 4, phone: "5"},
    {indx : 5, phone: "6"},
    {indx : 6, phone: "7"},
    {indx : 7, phone: "8"},
    {indx : 8, phone: "9"},
    {indx : 9, phone: "10"},
]

// 메인 실행 함수
const main = () => {
    while(true) {
        for(i in list) {
            console.log(list[i].phone + " [" + (parseInt(i)+1) + "] " + list.length)
            if ( i == (list.length-1) ) {
                console.log("마지막")
                sleep(5000)
            } else {
                sleep(1000)
            }
            
        }
    }
}

// Sleep 함수
const sleep = (ms) => {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
  }


main()