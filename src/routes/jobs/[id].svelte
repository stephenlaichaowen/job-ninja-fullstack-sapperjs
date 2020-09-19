<script context="module">
  export async function preload(page, session) {
    const { id } = page.params;
    const res = await this.fetch(`jobs/${id}.json`);
    const job = await res.json();
    return { job };
  }
</script>

<script>
  import { goto } from "@sapper/app";

  export let job;

  let title;
  let salary;
  let details;

  let isEditMode = false;
  let btnText = "";

  const handleDelete = async id => {
    const res = await fetch(`jobs/${id}.json`, { method: "DELETE" });
    console.log(res);
    goto("jobs");
  };

  const handleEdit = () => {
    isEditMode = true;
  };

  const handleSave = async id => {
    title = job.title;
    salary = job.salary;
    details = job.details;
    if (title && salary && details) {
      const res = await fetch(`jobs/${id}.json`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, salary, details })
      });
      const updatedJobs = await res.json();
      console.log(updatedJobs);
      goto("jobs");
    }
  };

  const handleBack = () => {
    goto("jobs");
  };

  const handleCancel = () => {
    goto("jobs");
  };
</script>

<style>
  .container {
    display: flex;
    justify-content: center;
  }

  .btn-group {
    margin-top: 2rem;
  }

  .btn {
    margin-right: 1rem;
    outline: none;
  }

  input {
    display: block;
    width: 100%;
    padding: 10px;
    font-family: arial;
    margin: 10px auto;
    border: none;
    border-bottom: 1px solid #eee;
    outline: none;
  }
</style>

<svelte:head>
  <title>Job Details</title>
</svelte:head>

<div>
  <div class="container animate__animated animate__fadeIn">
    {#if isEditMode}
      <div class="job">
        <label for="title">Title</label>
        <input
          id="title"
          class="title"
          type="text"
          required
          bind:value={job.title} />
        <label for="salary">Salary</label>
        <input
          id="salary"
          class="salary"
          type="number"
          required
          bind:value={job.salary} />
        <label for="details">Details</label>
        <input
          id="details"
          class="details"
          type="text"
          required
          bind:value={job.details} />
        <div class="btn-group">
          <button class="btn" on:click={handleSave(job.id)}>Save</button>
          <button class="btn" on:click={handleCancel}>Cancel</button>
        </div>
      </div>
    {:else}
      <div class="job">
        <h2>{job.title}</h2>
        <p>Salary of ${job.salary}</p>
        <p>{job.details}</p>
        <div class="btn-group">
          <button class="btn" on:click={handleEdit}>Edit</button>
          <button class="btn" on:click={handleDelete(job.id)}>Delete</button>
          <button class="btn" on:click={handleBack}>Back</button>
        </div>
      </div>
    {/if}
  </div>
</div>
