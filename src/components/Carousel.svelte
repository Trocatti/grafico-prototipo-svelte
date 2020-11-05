<script>
  import Days from "../components/Days.svelte";
  import Collapse from "../components/Collapse.svelte";

  const weeks = 1;
</script>

<style>
  .carousel__control {
    justify-content: flex-end;
    height: 26px;
    color: var(--color);
  }

  .carousel-control-prev {
    width: 115px;
  }

  .carousel-control-next {
    padding-right: 10px;
    width: 115px;
  }
</style>

<div
  id="carousel"
  class="carousel carousel-fade"
  data-ride="false"
  data-pause="false">
  <div class="carousel-inner">
    {#each Array(weeks) as _, i}
      <div class="carousel-item {i < 1 ? 'active' : ''}">
        <Days nextWeek={i} />
        <Collapse />
      </div>
    {/each}
  </div>
  {#if weeks > 1}
    <a
      class="carousel__control carousel-control-prev"
      href="#carousel"
      role="button"
      data-slide="prev">
      <i class="fa fa-chevron-left" />
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel__control carousel-control-next"
      href="#carousel"
      role="button"
      data-slide="next">
      <i class="fa fa-chevron-right" />
      <span class="sr-only">Next</span>
    </a>
  {/if}
</div>
