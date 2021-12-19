<script>
  import Skull from "$components/Skull.svelte"
  import "../app.postcss"
</script>

<div class="flex items-center my-6">
  <Skull></Skull>
  <h1 class="text-3xl">Welcome to My Awesome App!</h1>
</div>

<p class="ml-10">Visit <a href="https://github.com/coinos/svkeleton">github.com/coinos/svkeleton</a> to read the documentation</p>

<style global>
  body { @apply bg-black text-white }
  a { @apply text-blue-100 no-underline font-bold }
</style>