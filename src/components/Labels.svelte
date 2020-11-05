<script>
  import { gClustersDominio } from "../utils";
</script>

<style>
  .labels__clusters {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
  }

  .labels__circulo {
    display: flex;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #333;
    margin: 10px;
  }

  .labels__items {
    display: flex;
    align-items: center;
    color: var(--color);
    font-size: 14px;
  }

  .labels__title {
    font-weight: bold;
  }

  .labels__space {
    margin: 0 5px;
  }
</style>

<ul class="labels__clusters">
  {#each gClustersDominio as cluster}
    <div class="labels__items">
      <li class="labels__circulo" style="background-color: {cluster.color};" />
      <span class="labels__title">{cluster.name}</span>
      <span class="labels__space">-</span>
      <span class="labels__description">{cluster.description}</span>
    </div>
  {/each}
</ul>
