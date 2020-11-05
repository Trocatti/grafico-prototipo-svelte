<script>
  import Carepath from "../components/Carepath.svelte";
  import Carousel from "../components/Carousel.svelte";
  import Sidebar from "../components/Sidebar.svelte";
</script>

<style>
  :root {
    --color: #666666;
    --border-color: #cccccc;
    --border-b-r: 1px solid #cdcdcd;
    --border-t-l: 1px solid #fafafa;
  }

  .grid__container {
    display: grid;
    grid-template-columns: 8fr 2fr;
    grid-template-areas:
      "header header"
      "main right";
  }

  .header {
    grid-area: header;
    background-image: url("/assets/header.png");
    width: 100%;
    height: 100px;
    margin-bottom: 5px;
  }

  .main {
    grid-area: main;
  }

  .sidebar {
    grid-area: right;
  }
</style>

<div class="header" />

<div class="grid__container">
  <div class="main">
    <Carepath />
    <Carousel />
  </div>
  <div class="sidebar">
    <Sidebar />
  </div>
</div>
