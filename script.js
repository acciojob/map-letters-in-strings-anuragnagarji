//your JS code here. If required.
function mapletters(str) {
	let tempObj={};
	str=str.toLowerCase();
	for(let i=0;i<str.length;i++){
	if(tempObj[str[i]]){
		tempObj[str[i]].push(i);
	}
	else{
		tempObj[str[i]]=[i];
	}
	}
return tempObj;
}
let str=prompt();

alert(mapletters(str));