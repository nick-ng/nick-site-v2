<script>
	import { PUBLIC_API_HOST } from '$env/static/public';
</script>

<div>
	<h1>V2 Site!</h1>
	<p>API Host: {PUBLIC_API_HOST}</p>
	<button
		on:click={async () => {
			const res = await fetch(`${PUBLIC_API_HOST}/api/markdown-document/uri/bloodlust`, {
				mode: 'cors',
				headers: {
					'Access-Control-Allow-Origin': '*'
				}
			});
			const resText = await res.text();

			console.log('resText', resText);
		}}>Click!</button
	>
</div>
