const baseUrl = "http://42.193.168.201:8082"

export function myRequestGet(url, data) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			method: "GET",
			data: data,
			success: function(res) {
				resolve(res.data)
			},
			fail: function(err) {
				reject(err)
			}
		})
	})
}


export function myRequestPost(url, data) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			method: "POST",
			data: data,
			success: function(res) {
				resolve(res.data)
			},
			fail: function(err) {
				reject(err)
			}
		})
	})
}
