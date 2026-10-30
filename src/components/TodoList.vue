<script setup lang="ts">
import { useTodos } from "../composables/useTodos";
import { Trash2, Pencil, Check } from "lucide-vue-next";

const { listItems, handleDeleteItem, toggleEditMode } = useTodos();
</script>

<template>
  <div class="bg-gray-100 flex flex-1 w-full h-full p-4">
    <ul class="w-full flex gap-3 flex-col">
      <li
        class="text-xl capitalize flex justify-between w-full bg-white p-2 rounded-lg"
        v-for="item in listItems"
        :key="item.id"
      >
        <input
          v-if="item.isEditing"
          v-model="item.name"
          @keyup.enter="toggleEditMode(item)"
          @blur="item.isEditing = false"
          class="border border-black px-2 py-1 rounded outline-none"
          autofocus
        />
        <span v-else>{{ item.name }}</span>
        <div class="flex gap-2">
          <button @click="handleDeleteItem(item.id)">
            <Trash2
              :size="20"
              class="text-red-500 hover:text-red-600 cursor-pointer"
            />
          </button>
          <button @click="toggleEditMode(item)">
            <Check
              v-if="item.isEditing"
              :size="20"
              class="text-green-600 cursor-pointer"
            />
            <Pencil
              v-else
              :size="18"
              class="text-slate-400 hover:text-slate-600 cursor-pointer"
            />
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>
