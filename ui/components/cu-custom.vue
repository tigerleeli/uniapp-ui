<template>
	<view>
		<view class="navi-container" :style="[{height:CustomBar + 'px'}]">
			<view class="navi-bar bg-gradual-blue" :style="{height:CustomBar+'px',paddingTop:StatusBar+'px'}">
				<view v-if="isBack" @tap="BackPage" class="left">
					<text class="cuIcon-back"></text>
				</view>
				<view v-else>
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
		position: absolute;
		text-align: center;
		width: calc(100% - 340rpx);
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		margin: auto;
		height: 60rpx;
		font-size: 34rpx;
		line-height: 60rpx;
		cursor: none;
		pointer-events: none;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.navi-bar .left {
		margin-left: 30rpx;
		font-size: 38rpx;
	}

	.navi-bar .right {
		margin-right: 28rpx;
	}
</style>
