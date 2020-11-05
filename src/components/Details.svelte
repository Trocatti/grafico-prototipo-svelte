<script>
  import { item } from "../store";

  let item_value;
  $: capitalize = value => value.charAt(0).toUpperCase() + value.slice(1);

  const unsubscribe = item.subscribe(value => {
    item_value = value;
  });
</script>

<style>
  .details__clusters {
    padding-top: 5px;
  }
  .list-group-item {
    padding: 5px 10px;
  }

  .list-group-item:first-child {
    border-top: 0;
  }
</style>

<ul class="details__clusters list-group">
  {#if item_value}
    {#each Object.keys(item_value) as item}
      <li class="list-group-item">{capitalize(item)}: {item_value[item]}</li>
    {/each}
  {/if}
</ul>
