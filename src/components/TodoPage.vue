<script setup lang="ts">
import TodoInput from "./TodoInput.vue";
import TodoList from "./TodoList.vue";

</script>

<template>
    <div class="flex flex-col w-full h-full justify-center items-center gap-4">
        <p class="text-2xl">CRUD Operations - TODO</p>
        <TodoInput />
        <TodoList />
    </div>
</template>