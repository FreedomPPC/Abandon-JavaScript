function queryParams(name) {
    var str = '?errno=0&errmsg=Auth%20Login%20Sucess&&bduss=&ssnerror=0&traceid=';
    var reg = new RegExp('(?:^|&)' + name + '=([^&]*)(?:&|$)', 'i');

    var arr = str.match(reg);

    console.log(arr);
}

queryParams('errmsg');
