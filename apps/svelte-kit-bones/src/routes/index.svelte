<script>
  import Skull from "$components/Skull.svelte"
  import "../app.postcss"
</script>

<div class="flex items-center my-6">
  <Skull></Skull>
  <h1 class="text-3xl">Welcome to Svkeleton</h1>
</div>

<p class="ml-10">Visit <a href="https://github.com/satocean/svkeleton">github.com/satocean/svkeleton</a> to read the documentation</p>

<style global>
  body { @apply bg-black text-white }
  a { @apply text-blue-100 no-underline font-bold }
</style>