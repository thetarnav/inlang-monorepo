<script lang="ts">
  import { setCurrentLanguageTag } from "../../paraglide/runtime";
  import { multipleParams} from "../../paraglide/messages/de"
</script>

<p>{multipleParams({name: "Samuel", count: 9})}</p>

<a href="/en">en</a>

<button on:click={async () => {
  setCurrentLanguageTag("en");
}}>change language tag</button>