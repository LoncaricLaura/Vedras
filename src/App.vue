<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import UsersList from './components/UsersList.vue'
import Home from './components/Home.vue'

</script>

<template>
<div id="app">
     <section class="flex" id="header">
        <div
            class="flex-1 w-full h-[347px] bg-[url('src/assets/Group-6.jpg')] bg-cover"
            id="background"
        >
            <div
                class="flex sm:flex-initial flex-row-reverse relative md:mr-[190px] pt-[30px] pb-[20px]"
                id="nav"
            >
                <a href="/en" class="w-32 hover:underline"><b>EN</b></a>
                <router-link to='/UsersList' class="hover:underline">Users</router-link>
                <a href="tel:385989608920" class="pr-[10px] hover:underline">
                    +385 98 9608 920
                </a>
                <a
                    href="mailto:info@vedras.hr"
                    class="px-[10px] hover:underline"
                >
                    info@vedras.hr
                </a>
                <p class="hidden sm:flex font-bold">Kontaktirajte nas</p>
            </div>
           <router-link to="/"><img class="mx-auto" id="img" src="./assets/Group-4.svg" /></router-link>
            <hr class="mx-auto my-[30px]" id="line" />
            <p class="text-4xl font-bold pb-[15px]">ON HOLD</p>
            <div class="flex justify-center space-x-[15px]">
                <a
                    href="https://www.instagram.com/vedrasgroup/?hl=en"
                    target="_blank"
                >
                    <img
                        src="./assets/Instagram.png"
                        class="w-[25px] h-[25px]"
                    />
                </a>
                <a
                    href="https://www.facebook.com/vedrasevents/"
                    target="_blank"
                >
                    <img
                        src="./assets/Facebook.png"
                        class="w-[25px] h-[25px]"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQH6umdZpTKIgwAAAX7pquCIZlEpaB1AQknL5v5KuCBgtwqbVXIeAg9dZFmteqfSDxqr2Bd5nShiQTLfqfj9vQwnfFkQ2mt8_Isgsazt_VAWq_b3-pHB9zfTfO_XKqCHnp6GdUY=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fvedras-group%2F"
                    target="_blank"
                >
                    <img
                        src="./assets/Linkedin.png"
                        class="w-[25px] h-[25px]"
                    />
                </a>
            </div>
        </div>
    </section>
</div>  
    <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600&display=swap');

#app {
    font-family: 'Titillium Web', sans-serif;
    text-align: center;
}


</style>
