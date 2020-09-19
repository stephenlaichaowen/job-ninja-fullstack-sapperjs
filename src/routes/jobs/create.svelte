<script>
  import { goto } from "@sapper/app";

  let title;
  let salary;
  let details;

  const handleSubmit = async () => {
    if (title && salary && details) {
      const res = await fetch('jobs.json', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, salary, details })
        }
      );
      const updatedJobs = await res.json();
      console.log(updatedJobs);
      goto("jobs");
    }

    title = "";
    salary = "";
    details = "";
  };

  const cancelSubmit = e => {
    e.preventDefault();
    goto("jobs");
  };
</script>

<style>
  .container {
    max-width: 450px;
    margin: auto;
    overflow: hidden;
  }

  h2 {
    text-align: center;
  }

  form {
    margin: 40px auto;
    text-align: center;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    padding: 10px;
    font-family: arial;
    margin: 10px auto;
    border: none;
    border-bottom: 1px solid #eee;
    outline: none;
  }

  .btn-group {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  .btn {
    margin: 0 1rem;
    cursor: pointer;
  }
</style>

<div>
  <div class="container animate__animated animate__fadeIn">
    <h2>Add a New Job</h2>

    <form on:submit|preventDefault={handleSubmit}>
      <input type="text" placeholder="job title" required bind:value={title} />
      <input type="number" placeholder="amount" required bind:value={salary} />
      <textarea placeholder="job details" required bind:value={details} />
      <div class="btn-group">
        <button type="submit" class="btn btn-submit">Submit</button>
        <button class="btn btn-cancel" on:click={cancelSubmit}>Cancel</button>
      </div>
    </form>
  </div>
</div>
