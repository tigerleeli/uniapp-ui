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
			<view class="bg-white border-radius-20">
				<view class="flex">
					<view>标题</view>
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
