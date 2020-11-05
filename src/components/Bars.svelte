<script>
  import { onMount } from "svelte";
  export let gDays;

  let template = cluster => "<div></div>";
  onMount(async () => {
    const cellWidth = document.querySelector(".bars__items").offsetWidth;
    template = (gCluster, total) => {
      const { cluster, total: valor } = gCluster;
      const { color } = cluster;

      let width = valor;
      if (total > valor) {
        width = Math.floor((valor * cellWidth) / total);
      }

      if (width > cellWidth) {
        width = cellWidth;
      }

      const df = new Intl.NumberFormat("pt", {
        style: "currency",
        currency: "BRL"
      }).format(valor);

      return ` <div 
        style="background-color: ${color}; width: ${width}px;"
        data-toggle="tooltip"
        data-placement="top"
        title="${df}">
        </div> `;
    };

    window.$(function() {
      window.$('[data-toggle="tooltip"]').tooltip();
    });
  });
</script>

<style>
  .grid__bars {
    display: grid;
    grid-template-areas: "bars__items";
    /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;  */
    grid-template-columns: repeat(7, 1fr);
    width: 100%;
  }

  .bars__items {
    display: flex;
    /* border-right: var(--border-b-r);
    border-left: var(--border-t-l); */
  }

  .bars {
    display: flex;
    height: 30px;
    margin: 5px 0px;
  }
</style>

<div class="grid__bars">
  {#each gDays as day, i}
    <div class="bars__items">
      {#if day.clusters}
        {#each day.clusters as cluster}
          <div class="bars">
            {@html template(cluster, day.total)}
          </div>
        {/each}
      {/if}
    </div>
  {/each}
  {#if gDays.length < 7}
    {#each Array(7 - gDays.length) as _, i}
      <div class="bars__items" />
    {/each}
  {/if}
</div>
