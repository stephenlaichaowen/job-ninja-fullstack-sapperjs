<script>
  export let segment;

  let toggle = false;

  const toggleMenu = () => {
    toggle = !toggle;
  };
</script>

<style>
  nav {
    background: #fff3ef;
  }

  .container {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
  }

  h1 {
    margin-top: 0.5rem;
    font-size: 22px;
    font-weight: bold;
  }

  ul {
    padding: 0;
    margin: 0;
    display: flex;
  }

  li {
    list-style: none;
    padding: 0.5rem 1rem;
  }

  a {
    text-decoration: none;
  }

  .burger-wrapper {
    display: none;
  }

  .line {
    border: 1px solid;
    width: 20px;
    margin: 5px;
  }

  a.current {
    border-bottom: 3px solid #ff3e00;
    padding: 0.5rem 1rem;
  }

  a.active {
    color: #ff3e00;
  }

  .nav-list {
    display: none;
  }

  .mobile-menu {
    display: none;
    position: fixed;
    right: 1.5rem;
    top: 1rem;
    color: white;
  }

  @media (max-width: 575px) {
    .nav-item-desktop {
      display: none;
    }

    .burger-wrapper {
      display: block;
    }

    .nav-list.toggle {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      z-index: 20;
      color: white;

      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .nav-item {
      height: 25%;
      display: flex;
      align-items: center;
      font-size: 2rem;
    }

    .mobile-menu {
      display: block;
    }
  }
</style>

<nav>
  <div class="container">
    <h1>Job Ninja</h1>
    <ul class="nav-item-desktop">
      <li>
        <a class:current={segment === undefined} href=".">home</a>
      </li>
      <li>
        <a class:current={segment === 'contact'} href="contact">contact</a>
      </li>
      <li>
        <a class:current={segment === 'about'} href="about">about</a>
      </li>
      <li>
        <a rel="prefetch" class:current={segment === 'jobs'} href="jobs">
          jobs
        </a>
      </li>
    </ul>
    <div class="burger-wrapper" on:click={toggleMenu}>
      <div class="line" />
      <div class="line" />
      <div class="line" />
    </div>
  </div>
</nav>

<ul class="nav-list animate__animated animate__fadeInDown" class:toggle>
  <li class="nav-item">
    <a class:active={segment === undefined} href="." on:click={toggleMenu}>
      home
    </a>
  </li>
  <li class="nav-item">
    <a
      class:active={segment === 'contact'}
      href="contact"
      on:click={toggleMenu}>
      contact
    </a>
  </li>
  <li class="nav-item">
    <a class:active={segment === 'about'} href="about" on:click={toggleMenu}>
      about
    </a>
  </li>
  <li class="nav-item">
    <a class:active={segment === 'jobs'} href="jobs" on:click={toggleMenu}>
      jobs
    </a>
  </li>
  <div class="mobile-menu" on:click={toggleMenu}>
    <!-- <div class="line line1" />
    <div class="line line2" />
    <div class="line line3" /> -->
    <img src="/Hamburger.png" alt="" />
  </div>
</ul>
