export default {
	myVar1: [],
	myVar2: {},
	async myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		await storeValue('varName', false)
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
			// await storeValue('varName', false)
		await test.run();
		const data = test.data;
		if(data.length > 0) {
			await storeValue('varName', true)
		}
		else {
			showAlert('No record found','error');
			await storeValue('varName', false)
		}
	}
}