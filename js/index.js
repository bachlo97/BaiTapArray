function domId(id) {
    return document.getElementById(id)
}

document.querySelector('.c-form__toggle').onclick = function () {
    domId('alert1').style.display = 'block';
    domId('article').style.display = 'block';
}

function areValidNumbers(...nums) {
    return nums.every(function (num) {
        return !isNaN(+num) && num !== "" && Number.isInteger(+num);
    });
}

document.querySelectorAll('form').forEach(function(item){
    item.onsubmit = function(event){
        event.preventDefault();
        // ngăn chặn reload lại trang, hành vi mặc định của thẻ form
    }
});

//* Reset phần tử khi click vào các ele có class accordion__link
var listSoNguyen2;
document.querySelectorAll('a.accordion__link').forEach(function (item) {
    item.onclick = function () {
        for (let i = 1; i <= 10; i++) {
            if(i == 6){
                domId('vitri1').value = ''
                domId('vitri2').value = ''
            }
            
            if (i == 9) {
                document.querySelector('.sub-form').reset()
                document.querySelector('#alert2').innerHTML = ''
                listSoNguyen2 = []
            }

            if (document.querySelector(`#result${i}`) != null)
                document.querySelector(`#result${i}`).innerHTML = '';
        }
    }
})

//*Thêm phần tử vào mảng chính
var listSoNguyen = [];
document.querySelector('.c-form__button').onclick = function () {
    var num = domId('parent-input').value
    document.querySelector('.c-form').reset()
    if(!areValidNumbers(num)){
        alert('Hãy nhập vào 1 giá trị hợp lệ')
        return
    }
    num = +num;
    listSoNguyen.push(num)
    domId('alert1').innerHTML = listSoNguyen.join(' ')
}


////////////////////////////////////////////////////////////////////////////////////////////////////////?

//* Start lesson 1
domId('btn-1').onclick = function(){
    if(listSoNguyen.length==0){
        return
    }

    var sum = 0;
    listSoNguyen.forEach(function(item){
        if (item > 0) sum +=item;
    })
    domId('result1').innerHTML = `Tổng số dương: ${sum}`
}
//* End lesson 1

////////////////////////////////////////////////////////////////////////////////////////////////////////?

//* Start lesson 2
domId('btn-2').onclick = function(){
    if(listSoNguyen.length==0){
        return
    }
    var count = 0;
    listSoNguyen.forEach(function(item){
        if (item > 0) count++;
    })
    domId('result2').innerHTML = `Số lượng số dương: ${count}`
}
//* End lesson 2

////////////////////////////////////////////////////////////////////////////////////////////////////////?

//* Start lesson 3
domId('btn-3').onclick = function(){
    if(listSoNguyen.length==0){
        return
    }
    var minNum = listSoNguyen[0];
    listSoNguyen.forEach(function(item){
        if (item < minNum) minNum=item;
    })
    domId('result3').innerHTML = `Số nhỏ nhất: ${minNum}`
}
//* End lesson 3

////////////////////////////////////////////////////////////////////////////////////////////////////////?

//* Start lesson 4
domId('btn-4').onclick = function(){
    if(listSoNguyen.length==0){
        return
    }
    var checkSoDuong = false;
    var soDuongNhoNhat = -1;
    listSoNguyen.forEach(function(item){
        if(item>0){
            if(!checkSoDuong){
                soDuongNhoNhat = item;
                checkSoDuong = true;
            }
            else if(item<soDuongNhoNhat){
                soDuongNhoNhat = item;
            }
        }
    })
    if(soDuongNhoNhat === -1){
        domId('result4').innerHTML = `Mảng không có số dương`
    }else{
        domId('result4').innerHTML = `Số dương nhỏ nhất: ${soDuongNhoNhat}`
    }    
}
//* End lesson 4

////////////////////////////////////////////////////////////////////////////////////////////////////////?

//* Start lesson 5
domId('btn-5').onclick = function(){
    if(listSoNguyen.length==0){
        return
    }
    var soChanCuoiCung = - 1;
    for(var i = listSoNguyen.length-1;i>=0;i--){
        if(listSoNguyen[i] % 2 === 0){
            soChanCuoiCung = listSoNguyen[i];
            break;
        }
    }
    domId('result5').innerHTML = `Số chẵn cuối cùng: ${soChanCuoiCung}`
    
}
//* End lesson 5

