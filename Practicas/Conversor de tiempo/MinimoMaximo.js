function mcm(num) {
    if (num < 0) {
        if (num%2==0) {
            while (num>0) {
                let number=num/2
                console.log(number)
            }
        }else{
            while (num>0) {
                number=num/3
            }
        }
    }
}

let number = mcm(4)