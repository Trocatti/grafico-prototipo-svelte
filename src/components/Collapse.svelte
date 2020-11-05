<script>
  import { fade } from "svelte/transition";
  import { carepath } from "../store";
  import { gAtendimentos } from "../utils";
  import Clusters from "./Clusters.svelte";
  import Bars from "./Bars.svelte";

  let collapseActive = 0;
  let atendimentos = gAtendimentos;

  const sizeAt = [9999999, 1111111];
  const unsubscribe = carepath.subscribe(value => {
    console.log("unsubscribe", value);
  });

  $: rNumbers = index => "Padrão";
</script>

<style>
  :root {
    --collapse-font-size: 12px;
  }

  .grid__collapse {
    display: grid;
    align-items: center;
    grid-template-areas: "collapse__title collapse__items";
    grid-template-columns: 100px auto;
    background-color: #ededed;
    cursor: pointer;
    border-bottom: var(--border-b-r);
    border-top: var(--border-t-l);
  }

  .collapse__title {
    grid-area: collapse__title;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-weight: bold;
    height: 100%;
    padding-right: 5px;
    font-size: var(--collapse-font-size);
    border-right: var(--border-b-r);
  }

  .collapse__items {
    grid-area: collapse__items;
    display: flex;
  }
</style>

<div class="accordion" id="accordion">
  {#each atendimentos as at, i}
    <div
      class="grid__collapse"
      id="collapse-{i}"
      data-toggle="collapse"
      data-target="#collapse{i}"
      aria-controls="collapse{i}"
      aria-expanded="false"
      on:click={() => {
        collapseActive = i;
      }}>
      <div class="collapse__title">{at.atendimento}</div>
      <div class="collapse__items">
        <Bars gDays={at.dias} />
      </div>
    </div>
    <div
      class="collapse"
      id="collapse{i}"
      aria-labelledby="collapse-{i}"
      data-parent="#accordion">
      {#if collapseActive === i}
        <div class="card" in:fade={{ delay: 100, duration: 500 }}>
          <Clusters gAtendimento={at.atendimento} />
        </div>
      {/if}
    </div>
  {/each}
</div>
