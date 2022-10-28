/**
 * 接口请求
 */

import {
	remoteUrl
} from './constant'

export function request(url, data, method) {
	return new Promise((resolve, reject) => {
		let header = {}
		const token = uni.getStorageSync('user_token')
		if (token) {
			header = {
				'Authorization': token
			}
		}
		uni.request({
			url: remoteUrl + url,
			method: method,
			data: data,
			header: header,
			success: (res) => {
				console.log('request res', res.data)
				// res = {
				// 	data: {
				// 		code: 10000,
				// 		data: {}
				// 	}
				// }
				if (res.data.code != 10000) {
					// 自定义编码
					reject('请求出错')
				}
				resolve(res.data.data)
			},
			error: (error) => {
				reject('请求出错，请检查网络或稍后再试')
			}
		});
	})
}
