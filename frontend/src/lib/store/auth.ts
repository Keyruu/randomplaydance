import type { UserInfo } from "$lib/types/userInfo";
import { writable, type Writable } from "svelte/store";

export const isAuthenticated = writable(false);
export const user: Writable<UserInfo> = writable({});
export const idToken = writable("")
