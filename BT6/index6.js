let N =+prompt("nhap so luong so nguyen to ")
let Count = 0
let count = 0
// for(let N=2;N<100;N++){
        for(let i=2;i<=N;i++){
            if(N%i==0){count++}
        }
        if(count==0){
            // Count++
            console.log(`${N}`)
        }
    
    //     Count++
    // }if(Count>numbers){      
        