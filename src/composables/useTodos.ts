import { ref } from "vue";

const list = ref<string>("");
const id = ref<number>(0);
const listItems = ref<{ name: string; id: number }[]>([]);

export function useTodos() {

    function handleAddItem() {
        if (list.value.trim() !== "") {
            listItems.value.push({ name: list.value, id: id.value });
            id.value++;
            list.value = "";
        }
    }

    function handleDeleteItem() {

    }

    return {
        list,
        id,
        listItems,
        handleAddItem,
        handleDeleteItem,
    }
}