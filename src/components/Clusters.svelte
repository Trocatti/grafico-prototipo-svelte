<script>
  import { item, details } from "../store";
  import { gClusters } from "../utils";

  export let gAtendimento;

  let active = false;
  const { clusters } = gClusters(gAtendimento);

  $: iid = (iCluster, iDia, iItem) => `c${iCluster}d${iDia}i${iItem}`;

  function datailsCluster(event, it, iid) {
    event.preventDefault();
    active = iid;
    item.set(it);
    details.set(true);
  }

  function styleCluster(item, color) {
    const { qtd } = item;
    let height = qtd;
    if (height > 40) {
      const max = 15;
      const min = 5;
      height = Math.round(Math.random() * (max - min) + min);
    } else if (height < 5) {
      height = 5;
    }
    return `
      background-color: ${color};
      height: ${height}px;
    `;
  }

  window.$(function() {
    window.$('[data-toggle="tooltip"]').tooltip();
  });
</script>

<style>
  :root {
    --clusters-font-size: 11px;
    --color-section-item: red;
  }

  .grid__clusters {
    display: grid;
    grid-template-areas: "clusters__title clusters__items";
    grid-template-columns: 100px repeat(7, 1fr);
    height: 40px;
  }

  .clusters__title {
    grid-area: clusters__title;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    border-bottom: dashed 1px var(--border-color);
    color: var(--color);
    font-size: var(--clusters-font-size);
    text-align: right;
  }
  .clusters__title a {
    text-decoration: none;
    padding-right: 5px;
    color: var(--color);
  }

  .clusters__items {
    display: flex;
    align-items: flex-end;
    border-right: var(--border-b-r);
    border-top: var(--border-t-l);
    border-bottom: dashed 1px var(--border-color);
    border-left: dotted 1px var(--border-color);
    color: var(--color);
    font-size: var(--clusters-font-size);
    padding: 0px 1px;
  }

  .clusters__items > div {
    width: 5%;
    margin-left: 0px;
    z-index: 100;
    border-color: transparent;
    border-width: 1px;
    border-style: dotted;
  }

  .clusters__items > div:hover {
    border-color: var(--color-section-item);
    background-color: var(--color-section-item) !important;
    border-width: 1px;
    border-style: solid;
    cursor: pointer;
  }

  .active {
    background-color: var(--color-section-item) !important;
  }
</style>

{#each clusters as { cluster, dias }, ic}
  <div class="grid__clusters">
    <div class="clusters__title">
      <a href="/#">{cluster.name}</a>
    </div>
    {#each dias as dia, id}
      <div class="clusters__items">
        {#each dia.itens as item, ii}
          {#if item}
            <div
              class={iid(ic, id, ii) === active ? 'active' : ''}
              style={styleCluster(item, cluster.color)}
              on:click={e => datailsCluster(e, item, iid(ic, id, ii))}
              data-toggle="tooltip"
              data-placement="top"
              title={item.qtd} />
          {:else}
            <div />
          {/if}
        {/each}
      </div>
    {/each}
    {#if dias.length < 7}
      {#each Array(7 - dias.length) as _, i}
        <div class="clusters__items" />
      {/each}
    {/if}
  </div>
{/each}
