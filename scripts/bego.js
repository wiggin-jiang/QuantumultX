var body = $response.body; 
var obj = JSON.parse(body); 

// vip过期时间
var expired = "2030-01-01 00:00:00";


for (var umc in obj.umcList) {
	umc.umcOverdue= false;
	umc.endTime=expired;

}
			
body = JSON.stringify(obj); 
$done(body);

