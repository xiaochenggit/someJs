var public = {
	/**
	 * [ispalindrome 判断字符串是不是回文 如果一个字符串忽略标点符号、大小写和空格，
	 * 正着读和反着读一模一样，那么这个字符串就是palindrome(回文)。]
	 * @param  {[string]} str [判断的字符串]
	 * @return {[boolean]}     [是否是回文]
	 */
	ispalindrome: function(str) {
		if (str.length === 1) {
			return true;
		}
		var str = str.toLocaleLowerCase().replace(/[^a-z0-9]/g,'');
		var str1 = str.split('').reverse().join('');
		return str === str1;
	},
	/**
	 * [findLongestWord 找到字符串中最长的单词的长度]
	 * @param  {[type]} str [检测的字符串]
	 * @return {[number]}  length   [字符串长度]
	 */
	findLongestWord: function(str) {
		var arr = str.split(' ');
		var maxLength = 0;
		arr.forEach( function(element, index) {
			maxLength = Math.max(maxLength, element.length);
		});
		return maxLength;
	},
	/**
	 * [titleCase 每个单词的首字母都大写 , 其余小写]
	 * @param  {[string]} str [字符串]
	 * @return {[string]}     [处理后的字符串]
	 */
	titleCase: function(str) {
		var str = str.toLowerCase();
		arr = str.split(/\s+/);
		arr.forEach( function(element, index) {
			arr[index] = arr[index][0].toUpperCase() + arr[index].slice(1);
		});
		return arr.join(' ');
	},
	/**
	 * [largestOfFour 找到数组中元素最大值,并且组成新的数组]
	 * @param  {[Array]} arr [需要处理的数组]
	 * @return {[Array]}     [返回的最大值数组]
	 */
	largestOfFour: function (arr) {
		var newArr = [];
		arr.forEach( function(element, index) {
			newArr.push(element.reduce(function(a,b){
				return Math.max(a, b);
			}));
		});
		return newArr;
	},
	/**
	 * [confirmEnding 查询字符串是否以 target 结尾]
	 * @param  {[String]} str    [需要检查的字符串]
	 * @param  {[target]} target [结尾字符]
	 * @return {[boolean]}        [false || true]
	 */
	confirmEnding: function (str,target){
		var length = target.length;
		var str1 = str.slice(-1 * length);
		return str1 === target;
	},
	/**
	 * [chunkArr description]
	 * @param  {[Array]} arr  [需要出住]
	 * @param  {[type]} size [description]
	 * @return {[Array]}      [返回数组]
	 */
	chunkArr: function(arr, size) {
		var newArr = [];
		var index = 0;
		while(index < arr.length){
		newArr.push(arr.slice(index,index + size));
		index += size;
		}
		return newArr;
	},
	/**
	 * [rot13 加密 偏移13(只对字母有效)]
	 * @param  {[密码]} str [用户密码]
	 * @return {[加密之后的密码]}     [description]
	 */
	rot13: function (str){
		 var str1 ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		  var str2 = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
		  var str3 = '';
		  for (var i = 0 ; i < str.length ; i ++ ) {
		    var index = str1.indexOf(str[i]);
		    if (index > -1){
		      str3 += str2[index];
		    } else {
		      str3 += str[i];
		    }
		  }
		  return str3;
	},
	/**
	 * [getGeolocation 获得经纬度]
	 * @return {[type]} [description]
	 */
	getGeolocation: function(){
		var obj = {};
		if (navigator.geolocation) {
		  navigator.geolocation.getCurrentPosition(function(position) {
		    obj = {
		   	"latitude" : position.coords.latitude,
		   	 "longitude" : position.coords.longitude
		   	}
		  });
		}
		return obj;
	}
}