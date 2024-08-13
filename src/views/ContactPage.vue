<template>
	<main>
		<Teleport to="body">
			<div class="backdrop"></div>
			<div class="contact__wrapper">
				<div class="contact-text">
					<h1 class="text-head">Get In Touch</h1>
					<p class="text-desc">
						Email us directly via
						<span class="email">Kijivumedia@gmail.com</span> or by
						using the form below and a member of our team will be in
						touch.
					</p>
				</div>
				<div class="form-contacts">
					<form @submit.prevent="sendMessage">
						<div
							class="form__control"
							:class="{ invalid: !name.isValid }"
						>
							<input
								type="text"
								placeholder="Name"
								v-model="name.val"
								@blur="clearValidity(name)"
							/>
							<p class="err-msg" v-if="!name.isValid">
								Name cannot be empty
							</p>
						</div>
						<div
							class="form__control"
							:class="{ invalid: !email.isValid }"
						>
							<input
								type="email"
								id="email"
								placeholder="Email Address"
								v-model="email.val"
								@blur="clearValidity(email)"
							/>
							<p class="err-msg" v-if="!email.isValid">
								Please enter a valid email
							</p>
						</div>

						<div
							class="form__control"
							:class="{ invalid: !message.isValid }"
						>
							<textarea
								id="comments"
								rows="6"
								placeholder="Message"
								v-model="message.val"
								@blur="clearValidity(message)"
							></textarea>
							<p class="err-msg" v-if="!message.isValid">
								Message cannot be empty
							</p>
						</div>
						<div class="form__control">
							<button class="sbt__btn">Send Messsage</button>
						</div>
					</form>
				</div>
			</div>
		</Teleport>
	</main>
</template>

<script setup>
	import SecLoc from "@/assets/icons/SecLoc.vue";
	import Email from "@/assets/icons/Email.vue";
	import Phone from "@/assets/icons/Phone.vue";

	import { reactive, ref } from "vue";

	const name = reactive({
		val: "",
		isValid: true,
	});

	const email = reactive({
		val: "",
		isValid: true,
	});

	const message = reactive({
		val: "",
		isValid: true,
	});

	const number = reactive({
		val: "",
		isValid: true,
	});

	const formIsValid = ref(true);

	const validateForm = () => {
		formIsValid.value = true;
		if (name.val === "") {
			name.isValid = false;
			formIsValid.value = false;
		}
		if (email.val === "" || !email.val.includes("@")) {
			email.isValid = false;
			formIsValid.value = false;
		}
		if (message.val === "") {
			message.isValid = false;
			formIsValid.value = false;
		}
		if (number.val === "") {
			number.isValid = false;
			formIsValid.value = false;
		}
	};

	const clearValidity = (input) => {
		input.isValid = true;
	};

	const resetForm = () => {
		name.val = "";
		name.isValid = true;
		email.val = "";
		email.isValid = true;
		number.val = "";
		number.isValid = true;
		message.val = "";
		message.isValid = true;
	};

	const sendMessage = () => {
		validateForm();
		const formData = {
			name: name,
			email: email,
			number: number,
			message: message,
		};

		if (formIsValid.value) {
			console.log(formData);
			resetForm();
			// Add your logic to send the form data
		} else {
			console.error("Form validation failed");
		}
	};
</script>

<style lang="css" scoped>
	.backdrop {
		position: fixed;
		top: 0;
		left: 0;
		min-height: 120vh;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.75);
		z-index: 10;
	}

	.contact__wrapper {
		margin: 0 1.5rem;
		position: fixed;
		top: 0;
		left: 10%;
		width: 80%;
		z-index: 100;
		border-radius: 12px;
		border: none;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		padding: 0;
		margin: 0;
		/* overflow: hidden; */
		background-color: white;
	}

	.contact-text {
		padding-bottom: 2rem;
	}

	.text-head {
		color: var(--color02);
		text-align: center;
		padding: 1rem 0;
	}

	.text-desc {
		text-align: center;
	}

	.text-desc .email {
		color: var(--color02);
	}

	.form-contacts {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 3rem;
	}

	form {
		display: grid;
		gap: 1rem;
	}

	.form__control input,
	.form__control textarea {
		width: 100%;
		padding: 0.8rem 1rem;
		outline: none;
	}

	.sbt__btn {
		color: var(--color02);
		background-color: #fff;
		border: 1px solid var(--color02);
		padding: 0.8rem 1.5rem;
		cursor: pointer;
	}

	.addresses {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}

	.address {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		/* box-shadow: 0 2px 8px rgb(0 0 0 / 0.4); */
		/* padding: 2rem; */
	}

	.invalid input,
	.invalid textarea {
		border: 1px solid salmon;
		background-color: rgb(255, 187, 179);
	}

	.err-msg {
		color: salmon;
		font-size: 0.7rem;
	}

	@media (min-width: 35em) {
		.contact__wrapper {
			max-width: 1200px;
			margin: 4rem auto;
		}
	}
</style>
