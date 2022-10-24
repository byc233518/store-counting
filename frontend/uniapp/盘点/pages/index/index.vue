<template>
		<view class="container">
			<uni-card :is-shadow="false" is-full>
				<text class="uni-h6">收集、校验、提交数据。</text>
			</uni-card>

			<uni-section title="内容区域" type="line">
				<view class="example">
					<!-- 基础表单校验 -->
					<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData">
						<uni-forms-item label="名称" required name="name">
							<uni-easyinput v-model="valiFormData.name" placeholder="" />
						</uni-forms-item>
						<uni-forms-item label="编码" required name="code">
							<uni-easyinput v-model="valiFormData.code" placeholder="" />
						</uni-forms-item>
						<uni-forms-item label="数量" required name="qty">
							<uni-easyinput v-model="valiFormData.qty" placeholder="请输入数量" />
						</uni-forms-item>
						<uni-forms-item label="备注" name="desc">
							<uni-easyinput type="textarea" v-model="valiFormData.desc" placeholder="请输入自我介绍" />
						</uni-forms-item>
					</uni-forms>
					<button type="primary" @click="submit('valiForm')">提交</button>
					<br>
					<button type="primary" @click="scan()">扫码</button>
				</view>
			</uni-section>
			
		</view>
	</template>


	<script>
		export default {
			data() {
				return {
					// 校验表单数据
					valiFormData: {
						name: '',
						code: '',
						qty: '',
						desc: '',
					},
					// 校验规则
					rules: {
						name: {
							rules: [{
								required: true,
								errorMessqty: '姓名不能为空'
							}]
						},
						qty: {
							rules: [{
								required: true,
								errorMessqty: '年龄不能为空'
							}, {
								format: 'number',
								errorMessqty: '年龄只能输入数字'
							}]
						}
					},
				}
			},
			computed: {
				// 处理表单排列切换
				alignment() {
					if (this.current === 0) return 'left'
					if (this.current === 1) return 'top'
					return 'left'
				}
			},
			onLoad() {},
			onReady() {
				// 设置自定义表单校验规则，必须在节点渲染完毕后执行
				this.$refs.customForm.setRules(this.customRules)
			},
			methods: {
				scan() {
					const self = this
					uni.scanCode({
						success: function (res) {
							console.log('条码类型：' + res.scanType);
							console.log('条码内容：' + res.result);
							if(res.result) {
								self.$set(self.valiFormData,'code',res.result)
							}
							
						}
					});
				},
				submit(ref) {
					this.$set(this.valiFormData,'code',"haha")
					// this.$refs[ref].validate().then(res => {
					// 	console.log('success', res);
					// 	uni.showToast({
					// 		title: `校验通过`
					// 	})
					// }).catch(err => {
					// 	console.log('err', err);
					// })
				},
			}
		}
	</script>
	<style lang="scss">
		.example {
			padding: 15px;
			background-color: #fff;
		}

		.segmented-control {
			margin-bottom: 15px;
		}

		.button-group {
			margin-top: 15px;
			display: flex;
			justify-content: space-around;
		}

		.form-item {
			display: flex;
			align-items: center;
		}

		.button {
			display: flex;
			align-items: center;
			height: 35px;
			margin-left: 10px;
		}
	</style>
