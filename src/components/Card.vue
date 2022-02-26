<template>
 <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    <!--Card-->
    <div class="rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
          <img class="w-full h-[50px] w-[50px]" :src="picture" /> 
        <div class="font-bold text-xl mb-2">{{info}}</div>
        <p class="text-gray-700 text-base">
            {{name}} {{surname}}
        </p>
      </div>
    </div>
</div>
</template>

<script>
export default {
    props: ["info", "name", "surname", "picture"],
    name: "Card",
    computed: {

    }
}

</script>
