<template>
	<view>
		<view class="navi-container" :style="[{height:CustomBar + 'px'}]">
			<view class="navi-bar bg-gradual-blue" :style="[{height:CustomBar+'px',paddingTop:StatusBar+'px'}]">
				<view v-if="isBack" @tap="BackPage" class="left">
					<text class="cuIcon-back"></text>
				</view>
				<view v-else class="left">
					<text></text>
				</view>
				<view class="content">
					<slot name="content"></slot>
				</view>
				<view class="right">
					<slot name="right"></slot>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar
			};
		},
		name: 'cu-custom',
		props: {
			isBack: {
				type: [Boolean, String],
				default: true
			}
		},
		methods: {
			BackPage() {
				if (getCurrentPages().length < 2 && 'undefined' !== typeof __wxConfig) {
					let url = '/' + __wxConfig.pages[0]
					return uni.redirectTo({
						url
					})
				}
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style>
	.navi-container {
		position: relative;
		display: block;
	}

	.navi-bar {
		position: fixed;
		z-index: 9999;
		width: 100%;
		top: 0;
		z-index: 1024;
		box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0.1);
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.navi-bar .content {
		flex: 1;
		text-align: center;
		font-size: 32rpx;
	}

	.navi-bar .left {
		margin-left: 30rpx;
		font-size: 38rpx;
		width: 100rpx;
	}

	.navi-bar .right {
		margin-right: 28rpx;
		width: 100rpx;
	}
</style>
