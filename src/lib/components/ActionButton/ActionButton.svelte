<script lang="ts">
	export let href: string = "";
	export let label: string = "Action";
	export let classes: string = "";
	export let download: string = "";
</script>

<style>
	.action-btn {
		display: inline-block;
		position: relative;
		padding: 10px 20px;
		border-radius: 30px;
		background: linear-gradient(145deg, #e0e0e0, #cfcfcf);
		color: #333;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
		overflow: hidden;
		z-index: 1;
		text-decoration: none;
		font-weight: bold;
	}
	.action-btn::before {
		content: '';
		position: absolute;
		top: -3px;
		left: -3px;
		right: -3px;
		bottom: -3px;
		background: linear-gradient(45deg, #cdcdcd, #2e2e2e, #ababad, #171717);
		background-size: 400% 400%;
		z-index: -2;
		border-radius: 32px;
		animation: animatedBorder 3s ease infinite;
	}
	.action-btn::after {
		content: '';
		position: absolute;
		top: 3px;
		left: 3px;
		right: 3px;
		bottom: 3px;
		background: inherit;
		border-radius: 28px;
		z-index: -1;
	}
	.action-btn:hover {
		background: linear-gradient(145deg, #cfcfcf, #e0e0e0);
	}
	@keyframes animatedBorder {
		0% { background-position: 0% 50% }
		50% { background-position: 100% 50% }
		100% { background-position: 0% 50% }
	}
</style>

<a href={href} class="action-btn {classes}" {download}>
	{label}
</a>
