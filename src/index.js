// 

module.exports = function toReadable(number) {
	let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
	let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	var arrNum = number.toString().split('')
	if (arrNum.length == 1) {
		return arrNum = ones[number]
	} else if (arrNum.length == 2 && number <= 19) {
		return teens[arrNum.at(-1)]
	} else if (arrNum.length == 2 && number >= 20) {
		return (ones[arrNum.at(-1)] == 'zero') ? tens[arrNum[0]] : tens[arrNum[0]] + ' ' + ones[arrNum.at(-1)]
	} else if (arrNum.length == 3) {
		if (arrNum[1] == 0 && arrNum[2] == 0) {
			return ones[arrNum[0]] + ' ' + 'hundred'
		} else if (arrNum[1] == 0) {
			return ones[arrNum[0]] + ' ' + 'hundred' + ' ' + ones[arrNum.at(-1)]
		} else if (arrNum[1] >= 2 && ones[arrNum.at(-1)] != 'zero') {
			return ones[arrNum[0]] + ' ' + 'hundred' + ' ' + tens[arrNum[1]] + ' ' + ones[arrNum.at(-1)]
		} else if (arrNum[1] <= 1 && arrNum[2] <= 9) {
			return ones[arrNum[0]] + ' ' + 'hundred' + ' ' + teens[arrNum.at(-1)]
		} else if (arrNum[1] >= 2 && ones[arrNum.at(-1)] == 'zero') {
			return ones[arrNum[0]] + ' ' + 'hundred' + ' ' + tens[arrNum[1]]
		}

	}
}

// console.log(toReadable(90))