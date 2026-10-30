<script setup lang="ts">
import { useTodos } from '../composables/useTodos';
import { Trash2, Pencil } from "lucide-vue-next";

const { listItems, handleDeleteItem } = useTodos();
</script>

<template>
    <div class="bg-gray-100 flex flex-1 w-full h-full p-4">
      <ul class="w-full flex gap-3 flex-col">
        <li class="text-xl capitalize flex justify-between w-full bg-white p-2 rounded-lg" v-for="items in listItems" :key="items.id">
          <span>{{ items.name }}</span>
          <div class="flex gap-2">
            <button @click="handleDeleteItem">
              <Trash2 :size="20" class="text-red-500 hover:text-red-600 cursor-pointer" />
            </button>
            <button>
              <Pencil :size="18" class="text-slate-400 hover:text-slate-200 cursor-pointer" />
            </button>
          </div>
        </li>
      </ul>
    </div>
</template>