<template>
	<section class="contact-form flex flex-col lg:grid lg:grid-cols-2 gap-5 p-2">
		<div class="contact-form__group flex flex-col">
			<label class="contact-form__label text-bold text-lg mb-2" for="name">Nombre</label>
			<input class="contact-form__input bg-gray-100 pl-4 py-3 rounded-full" type="text" id="name" placeholder="Luis"
				v-model="contactForm.name">
		</div>
		<div class="contact-form__group flex flex-col">
			<label class="contact-form__label text-bold text-lg mb-2" for="phone">Teléfono</label>
			<input class="contact-form__input bg-gray-100 pl-4 py-3 rounded-full" type="phone" id="phone"
				placeholder="301 798 54 52" v-model="contactForm.phone">
		</div>
		<div class="contact-form__group flex flex-col col-span-2">
			<label class="contact-form__label text-bold text-lg mb-2" for="email">Correo</label>
			<input class="contact-form__input bg-gray-100 pl-4 py-3 rounded-full" type="email" id="email"
				placeholder="Ingresa tu correo" v-model="contactForm.email">
		</div>
		<div class="contact-form__group flex flex-col col-span-2">
			<label class="contact-form__label text-bold text-lg mb-2" for="message">Mensaje</label>
			<textarea class="contact-form__input bg-gray-100 pl-4 py-4 rounded-xl" type="text" id="message"
				placeholder="Pon tu mensaje aquí..." v-model="contactForm.message"></textarea>
		</div>

		<button @click="submit" class="flex items-center justify-center rounded-full px-2 py-4 mt-5 bg-lime-700">
			<a href="#" class="text-white text-sm font-normal text-nowrap">Enviar</a>
		</button>
	</section>
</template>

<script lang="ts" setup>
const mail = useMail()
import type { ContactForm } from '~/types';

const contactForm: ContactForm = reactive({
	name: '',
	phone: '',
	email: '',
	message: ''
})

const submit = async () => {
	console.log(contactForm)
	// await send(contactForm)
	mail.send({
		from: contactForm.email,
		subject: 'Incredible',
		text: contactForm.message,
	})
}
</script>

<style></style>