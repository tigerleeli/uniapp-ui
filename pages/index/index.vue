<template>
	<view>
		<cu-custom>
			<block slot="content">
				<text>标题</text>
			</block>
			<block slot="right">
				<text class="cuIcon-scan text-42"></text>
			</block>
		</cu-custom>

		<view class="padding-30">
			<view class="bg-white border-radius-20 padding-20">
				<view>
					<text class="text-26">文字</text>
				</view>
				<view>
					<text class="text-32">文字</text>
				</view>
				<view>
					<text class="text-38">文字</text>
				</view>
				<view>
					<text class="text-42 bold">文字</text>
				</view>
			</view>

			<view class="bg-white border-radius-20 padding-20 margin-top-30">
				<view class="text-center">
					<text class="btn-gray-blue">小按钮</text>
				</view>

				<view hover-class="text-hover" class="text-center margin-top-20">
					<text class="btn-text">文字按钮</text>
				</view>

				<view class="margin-top-20">
					<button class="btn-primary" type="primary">大按钮</button>
				</view>
			</view>

			<view class="bg-white border-radius-20 margin-top-30">
				<view class="flex padding-30 solid-bottom" hover-class="bg-hover">
					<image style="width: 48rpx;height: 48rpx;" mode="aspectFill"
						class="border-radius-10 margin-right-28" src="../../static/logo.png">
					</image>
					<view class="flex-1">列表项1</view>
					<view class="margin-right-20">
						<view class="notify-content">6</view>
					</view>
					<view>
						<text class="cuIcon-right text-arrow"></text>
					</view>
				</view>
				<view class="flex padding-30 solid-bottom" hover-class="hover-class">
					<image style="width: 48rpx;height: 48rpx;" mode="aspectFill"
						class="border-radius-10 margin-right-28" src="../../static/logo.png">
					</image>
					<view class="flex-1">列表项2</view>
					<view class="margin-right-20">
						<text class="text-grey">备注</text>
					</view>
					<view>
						<text class="cuIcon-right text-arrow"></text>
					</view>
				</view>

				<view class="flex padding-30 solid-bottom" hover-class="hover-class">
					<view class="relative" style="width: 96rpx;height: 96rpx;">
						<image style="width: 96rpx;height: 96rpx;" mode="aspectFill"
							class="border-radius-10 margin-right-28" src="../../static/logo.png">
						</image>
						<view class="absolute notify-content" style="top: -12rpx;right: -12rpx;">1</view>
					</view>
					<view class="flex-1 margin-left-24">
						<view class="text-34">不忘初心</view>
						<view class="text-28 margin-top-12 text-gray">你好在吗？</view>
					</view>
					<view style="align-self: flex-start;">
						<text class="text-gray text-26">晚上10:28</text>
					</view>
				</view>
			</view>

			<view class="bg-white border-radius-20 padding-20 margin-top-30">
				<view class="bg-search padding-12 border-radius-16 flex">
					<text class="cuIcon-search text-grey margin-right-8"></text>
					<view class="flex-1">
						<input placeholder="请输入搜索关键字" />
					</view>
					<text class="cuIcon-roundclosefill text-gray text-38"></text>
				</view>
			</view>


			<view class="bg-white border-radius-20 padding-20 margin-top-30">
				<view class="flex padding-20 solid-bottom">
					<view>
						<text class="text-red">*</text>
						<text class="text-32">输入框：</text>
					</view>
					<view class="flex-1">
						<input placeholder="请输入" />
					</view>
				</view>
				<view class="flex padding-20 solid-bottom">
					<view>
						<text class="none">*</text>
						<text class="text-32">输入框：</text>
					</view>
					<view class="flex-1">
						<input placeholder="请输入" />
					</view>
					<view>
						<text class="btn-text">扫码</text>
					</view>
				</view>
				<view class="flex padding-20 solid-bottom justify-between">
					<view>
						<text class="text-red">*</text>
						<text class="text-32">开关按钮：</text>
					</view>
					<view>
						<switch checked></switch>
					</view>
				</view>
				<view class="flex padding-20 solid-bottom justify-between">
					<view>
						<text class="text-red">*</text>
						<text class="text-32">选择框：</text>
					</view>
					<view>
						<checkbox checked></checkbox>
					</view>
				</view>
			</view>

			<view class="bg-white border-radius-20 padding-20 margin-top-30">
				<view class="table">
					<view class="th">
						<view class="td">姓名</view>
						<view class="td">学号</view>
						<view class="td">爱好</view>
					</view>
					<view v-for="item in 3" class="tr">
						<view class="td">张三</view>
						<view class="td">0001</view>
						<view class="td">编程</view>
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
