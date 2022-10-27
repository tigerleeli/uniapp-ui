<template>
	<view>
		<cu-custom>
			<block slot="content">
				<text>标题</text>
			</block>
			<block slot="right">
				<text class="text-white">添加</text>
			</block>
		</cu-custom>

		<view class="padding-30">
			<view class="bg-white border-radius-20">
				<view class="flex padding-30 solid-bottom" hover-class="hover-class">
					<image style="width: 48rpx;height: 48rpx;" mode="aspectFill"
						class="border-radius-10 margin-right-28" src="../../static/logo.png">
					</image>
					<view class="flex-1">一个标题</view>
					<view class="margin-right-20">
						<view class="notify-content">1</view>
					</view>
					<view>
						<text class="cuIcon-right text-arrow"></text>
					</view>
				</view>
				<view class="flex padding-30 solid-bottom" hover-class="hover-class">
					<image style="width: 48rpx;height: 48rpx;" mode="aspectFill"
						class="border-radius-10 margin-right-28" src="../../static/logo.png">
					</image>
					<view class="flex-1">一个标题</view>
					<view class="margin-right-20">
						<view class="notify-content">12</view>
					</view>
					<view>
						<text class="cuIcon-right text-arrow"></text>
					</view>
				</view>
			</view>

			<view class="bg-white border-radius-20 padding-20 margin-top-30">
				<view>
					<text class="text-blue">文字按钮</text>
				</view>

				<view class="margin-top-20">
					<button class="btn" type="primary">保存</button>
				</view>
				<view class="margin-top-20">
					<text class="btn-gray-blue">保存</text>
				</view>
			</view>

			<view class="bg-white border-radius-20 padding-20 margin-top-30">
				<view>
					<text class="bg-content padding-8">开心编程</text>
				</view>
				<view>
					<text class="text-42 bold">大标题</text>
				</view>
			</view>

			<view class="bg-white border-radius-20 padding-20 margin-top-30">
				<view class="flex padding-20 solid-bottom">
					<view>
						<text class="text-red">*</text>
						<text class="text-32">标题：</text>
					</view>
					<view class="flex-1">
						<input placeholder="请输入" />
					</view>
				</view>
				<view class="flex padding-20 solid-bottom">
					<view>
						<text class="none">*</text>
						<text class="text-32">标题：</text>
					</view>
					<view class="flex-1">
						<input placeholder="请输入" />
					</view>
					<view>
						<text class="text-blue bold">扫码</text>
					</view>
				</view>
				<view class="flex padding-20 solid-bottom">
					<view>
						<text class="text-red">*</text>
						<text class="text-32">开关：</text>
					</view>
					<view class="flex-1">
						<switch checked></switch>
					</view>
				</view>
				<view class="flex padding-20 solid-bottom">
					<view>
						<text class="text-red">*</text>
						<text class="text-32">对钩：</text>
					</view>
					<view class="flex-1">
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
					<view class="tr">
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
