<template>
	<div v-show="timer.active" class="countdown mt-5 flex items-center justify-center w-full max-w-screen-xl p-3 m-auto">
		<div class="countdown__wrapper flex justify-center">
			<div>
				<h3 class="counter__text">Iniciamos en:</h3>
			</div>
			<div class="counter__timer">
				<div
					class="counter__timer__item simply-days">
					{{ timer.days }}d
				</div>
				<div
					class="counter__timer__item simply-hours">
					{{ timer.hours }}h
				</div>
				<div
					class="counter__timer__item simply-minutes">
					{{ timer.minutes }}m
				</div>
				<div
					class="counter__timer__item simply-seconds">
					{{ timer.seconds }}s
				</div>
			</div>
			<div>
				<button class="lg:flex lg:justify-end border ml-auto rounded-full px-10 py-2">
                    <a href="#" class="text-black text-sm font-normal">Más información</a>
                </button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted } from "vue"

export default defineComponent({
	name: "SbPromotionalHeader",
	components: {
	},
	setup() {
        const design = computed(() => {
			return {
				backgroundTimer: '',
				timerTitle: 'title',
				timerText: 'timer text',
				timerBackground: 'red',
				tagText: 'tag text',
				tagBackground: 'blue',
			}
		})

		const timer = ref({
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
			active: false,
		})

		const defineTimer = (date: any) => {
			// debugger
			if (!date) {
				return {
					days: 0,
					hours: 0,
					minutes: 0,
					seconds: 0,
					active: false,
				}
			}

			const endDate = new Date(date)
			const now = new Date().getTime()
			const distance = endDate.getTime() - now
			const days = Math.floor(distance / (1000 * 60 * 60 * 24))
			const hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			)
			const minutes = Math.floor(
				(distance % (1000 * 60 * 60)) / (1000 * 60)
			)
			const seconds = Math.floor((distance % (1000 * 60)) / 1000)
			const active = distance > 0

			return {
				days,
				hours,
				minutes,
				seconds,
				active,
			}
		}

		const updateTimer = () => {
			timer.value = defineTimer('2024-04-27 00:00:00')
		}
		
		onBeforeMount(() => {
			setInterval(updateTimer, 1000)
		})
		
		onMounted(() => {
			updateTimer()
		})

		return {
			design,
			timer,
		}
	},
})
</script>
<style lang="scss" scoped>
.countdown__wrapper {
    width: 100%;
    border: 1px solid #000;
    display: flex;
}

.counter__timer {
    background-color: tomato;

    .counter__timer__item {
        background: #fff;
        font-size: 45px;
    }
}
</style>