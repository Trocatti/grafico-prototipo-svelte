<script>
  import { details } from "../store";
  import Details from "./Details.svelte";
  import Labels from "./Labels.svelte";

  const unsubscribe = details.subscribe(value => {
    if (value) {
      const navs = document.querySelectorAll(".sidebar .nav-link");
      navs.forEach(n => {
        if (n.classList.contains("active")) {
          n.classList.toggle("active");
        }
        if (n.id === "nav-detalhes-tab") {
          n.classList.toggle("active");
        }
      });

      const tabs = document.querySelectorAll(".sidebar .tab-pane");
      tabs.forEach(t => {
        if (t.classList.contains("active")) {
          t.classList.toggle("show");
          t.classList.toggle("active");
        }
        if (t.id === "tab-detalhes") {
          t.classList.toggle("show");
          t.classList.toggle("active");
        }
      });
    }
  });

  const tabs = [
    {
      name: "Legenda",
      component: Labels,
      id: "prefil",
      open: true
    },
    {
      name: "Detalhes",
      component: Details,
      id: "detalhes",
      open: false
    }
  ];

  function handleTab(event) {
    details.update(n => !details);
  }
</script>

<style>

</style>

<ul class="nav nav-tabs" id="nav-content" role="tablist">
  {#each tabs as tab, i}
    <li class="nav-item" role="presentation">
      <a
        class="nav-link {tab.open ? 'active' : ''}"
        id="nav-{tab.id}-tab"
        href="#tab-{tab.id}"
        aria-controls="tab-{tab.id}"
        data-toggle="tab"
        role="tab"
        aria-selected={tab.open}
        on:click={handleTab}>
        {tab.name}
      </a>
    </li>
  {/each}
</ul>
<div class="tab-content" id="tab-content">
  {#each tabs as tab, i}
    <div
      class="tab-pane fade {tab.open ? 'show active' : ''}"
      role="tabpanel"
      id="tab-{tab.id}"
      aria-labelledby="nav-{tab.id}-tab">
      <svelte:component this={tab.component} />
    </div>
  {/each}
</div>
