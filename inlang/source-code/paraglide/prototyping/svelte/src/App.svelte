<script lang="ts">
  import { setCurrentLanguageTag, m } from "./paraglide/runtime";
</script>

{#await setCurrentLanguageTag("en")}
  <p>Loading languages...</p>
{:then _} 
  <p>{m("multipleParams", {name: "Samuel", count: 5})}</p>
{/await}

<button on:click={async () => {
  await setCurrentLanguageTag("de");
  console.log("language tag changed");
  console.log(m("multipleParams", { name: "Samuel", count: 5 }))
}}>change language tag</button>