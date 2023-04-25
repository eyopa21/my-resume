<template>

    <div class="  z-0 flex pb-8  flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh] xl:h-[71vh] justify-center aos-init aos-animate"
        data-aos="fade">

        <img class="rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px] object-fill"
            src="/eyoba.jpg"
            alt="about avatar" />
            <div class="mb-4 flex flex-row text-white bg-red-600 rounded mt-2 px-2 py-1 "><ExclamationCircleIcon class="text-white align-middle w-6 h-6 mr-1"/><div>This portfolio website is still in development</div> </div>
            <p class="mb-4 text-[#7B7B7B] bg-red-600 px-2 rounded">But you can access it freely</p>
        <h3 class="mt-6 mb-1 text-5xl font-semibold dark:text-white"> Eyob Nigussie</h3>
        <p class="mb-4 text-[#7B7B7B]">Software Engineer</p>

        <div class="flex space-x-3">

            <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                <span class="socialbtn text-[#1773EA]">
                    <img src="/svg/whatsapp.svg" class="w-8 h-8" alt="">
                </span>

            </a>
            <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
                <span class="socialbtn text-[#1773EA]">
                    <img src="/svg/github.svg" class="w-8 h-8" alt="">
                </span>

            </a>
            <a href="https://www.telegram.com/" target="_blank" rel="noopener noreferrer">
                <span class="socialbtn text-[#1773EA]">
                    <img src="/svg/telegram.svg" class="w-8 h-8" alt="">
                </span>

            </a>
            <a  href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <span class="socialbtn fill-blue-400 text-[#1773EA]">
                    <img src="/svg/facebook.svg" class="w-8 h-8" alt="">
                </span>

            </a>






        </div>

        <NuxtLink to="/contact" class="dowanload-btn">
            <PhoneIcon class="w-5 h-5 mr-2" /> Contact Me
        </NuxtLink>
    </div>
</template>

<script setup>
    import { PhoneIcon, ExclamationCircleIcon } from '@heroicons/vue/solid';
    
</script>