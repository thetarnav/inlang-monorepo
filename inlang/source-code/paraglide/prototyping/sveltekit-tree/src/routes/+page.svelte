<script lang="ts">
  import { setCurrentLanguageTag } from "./runtime";
  import { multipleParams} from "./messages"
</script>

<p>{$multipleParams({name: "Samuel", count: 5})}</p>

<button on:click={async () => {
  setCurrentLanguageTag("de");
}}>change language tag</button>