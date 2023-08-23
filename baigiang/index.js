/* 1.for 
cấu trúc cơ bản gồm 3 phần :
+ giá trị khởi tạo 
+ kiểm tra điều kiện 
+ bước nhảy.
 
for chạy như nào 
đầu tiên lấy giá trị khởi tạo so sánh với điều kiện ==> nếu diều kiện dúng thì
vòng for thực thi xong lại quay về bước nhảy sau đó lại kiểm tra điều kiện 
==> nếu điều kiện sai thì duừng luôn chương trình.
- CONTINUE : Bỏ qua lần lặp của vòng lặp 
- BREAK : thoát khỏi vòng lập 
*/
// for (let i = 1;i<6;i++){
//     if(i!=3){
//         console.log(i);
//         continue
//     }
//     console.log("aaa");
// viet bang cửu chương từ 1 đến 9

/* 
while:
-break dùng để thoát khỏi vòng lập while
-có thể không chạy lần nào nếu đièu kiện (falsy)

Do While:
-Break : dùng để thoát khỏi vòng lập 
-chạy ít nhất 1 lần 
*/
for(let i =2 ; i<=9;i++){
    for(let j=1;j<=10;j++){
        document.write(`${i} x ${j} = ${i*j}`);
        document.write("<br>")
    }
    document.write("**********");
    document.write("<br>")
} 