//your JS code here. If required.
function mapletters(str) {
	let tempObj={};
	str=str.tolowercase();
	for(let i=0;i<str.length;i++){
	if(tempObj[str[i]]){
		tempObj[str[i]].push(i);
	}
	else{
		tempObj[str[i]]=[i];
	}
	}
alert(tempObj);
}
//let str=prompt();
let obj={e:3,t:5};
mapletters("dodo");