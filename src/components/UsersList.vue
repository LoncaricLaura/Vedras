<template>
    <div class="user">Users</div>

    <Card v-for="user in users" :key="user.id" :info="user.id" :name="user.firstName" :surname="user.lastName" :picture="user.picture" />
</template>

<script>
import Card from './Card.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
    name: "UsersList",
    data() {
        return {
            users: [],
            picture: [],
            cards: [],
        };
    },
    components: {
        Card,
    },
    mounted() {
        const headers = {'app-id': "6217cefad72c06f27bddcdd6"}
        axios.get("https://dummyapi.io/data/v1/user?limit=10",{headers}).then(response => {
            this.users = response.data.data;
            console.log(response.data);
        })
    },
 /*   methods: {
        async getData() {
            try {
                const headers = {'app-id': "6217cefad72c06f27bddcdd6"}
                let response = await fetch("https://dummyapi.io/data/v1/user?limit=10", {headers});
                this.users = await response.json();
                console.log(response, this.users);
            } catch (error) {
                console.log(error);
            }
        },

    }, 
    created() {
        this.getData();
    }*/
};


</script>

<style>

#user {
    color: black;
}

.card {
        box-shadow: 0 2px 32px 0 rgb(0 0 0 / 14%);
}

</style>