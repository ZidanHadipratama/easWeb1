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
                        <p class="font-medium text-lg">Status: </p>
                        <p>Please fill out all the fields.</p>
                    </div>

                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
  const {id} = useRoute().params
  const url = 'http://localhost:3100/api/Lomba/' + id
  const {data: user} = await useFetch(url, {key: id})

  console.log(user.status)
</script>

<style lang="scss" scoped>

</style>