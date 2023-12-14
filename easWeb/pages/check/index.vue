<template>
<div>
        <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
            <div class="container max-w-screen-lg mx-auto">
                <div>

                <h2 class="font-semibold text-xl text-gray-600">Cek Email</h2>
                <p class="text-gray-500 mb-6">Ayo daftar sekarang!!!</p>

                <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div class="text-gray-600">
                        <p class="font-medium text-lg">Personal Details</p>
                        <p>Please fill out all the fields.</p>
                    </div>

                    <div class="lg:col-span-2">
                        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">

                        <div class="md:col-span-5">
                            <label for="email">Email</label>
                            <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@domain.com" v-model="email"/>
                        </div>

                        <div></div>
                
                        <div class="md:col-span-5 text-right">
                            <div class="inline-flex items-end">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="check">Submit</button>
                            </div>
                        </div>

                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        data() {
            return {
                data: [],
                email: null
            }
        },
        methods: {
            async retrieveFormData() {
                await axios.get('http://localhost:3100/api/Lomba')
                    .then(response => {
                    this.data = response.data.docs;
                    })
                    .catch(error => {
                    console.error('Error fetching data:', error);
                    });
                
                console.log(this.data)
            },
            check(){
                let emailFound = this.data.find(obj => obj.email === this.email);
                if (emailFound){
                    this.$router.push(`/check/${emailFound.id}`);
                } else {
                    console.log("Email Not Found")
                }
            }
        },
        async created () {
            await this.retrieveFormData();
        },
    }
</script>

<style lang="scss" scoped>

</style>