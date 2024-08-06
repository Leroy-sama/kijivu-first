<template>
	<div class="contact">
		<div class="contact__wrapper">
			<h1 class="contact__head">Get In Touch</h1>
			<p class="contact__text">
				Or email us directly via volunteer@betterme.org or
				team@betterme.org
			</p>
			<form>
				<select name="inquiry-ty" id="">
					<option value="what">Whats your inquiry about?</option>
					<option value="specific">
						Volunteering/Internship inquiry
					</option>
					<option value="general">General Inquiry</option>
				</select>
				<div class="grid">
					<div class="form-control">
						<input type="text" />
					</div>
					<div class="form__control">
						<input type="email" />
					</div>
				</div>
				<div class="form-control">
					<textarea name="" id=""></textarea>
				</div>
				<div class="form-control">
					<button>Submit</button>
				</div>
			</form>
		</div>
	</div>
</template>
