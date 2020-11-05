<script>
  import { carepath } from "../store";

  const treatments = ["Covid-19", "Cesárea", "Apendicite", "Bariátrica"];
  let treatment = 0;
</script>

<style>
  :root {
    --carepath-font-size: 16px;
    --carepath-font-weight: 500;
  }

  .grid__carepath {
    display: grid;
    grid-template-areas: "carepath__title carepath__treatment";
    grid-template-columns: 100px auto;
    color: white;
    font-weight: var(--carepath-font-weight);
    font-size: var(--carepath-font-size);
  }

  .carepath__title {
    grid-area: carepath__title;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-transform: uppercase;
    background-color: #2b79bb;
    padding: 8px;
  }

  .carepath__title > i {
    font-size: 18px;
    margin-right: 5px;
  }

  .carepath__treatment {
    grid-area: carepath__treatment;
    display: flex;
    justify-items: flex-start;
    align-items: center;
    background-color: #66a9e2;
    padding: 2px 10px;
  }

  .carepath__treatment .btn {
    color: white;
  }

  .dropdown-item {
    cursor: pointer;
  }
</style>

<div class="grid__carepath">
  <div class="carepath__title">
    <i class="fa fa-heartbeat" />
    <span>carepath</span>
  </div>
  <div class="carepath__treatment">
    <div class="dropdown">
      <button
        class="btn dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        {treatments[treatment]}
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {#each treatments as item, i}
          <div
            class="dropdown-item"
            on:click={() => {
              treatment = i;
              carepath.update(c => treatment);
            }}>
            {item}
          </div>
          <div class="dropdown-divider" />
        {/each}
      </div>
    </div>
  </div>
</div>
