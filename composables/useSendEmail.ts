import { Resend } from 'resend';
import type { ContactForm } from '~/types';

export default function () {
	const resend = new Resend('re_MfkLXkjs_7EGVwKPd7bNMiY5Fdn8NnPr7');

	const send = async (data: ContactForm) => {
		try {
			await resend.emails.send({
				from: 'onboarding@resend.dev',
				// to: 'fiestacelestial@cejes.com',
				to: 'el_odanis321@hotmail.com',
				subject: 'Formulario Contacto Fiesta Celestial',
				html: `<article>
					<strong>Nombre: </strong> ${data.name} <br />
					<strong>Teléfono: </strong> ${data.phone} <br />
					<strong>Correo: </strong> ${data.email} <br />
					<strong>Mensaje: </strong> ${data.message}
				</article>`
			});

			return true
		} catch (error) {
			return false
		}
	}

	return {
		send
	}
}