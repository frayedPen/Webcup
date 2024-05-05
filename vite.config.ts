import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	base: 'https://bravo6.maurice.webcup.hodi.host/',
	server: {
		fs: {
			allow: ['public']
		}
	}
});
