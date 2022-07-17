<script lang="ts">
	import dayjs from 'dayjs';

	export let playlist: any;
	export let index: number;
</script>

<a
	class="
  flex 
  w-2/3 
  justify-center 
  flex-nowrap 
  rounded-lg 
  {index % 2 ? 'bg-primary border-0 hover:bg-primary/75' : 'bg-base-100 border hover:bg-base-300'}
  hover:cursor-pointer
  click:animate-bounce
  shadow-lg
  m-2
  btn
  normal-case
  text-neutral
  btn-block
  text-lg
  font-normal"
	href={`/playlist/${playlist.id}`}
>
	<div class="m-4 w-1/3">{playlist.name}</div>
	<div class="m-4 w-1/3">{playlist.created_by.username}</div>
	<div class="m-4 w-1/3">{dayjs(playlist.created_at).toString()}</div>
</a>
