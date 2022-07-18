<script lang="ts">
	export let modalId: string;
</script>

<label for={modalId} class="modal">
	<label for="" class="modal-box max-w-3xl w-10/12">
		<label for={modalId} class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
		<slot />
	</label>
</label>
