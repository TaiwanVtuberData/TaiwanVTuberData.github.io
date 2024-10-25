import { defineConfig, loadEnv } from 'vite';
import preact from '@preact/preset-vite';
import checker from 'vite-plugin-checker';
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd(), '')

	return {
		plugins: [
			preact(),
			checker({
				typescript: true
			}),
			VitePWA({
				manifest: {
					name: "Taiwan VTuber Data",
					short_name: "TW VT Data",
					start_url: "/",
					display: "standalone",
					orientation: "portrait",
					background_color: "#000000",
					theme_color: "#000000",
					icons: [
					  {
						src: "android-chrome-192x192.png",
						type: "image/png",
						sizes: "192x192"
					  },
					  {
						src: "android-chrome-512x512.png",
						type: "image/png",
						sizes: "512x512"
					  }
					]
				}
			  })
		],
		build: {
			outDir: './build'
		},
		define: { // genius design
			'import.meta.env.APP_VERSION': JSON.stringify(env.npm_package_version),
			'import.meta.env.CONTACT_EMAIL': JSON.stringify(env.CONTACT_EMAIL),
			'import.meta.env.ENFORCE_YOUTUBE_COMPLIANCE': JSON.stringify(env.ENFORCE_YOUTUBE_COMPLIANCE),
			'import.meta.env.GOOGLE_FORM_URL': JSON.stringify(env.GOOGLE_FORM_URL),
            // GitHub doesn't allow custom env that starts with GITHUB_
			'import.meta.env.GITHUB_ISSUE_URL': JSON.stringify(env._P_GITHUB_ISSUE_URL),
			'import.meta.env.ROUTE_PREFIX': JSON.stringify(env.ROUTE_PREFIX),
			'import.meta.env.TIMEZONE_DIFF_IN_HOUR': JSON.stringify(env.TIMEZONE_DIFF_IN_HOUR),
			'import.meta.env.ENABLE_ADVERTISEMENT': JSON.stringify(env.ENABLE_ADVERTISEMENT),
			'import.meta.env.ADVERTISEMENT_LINK': JSON.stringify(env.ADVERTISEMENT_LINK),
			}
	}
});
