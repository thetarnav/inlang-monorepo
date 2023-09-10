<script lang="ts">
  // import { m, setCurrentLanguageTag } from "./paraglide/runtime";
  import * as m from "./paraglide/messages/en"
</script>
<!-- 
{#await setCurrentLanguageTag("en")}
  <p>Loading languages</p>
{:then _} 
  <p>{m('onlyText', {name: "Samuel"})}</p>
  <p>{t.onlyText()}</p>
{/await} -->

<p>{m.multipleParams({name: "Samuel", count: 5})}</p>
