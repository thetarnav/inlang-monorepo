<script lang="ts">
  import { m, setCurrentLanguageTag } from "./runtime";
</script>

<p>{$m("oneParam", {name: "Samuel"})}</p>
<p>{$m("multipleParams", {name: "Samuel", count: 5})}</p> 
<!-- <p>{$m("x")}</p> --> 

<button on:click={async () => {
  setCurrentLanguageTag("de");
  console.log("language tag changed");
  console.log($m("multipleParams",{ name: "Samuel", count: 5 }))
}}>change language tag</button>