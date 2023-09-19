<script lang="ts">
  import { setCurrentLanguageTag } from "./paraglide/runtime";
  import { m} from "./paraglide/runtime"
</script>


<p>{$m("onlyText", {})}</p>
<p>{$m("multipleParams", { name: "Samuel", count: 5})}</p>


<button on:click={async () => {
  setCurrentLanguageTag("de");
  console.log("language tag changed");
  // console.log($m("multipleParams", { name: "Samuel", count: 5 }))
}}>change language tag to "de"</button>


<!-- <Manual></Manual> -->
