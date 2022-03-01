<template>
    <div class="justify-items-center p-10 px-[30px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-5">
    <!--Card 1-->
    <div class="justify-items-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 rounded overflow-hidden shadow-lg w-[200px] sm:w-[300px] md:w-[400px]">
      <div class="px-6 py-4">
         <router-link to="/About"><img class="h-[150px] w-[150px]" :src="picture" />
             </router-link>
        </div>
        <div class="py-[20px] px-[20px]">
        <p class="text-[#5C5C5C]-700 text-[20px] text-center">
            {{title}} <br>
            {{name}} {{surname}}
        </p>
        </div>
    </div>

</div>
</template>

<script>
import About from '../components/About.vue'

export default {
    props: ["info", "name", "surname", "picture", "title"],
    name: "Card",
    computed: {

    }
}

</script>
