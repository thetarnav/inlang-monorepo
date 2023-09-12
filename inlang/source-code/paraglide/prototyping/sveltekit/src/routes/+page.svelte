<script lang="ts">
  import { setCurrentLanguageTag } from "../paraglide/runtime";
  import { onlyText } from "../paraglide/messages"
</script>

<p>{$onlyText()}</p>

<!-- <p>{m.multipleParams({name: "Samuel", count: 5})}</p> -->

<button on:click={async () => {
  await setCurrentLanguageTag("de");
  // console.log("language tag changed");
  // console.log(m.multipleParams({ name: "Samuel", count: 5 }))
}}>change language tag</button>