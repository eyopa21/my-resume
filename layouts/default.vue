<template>
    <div 
        class="min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
        <Nav :class="$route.name == 'index'? '':'bg-black'" />
        <div>

            <slot />

        </div>
        <div :class="$route.name == 'index'? 'hidden':'block'" class="lg:pb-8">
            <Footer class="py-2 md:py-0 pt-32 mt-10" />
        </div>

    </div>
</template>