////////////////////////////////////////////////////////////////////////////////////////////////////////?

//* Start lesson 6
function checkIndexs(index1,index2,arr){
    if(index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >=arr.length || index1 == index2){
        return false;
    }
    return true;
}

domId('btn-6').onclick = function(){
    if(listSoNguyen.length==0){
        return
    }
    var index1 = domId('vitri1').value;
    var index2 = domId('vitri2').value;
    var tempArray = listSoNguyen.slice(0,listSoNguyen.length)

    if(!areValidNumbers(index1,index2) || !checkIndexs(+index1,+index2,tempArray)){
        domId('result6').innerHTML = `Giá trị nhập vào không hợp lệ (Vị trí không được trùng nhau, vị trí không được nằm ngoài mảng vị trí phải là số nguyên & không được để trống)`
        tempArray = listSoNguyen.slice(0,listSoNguyen.length);
    }else{
        index1 = +index1;
        index2 = +index2;
        var temp = tempArray[index1];
        tempArray[index1] = tempArray[index2]
        tempArray[index2] = temp;
        domId('result6').innerHTML ='Mảng sau khi hoán đổi: '+ tempArray.join(' ')
    }
}
//* End lesson 6

////////////////////////////////////////////////////////////////////////////////////////////////////////?

//* Start lesson 7
domId('btn-7').onclick = function(){
    if(listSoNguyen.length==0){
        return
    }
    var tempArray = listSoNguyen.slice(0,listSoNguyen.length)
    for(var i  = 0; i < tempArray.length- 1; i++){
        for(var j = i + 1; j < tempArray.length;j++){
            if (tempArray[i] >tempArray[j]){
                var temp = tempArray[i];
                tempArray[i] = tempArray[j]
                tempArray[j] = temp;
            }
        }
    }
    domId('result7').innerHTML = `Mảng sắp xếp tăng dần: ${tempArray.join(' ')}`
}
//* End lesson 7

////////////////////////////////////////////////////////////////////////////////////////////////////////?

//* Start lesson 8
function laSoNguyenTo(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
domId('btn-8').onclick = function(){
    if(listSoNguyen.length==0){
        return
    }
    var soNguyenTo = -1;
    for(var i = 0; i< listSoNguyen.length;i++){
        if(laSoNguyenTo(listSoNguyen[i])){
            soNguyenTo = listSoNguyen[i];
            break;
        }
    }
    domId('result8').innerHTML = `Số nguyên tố đầu tiên là: ${soNguyenTo}`
}
//* End lesson 8

////////////////////////////////////////////////////////////////////////////////////////////////////////?

//* Start lesson 9
document.querySelector('#item9 form button').onclick = function(){
    var num2 = document.querySelector('#item9 form input').value
    document.querySelector('#item9 form').reset()
    if(num2 == "" || isNaN(+num2)){
        alert('Hãy nhập vào 1 giá trị hợp lệ');
        return
    }
    num2 = +num2;
    listSoNguyen2.push(num2);
    domId('alert2').innerHTML = listSoNguyen2.join(' ');
}
domId('btn-9').onclick = function(){
    if(listSoNguyen2.length == 0){
        return
    }
    count = 0;
    listSoNguyen2.forEach(function(item){
        if(Number.isInteger(item)) count++;
    })

    domId('result9').innerHTML = `Mảng có ${count} số nguyên`
}

//* End lesson 9

////////////////////////////////////////////////////////////////////////////////////////////////////////?

//* Start lesson 10
domId('btn-10').onclick = function(){
    if(listSoNguyen.length == 0){
        return
    }
    var soAm = 0;
    var soDuong = 0;
    var ketQua = ''

    listSoNguyen.forEach(function(item){
        if(item > 0){
            soDuong++;
        }else if(item < 0){
            soAm++
        }
    })
    if(soDuong > soAm){
        ketQua = 'lớn hơn';
    }else if(soDuong < soAm){
        ketQua = 'nhỏ hơn';
    }else{
        ketQua = 'bằng'
    }   
    domId('result10').innerHTML = `Trong mảng có số Dương(${soDuong}) ${ketQua} số Âm(${soAm})`
}

//* End lesson 10

////////////////////////////////////////////////////////////////////////////////////////////////////////?