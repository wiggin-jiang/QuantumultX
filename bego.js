var body = $response.body; 
var obj = JSON.parse(body); 

// vip过期时间
var expired = 1735660800;

obj.result.is_vip = true;
obj.result.svip_expired_at = expired;
obj.result.is_xy_vip = true;
obj.result.vip_type = "s";

obj.result.wt.vip = {
	"svip_apple_expired_at": expired,
	"enabled": true,
	"is_auto_renewal": true,
	"auto_renewal_type": "",
	"svip_auto_renewal_type": "",
	"svip_expired_at": expired,
	"expired_at": 0.0
}
			
body = JSON.stringify(obj); 
$done(body);
