<script lang="ts">
  import { languageTag, onChangeLanguageTag } from "./paraglide/runtime";

  $: lang = languageTag

  onChangeLanguageTag((tag) => {
    console.log("language tag changed")
    lang = tag;
  });
</script>

{#key lang}
  <slot></slot>
{/key}
