<script setup lang="ts">
import { ref } from "vue";

const list = ref<string>("");
const listItems = ref<{ name: string; id: number }[]>([]);
const id = ref<number>(0);

function handleAddItem() {
  listItems.value.push({ name: list.value, id: id.value });
  id.value++;
}

</script>

<template>
  <div class="flex flex-col w-full h-full justify-center items-center gap-4">
    <p class="text-2xl">CRUD Operations - TODO</p>
    <div class="flex gap-4">
      <input v-model="list" placeholder="Enter Name" class="border border-black p-2 rounded-lg">
      <button class="bg-blue-500 text-white px-4 py-2 rounded" @click="handleAddItem">Add</button>
    </div>
    <div class="bg-gray-100 flex flex-1 w-full h-full p-4">
      <ul>
        <li v-for="items in listItems" :key="items.id">{{ items.name }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
