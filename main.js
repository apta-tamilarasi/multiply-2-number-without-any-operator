let a = Number(prompt('enter the 1st number'))
let b = Number(prompt('enter the 2nd number'))
const mul = (a, b) => {
	if (b == 0) {
		return 0
	}
	if(b>0){
		return (a+mul(a,b-1))
	}
	if(b<0){
		return -mul(a,-b)
	}
}
document.write("given number a= " + a + "<br><br>")
document.write("given number b= " + b + "<br><br>")
document.write("multiply is= " + mul(a, b))