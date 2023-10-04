<script lang="ts">
  import { m, setLanguageTag } from "../paraglide/runtime";
  import { } from ""

  let count = 4
</script>

<p>{$m("multipleParams", { name: "Samuel", count })}</p> 
<p>{$m("onlyText", {})}</p> 

<a href="/some">test CSR routing</a>

<button on:click={async () => {
  setLanguageTag("de");
  console.log("language tag changed");
  console.log($m("multipleParams",{ name: "Samuel", count: 5 }))
}}>change language tag</button>

<button on:click={() => count = count + 1}>
  increase count
</button>