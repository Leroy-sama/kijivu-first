<template>
    <div class="item">
        <h2 class="item__title">{{ title }}</h2>
        <p class="item__desc">{{ desc }}</p>
    </div>
</template>

<script setup>
    defineProps = (['title', 'desc'])
</script>