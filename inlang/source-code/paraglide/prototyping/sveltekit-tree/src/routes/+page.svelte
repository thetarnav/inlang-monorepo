<script lang="ts">
  import { setCurrentLanguageTag } from "../paraglide/runtime";
  import { multipleParams} from "../paraglide/messages/en"
</script>

<p>{multipleParams({name: "Samuel", count: 5})}</p>

<button on:click={async () => {
  setCurrentLanguageTag("de");
}}>change language tag</button>