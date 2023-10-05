<script lang="ts">
  import { currentLanguageTag, onSetLanguageTag, setCurrentLanguageTag } from "./paraglide/runtime";
  import * as m from "./paraglide/messages"

  $: lang = currentLanguageTag();

  onSetLanguageTag((tag) => {
    console.log("language tag changed")
    lang = tag;
  });
  
</script>

{#key lang}

  <p>{m.onlyText()}</p>
  <p>{m.multipleParams({ name: "Samuel", count: 5})}</p>


  <button on:click={async () => {
    setCurrentLanguageTag("de");
    console.log("language tag changed");
  }}>change language tag to "de"</button>

{/key}
