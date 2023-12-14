<template>
    <div>
        <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
            <div class="container max-w-screen-lg mx-auto">
                <div>

                <h2 class="font-semibold text-xl text-gray-600">Daftar Lomba</h2>
                <p class="text-gray-500 mb-6">Ayo daftar sekarang!!!</p>

                <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div class="text-gray-600">
                        <p class="font-medium text-lg">Data Diri</p>
                        <p>Masukkan Data Diri</p>
                    </div>

                    <div class="lg:col-span-2">
                        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div class="md:col-span-5">
                            <label for="full_name">Nama Lengkap</label>
                            <input type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" v-model="nama"/>
                        </div>

                        <div class="md:col-span-5">
                            <label for="email">Email</label>
                            <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@domain.com" v-model="email"/>
                        </div>

                        <div class="md:col-span-5">
                            <label for="email">Asal Sekolah</label>
                            <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="SMAN 1 Surabaya" v-model="sekolah"/>
                        </div>

                        <div></div>
                
                        <div class="md:col-span-5 text-right">
                            <div class="inline-flex items-end">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="saveData">Submit</button>
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
            nama: null,
            email: null,
            sekolah: null,
            status: "waiting",
        }
    },
    methods: {
        saveData() {
            // Create an object with your task data
            const taskData = {
                name: this.nama,
                email: this.email,
                asalSekolah: this.sekolah,
                status: this.status,
                tanggal: new Date()
            };

            console.log(taskData)

            // Make a POST request to PayloadCMS to add the task data
            axios.post('http://localhost:3100/api/Lomba', taskData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => {
                // Handle the response, e.g., reset the form fields
                this.name = null;
                this.email = null;
                this.sekolah = null;
                this.success = true

                // Emit an event to notify parent components (if needed)
            })
            .catch(error => {
                console.error('Error:', error);
                this.success = false
            });
        }
    },
};
</script>

<style lang="scss" scoped>

</style>