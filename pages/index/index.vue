<template>
	<view>
		<cu-custom>
			<block slot="content">
				<text>标题</text>
			</block>
			<block slot="right">
				<text>右边</text>
			</block>
		</cu-custom>

		<view class="padding-30">
			<view class="bg-white border-radius-8">
				<view class="flex padding-20">
					<view class="margin-right-30">
						<text class="cuIcon-people" style="font-size: 38rpx;"></text>
					</view>
					<view class="flex-1">一个标题</view>
					<view>
						<text class="cuIcon-right text-40 text-grey"></text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	page {
		background-color: #F2F0F6;
	}
</style>
