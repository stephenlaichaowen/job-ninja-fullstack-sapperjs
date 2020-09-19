<style>
  .container {
    text-align: center;
  }
  h1,
  p {
    margin: 0 auto;
  }

  h1 {
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 1.5rem 0;
  }

  a {
    margin-top: 40px;
  }

  div {
    margin-top: 60px;
    text-align: center;
  }

  @media (max-width: 550px) {
    h1 {
      font-size: 2rem;
    }
    img {
      width: 50%;
    }
  }
</style>

<svelte:head>
  <title>Job Ninja</title>
</svelte:head>

<div>
  <div class="container animate__animated animate__fadeIn">
    <img src="/logo-192.png" alt="" />

    <h1>Jobs for Ninja</h1>
    <p>Find your next assignment right here.</p>
    <a href="jobs" class="btn">View Jobs</a>
  </div>
</div>
