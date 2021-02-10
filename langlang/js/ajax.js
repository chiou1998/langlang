$.ajax({
    url: "./data/newsCategory.php",   //请求的url地址
    dataType:"json",           //返回的格式为json
    async: false,                //请求是否异步，默认为异步，这也是ajax的重要特性
    cache: false,                //是否请求cook
    timeout:5000,                   //设置时间限制
    data: JSON.stringify({
        module:'news'
    }),                           //传递的参数值
    headers: {
        'Content-Type': "application/json; chartset=utf-8"
    },
    type: "POST",                 //GET or POST
    beforeSend: function(){},
    success: function(req){ 
        let tagmenu = document.getElementsByClassName('tab-menu')[0];
        let data = req.data
        let menuHtml = ''
        data.forEach((item,index) => {
            let className = ''
            if(index === 0){className = 'current';}
            menuHtml += `
           <a href=javacript: void(0);" class="${className}" title=${item.categoryName}
            `
        });
    
      console.log(slidenext)
   },
       //请求成功时的处理
   
    error: function(res){}          //请求出错处理
 })