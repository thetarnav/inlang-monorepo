<script>
	import { derived } from "svelte/store"

  $: languageTag = "en"


  const messages = {
    en: "beauiful day!"
  }

  $: x = () => {
     return messages[languageTag]
  }

</script>

<p>
  {x()}
</p>

<button on:click={() => languageTag = "de"}>
  change language tag
</button>