<script>
  export let nextWeek;
  const gDays = 7;
  $: week = day => day + nextWeek * gDays + 1;
</script>

<style>
  .grid__days {
    display: grid;
    grid-template-areas: "days__title days__items";
    grid-template-columns: 100px repeat(7, 1fr);
  }

  .days__title {
    grid-area: days__title;
  }

  .days__items {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: var(--border-b-r);
    border-right: var(--border-b-r);
    border-top: var(--border-t-l);
    border-left: var(--border-t-l);
  }
</style>

<div class="grid__days">
  <div class="days__title days__items">
    <i class="fa fa-users" />
  </div>
  {#each Array(gDays) as _, day}
    <div class="days__items">{week(day)}&#176; Dia</div>
  {/each}
</div>
