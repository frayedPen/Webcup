<script>
	import { page } from '$app/stores';
</script>

<!-- <h1>{$page.error?.message}</h1> -->
<!-- <div>Page doesn't exists bro</div> -->

<main>
	<div class="error-box">
		<p>Oops! Something went wrong.<br>Please try again later or contact support.</p>
	</div>
</main>
  
  <style>
	main {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	  height: 70vh;
	  text-align: center;
	}
  
	p {
	  font-size: 30px;
	  margin-bottom: 10px;
	  padding: 35px;
	}

	.error-box {
    border: 2px solid #ff6347; /* Red border */
    padding: 20px;
    border-radius: 8px;
    background-color: #ea6050; /* Light red background */
  }
  </style>