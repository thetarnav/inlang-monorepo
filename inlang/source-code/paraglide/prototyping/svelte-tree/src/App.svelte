<script lang="ts">
  import { languageTag, changeLanguageTag } from "./paraglide/runtime";
  import * as m from "./paraglide/messages"
  import ParaglideJS from "./Adapter.svelte"

  $: name = "Samuel"


</script>

<ParaglideJS>
  <p>{m.onlyText()}</p>
  <p>{m.multipleParams({ name, count: 5})}</p>
  <button on:click={() => name = "Felix"}>change name</button>
  <button on:click={async () => {
    changeLanguageTag("de");
    console.log("language tag changed");
  }}>change language tag to "de"</button>
  <p>the current language tag is {languageTag}</p>
</ParaglideJS>
