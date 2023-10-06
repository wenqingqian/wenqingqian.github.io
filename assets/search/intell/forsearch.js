var contentforsearch = [
	{
	id: 0,
	title: 'test',
	description: 'a simple test',
	year: '2023',
	tag: 'todo bbb aaa',
	category: 'aaav sssv ssdf',
	content: 'konw what happen sad kill',
	href: 'title'
	},
	{
	id: 1,
	title: 'test2',
	description: 'a simple test2',
	year: '2023',
	tag: 'ccb cca',
	category: 'ssdasdf',
	content: 'about how much can we do for',
	href: 'title'
	},
	{
	id: 2,
	title: 'test3',
	description: 'a simple test3',
	year: '2023',
	tag: 'fff ffs',
	category: 'asdav scsdssv ssasddf',
	content: 'lsl ttt i an the',
	href: 'title'
	},
]

var util = {
	debounce: function(fn,wait){
		var timeout = null;      //定义一个定时器
		return function() {
			if(timeout !== null) 
				clearTimeout(timeout);  //清除这个定时器
			timeout = setTimeout(fn, wait);  
		}
	}
}
function dbintellsearch(){
	util.debounce(intellsearch(),0);
}


function iintellsearch(){
	const timerId = setInterval(intellsearch, 100);
	setTimeout(function() {
		clearInterval(timerId);
		console.log("定时器已停止！");
	}, 1000);
}
function intellsearch(){
	
	
	var inputString = $("#searchInput").val();
	console.log('>'+inputString+'<');
	if(inputString.trim()==""){
		$("#wqq3p").html("");
		return;
	}

	// var inputString = "test";
	var keywords = inputString.split(/\s+/);

	var results = []; // 用于存储每段文本的匹配结果

	// 循环遍历每段文本
	for (var i = 0; i < contentforsearch.length; i++) {
		var text = contentforsearch[i];
		var totalScore = 0; // 用于累积得分
		// 循环遍历每个关键字
		for (var j = 0; j < keywords.length; j++) {
			var keyword = keywords[j];
			
			var fieldValue = text.title;
			var match = fieldValue.toLowerCase().match(new RegExp(keyword.toLowerCase(), 'gi'));
			if(match!=null){
				var matchLength = match.length;	
				matchLength = Math.min(matchLength,1);	
				totalScore += 50*matchLength;
			}

			var fieldValue = text.description;
			var match = fieldValue.toLowerCase().match(new RegExp(keyword.toLowerCase(), 'gi'));
			if(match!=null){
				var matchLength = match.length;	
				matchLength = Math.min(matchLength,1);	
				totalScore += 30*matchLength;
			}

			var fieldValue = text.year;
			var match = fieldValue.toLowerCase().match(new RegExp(keyword.toLowerCase(), 'gi'));
			if(match!=null){
				var matchLength = match.length;	
				matchLength = Math.min(matchLength,1);	
				totalScore += 10*matchLength;
			}

			var fieldValue = text.tag;
			var match = fieldValue.toLowerCase().match(new RegExp(keyword.toLowerCase(), 'gi'));
			if(match!=null){
				var matchLength = match.length;	
				matchLength = Math.min(matchLength,1);	
				totalScore += 50*matchLength;
			}

			var fieldValue = text.category;
			var match = fieldValue.toLowerCase().match(new RegExp(keyword.toLowerCase(), 'gi'));
			if(match!=null){
				var matchLength = match.length;	
				matchLength = Math.min(matchLength,1);	
				totalScore += 50*matchLength;
			}

			var fieldValue = text.content;
			var match = fieldValue.toLowerCase().match(new RegExp(keyword.toLowerCase(), 'gi'));
			if(match!=null){
				var matchLength = match.length;	
				matchLength = Math.min(matchLength,1);	
				totalScore += matchLength;
			}
		}

		// 如果总得分大于等于2，将结果添加到列表中
		if (totalScore >= 1) {
			results.push({ id: text.id, score: totalScore });
		}
	}

	// 根据得分从高到低排序结果
	results.sort(function (a, b) {
		return b.score - a.score;
	});
	

	var contenttopost ="";
	if(results.length>0){
		contenttopost += `
		<li></li>
		`;
	}else{
		$("#wqq3p").html("");

		return;
	}
	// 输出结果
	
	for (var i = 0; i < results.length; i++) {
		var thisreplace = contentforsearch[results[i].id];
		contenttopost += `
		<li>
			<h3> 
				<a class="post-mysm-title" href="/blog/${thisreplace.year}/${thisreplace.href}/">
					${thisreplace.title}
				</a> 
			</h3> 
			<p class="post-mysm-desp">${thisreplace.description}</p> 
			<p class="post-mysm-tags"> 
				<a href="/blog/${thisreplace.year}"> 
					<i class="fas fa-calendar fa-sm"></i> 
					${thisreplace.year}
				</a> 
				&nbsp; &middot; &nbsp; 
		`;
		
		var tag = thisreplace.tag;
		var tags = tag.split(/\s+/);
		for(var s of tags){
			contenttopost+=`
			<a href="/blog/tag/${s}"> 
				<i class="fas fa-hashtag fa-sm"></i> 
				${s}
			</a> 
			&nbsp;
			`
		}
 		contenttopost += `&nbsp; &middot; &nbsp; `;

		var cate = thisreplace.category;
		var cates = cate.split(/\s+/);
		for(var s of cates){
			contenttopost+=`
			<a href="/blog/category/${s}"> 
				<i class="fas fa-tag fa-sm"></i> 
				${s}
			</a> 
			&nbsp;
			`
		}
		contenttopost += `
			</p>
		</li> 
		`;
	}
	$("#wqq3p").html(contenttopost);
	// console.log(contenttopost);
};
