<template>
	<div class="layout-logo" v-if="setShowLogo" @click="onThemeConfigChange">
		<img src="/@/assets/cpds-icon.png" class="layout-logo-medium-img" />
	</div>
	<div class="layout-logo-size" v-else @click="onThemeConfigChange">
		<img src="/@/assets/cpds-mini-icon.png" class="layout-logo-size-img" />
	</div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useThemeConfig } from '/@/stores/themeConfig';

export default defineComponent({
	name: 'layoutLogo',
	setup() {
		const storesThemeConfig = useThemeConfig();
		const { themeConfig } = storeToRefs(storesThemeConfig);
		// Set logo display
		const setShowLogo = computed(() => {
			let { isCollapse, layout } = themeConfig.value;
			return !isCollapse || layout === 'classic' || document.body.clientWidth < 1000;
		});
		// Logo Click Implementation Menu to expand or stow
		const onThemeConfigChange = () => {
			if (themeConfig.value.layout === 'transverse') return false;
			themeConfig.value.isCollapse = !themeConfig.value.isCollapse;
		};
		return {
			// logoMini,
			setShowLogo,
			themeConfig,
			onThemeConfigChange,
		};
	},
});
</script>

<style scoped lang="scss">
.layout-logo {
	width: 220px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: rgb(0 21 41 / 2%) 0px 1px 4px;
	color: var(--el-color-primary);
	font-size: 16px;
	cursor: pointer;
	animation: logoAnimation 0.3s ease-in-out;
	span {
		white-space: nowrap;
		display: inline-block;
	}
	&:hover {
		span {
			color: var(--color-primary-light-2);
		}
	}
	&-medium-img {
		width: 125px;
		margin-right: 5px;
	}
}
.layout-logo-size {
	width: 100%;
	height: 50px;
	display: flex;
	cursor: pointer;
	animation: logoAnimation 0.3s ease-in-out;
	&-img {
		width: 20px;
		margin: auto;
	}
	&:hover {
		img {
			animation: logoAnimation 0.3s ease-in-out;
		}
	}
}
</style>
