<script>
	import GithubLogo from '$lib/components/svg/GithubLogo.svelte'
</script>

<footer class="fixed bottom-0 left-0 flex justify-between w-full p-8 text-sm">
	<p class="text-gray-600">© Kilimanjjjaro</p>
	<div class="flex items-center gap-6">
		<a
			class="text-white transition-colors duration-300 ease-in-out xl:hover:text-primary"
			href="https://www.apple.com/stevejobs/"
			target="_blank"
			rel="noopener noreferrer"
		>
			Steve
		</a>
		<a href="https://github.com/kilimanjjjaro" target="_blank" rel="noopener noreferrer">
			<GithubLogo />
		</a>
	</div>
</footer>
