<script lang="ts">
  import { m, setCurrentLanguageTag } from "../paraglide/runtime";
</script>

<p>{$m("multipleParams", { name: "Samuel", count: 5 })}</p> 
<p>{$m("onlyText", {})}</p> 

<button on:click={async () => {
  setCurrentLanguageTag("de");
  console.log("language tag changed");
  console.log($m("multipleParams",{ name: "Samuel", count: 5 }))
}}>change language tag</button>