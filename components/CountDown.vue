<template>
	<div v-show="timer.active" class="countdown py-12 mt-5 flex items-center justify-center w-full max-w-screen-md p-3 m-auto">
		<div class="countdown__wrapper">
			<div>
				<h3 class="counter__title">Iniciamos en:</h3>
			</div>
			<div class="counter__timer">
				<div class="counter__timer__item simply-days">
                    <span class="counter__timer__item__number">{{ timer.days }}:</span>
                    <span class="counter__timer__item__text">Días</span>
				</div>
				<div class="counter__timer__item simply-hours">
                    <span class="counter__timer__item__number">{{ timer.hours }}:</span>
                    <span class="counter__timer__item__text">Horas</span>
				</div>
				<div class="counter__timer__item simply-minutes">
                    <span class="counter__timer__item__number">{{ timer.minutes }}:</span>
                    <span class="counter__timer__item__text">Minutos</span>
				</div>
				<div class="counter__timer__item simply-seconds">
                    <span class="counter__timer__item__number">{{ timer.seconds }}</span>
                    <span class="counter__timer__item__text">Segundos</span>
				</div>
			</div>
			<!-- <div>
				<button class="lg:flex lg:justify-end border border-black ml-auto rounded-full px-10 py-3 mt-10 md:mt-0">
                    <a href="#" class="text-black text-sm font-bold text-nowrap">Más información</a>
                </button>
			</div> -->
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
			timer.value = defineTimer('2025-05-01 00:00:00')
		}
		
		onBeforeMount(() => {
			setInterval(updateTimer, 1000)
		})
		
		onMounted(() => {
			updateTimer()
		})

		return {
			timer,
		}
	},
})
</script>
<style lang="scss" scoped>
.countdown__wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
    .counter__title {
        font-size: 18px;
        line-height: 37px;
        font-weight: 500;
		color: var(--color-principal);
    }
    
    .counter__timer {
        display: flex;
        gap: 30px;
    
        .counter__timer__item {
            background: #fff;
			color: var(--color-principal);
            font-size: 25px;
            font-weight: 800;
            line-height: 49.5px;
            display: flex;
            flex-direction: column;
            align-items: center;
            
            &__text {
                font-size: 12px;
                font-weight: 400;
                line-height: 24px;
            }
        }
    }

    @media (min-width: 900px) {
        justify-content: space-between;
        align-items: center;
        flex-direction: row;

        .counter__title {
            font-size: 25px;
        }

        .counter__timer {
            gap: 70px;

            .counter__timer__item {
                font-size: 45px;

                &__text {
                    font-size: 16px;
                }
            }
        }
        
    }
}

</style>