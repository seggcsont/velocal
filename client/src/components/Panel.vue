<template>
  <div>
    <div
      class="relative clearfix m-2 p-2 bg-blue-100 border border-blue-400 rounded-lg text-blue-800"
      :class="[editMode ? 'rounded-b-none mb-0' :'shadow-xl']"
    >
      <span class="absolute block top-0 right-0 m-2 mt-0 text-3xl cursor-pointer">
        <i v-if="editable" @click="editMode = !editMode" class="fa fa-edit"></i>
      </span>
      <slot :editMode="editMode"></slot>
    </div>
    <div v-if="editMode" class="border border-blue-400 border-t-0 rounded-b-lg bg-blue-100 shadow-xl text-blue-800 m-2 mt-0 p-2">
      <slot name="editor">Editor not set</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Panel",
  data() {
    return {
      editMode: false,
    };
  },
  props: {
    editable: Boolean,
  },
};
</script>

<style scoped>
</style>