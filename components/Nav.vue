<template>
    <header class=" flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[1111111111]">
        <div class="flex justify-between w-full px-4 lg:px-0  lg:bg-transparent  ">
            <div class="flex justify-between w-full items-center space-x-4 lg:my-8 my-5">
                <!-- website logo -->
                <NuxtLink class="text-5xl font-semibold" to="/">

                    <div class="h-[26px] lg:h-[32px] text-red-500   uppercase text-4xl ml-2 tracking-wider font-logo">eyoba
                    </div>
                </NuxtLink>
                <div class="flex items-center">
                    <!-- light and dark mode button -->
                    <button id="theme-toggle-mobile" type="button"
                        class="dark-light-btn lg:hidden w-[44px] h-[44px] ml-2">
                        <MoonIcon class="w-5 h-5" />

                    </button>
                    <!-- mobile toggle button -->
                    <button @click="showNav = !showNav" id="menu-toggle" type="button" class="menu-toggle-btn lg:hidden">
                        <MenuIcon v-if="showNav == false" class="w-5 h-5" />
                        <XIcon v-else class="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>

        <!-- header items two for large screens -->
        <nav class="hidden lg:block ">
            <ul class="flex my-12">
                <li>
                    <NuxtLink to="/" class="menu-item-two "
                        :class="$route.name=='index' ? 'menu-item-two-active':'menu-item-two'">
                        <span class="mr-2 text-base">
                            <HomeIcon class="w-4 h-4 mb-[2px]" />
                        </span> Home
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about" class="menu-item-two"
                        :class="$route.name=='about' ? 'menu-item-two-active':'menu-item-two'">
                        <span class="mr-2 ">
                            <HomeIcon class="w-4 h-4 mb-[2px]" />
                        </span>
                        <div class="">

                            About
                        </div> 
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/resume" class="menu-item-two"
                        :class="$route.name=='resume' ? 'menu-item-two-active':'menu-item-two'">
                        <span class="mr-2 text-base">
                            <IdentificationIcon class="w-4 h-4 mb-[2px]" />
                        </span> Resume
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="projects" class="menu-item-two"
                        :class="$route.name=='projects' ? 'menu-item-two-active':'menu-item-two'">
                        <span class="mr-2 text-base">
                            <BriefcaseIcon class="w-4 h-4 mb-[2px]" />
                        </span> Works
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="blogs" class="menu-item-two"
                        :class="$route.name=='blogs' ? 'menu-item-two-active':'menu-item-two'">
                        <span class="mr-2 text-base">
                            <NewspaperIcon class="w-4 h-4 mb-[2px]" />

                        </span> Blogs
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/contact" class="menu-item-two"
                        :class="$route.fullPath=='/contact' ? 'menu-item-two-active':'menu-item-two'">
                        <span class="mr-2 text-base">
                            <PhoneIcon class="w-4 h-4 mb-[2px]" />
                        </span> Contact
                    </NuxtLink>
                </li>
                <li>
                    <!-- light and dark mode button -->
                    <button @click="toggleTheme()" id="theme-toggle" type="button" class="dark-light-btn w-[44px] h-[44px] ml-2">

                        <MoonIcon v-if=" themeMode =='light'" class="w-5 h-5" />
                        <SunIcon v-else class="w-5 h-5 text-black" />
                    </button>
                    <!--button @click="test()" id="theme-toggle" type="button" class="dark-light-btn w-[44px] h-[44px] ml-2">

                        dark
                    </button-->

                </li>
            </ul>
        </nav>

        <!-- mobile menu start -->
        <nav @click="showNav=false" id="navbar" :class="showNav? 'block lg:hidden':'hidden lg:hidden'">
            <ul
                class="block rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#1d1d1d]">
                <li>
                    <NuxtLink class="mobile-menu-items" to="/"
                        :class="$route.name=='index' ? 'mobile-menu-items-active':'mobile-menu-items'">
                        <span class="mr-2 text-xl">
                            <HomeIcon class="w-4 h-4" />
                        </span> Home
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink class="mobile-menu-items" to="/about"
                        :class="$route.name=='about' ? 'mobile-menu-items-active':'mobile-menu-items'">
                        <span class="mr-2 text-xl">
                            <UserIcon class="w-4 h-4" />
                        </span> About
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink class="mobile-menu-items" to="/resume"
                        :class="$route.name=='resume' ? 'mobile-menu-items-active':'mobile-menu-items'">
                        <span class="mr-2 text-xl">
                            <IdentificationIcon class="w-4 h-4" />
                        </span> Resume
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink class="mobile-menu-items" to="/projects"
                        :class="$route.name=='projects' ? 'mobile-menu-items-active':'mobile-menu-items'">
                        <span class="mr-2 text-xl">
                            <BriefcaseIcon class="w-4 h-4" />
                        </span> Works
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink class="mobile-menu-items" to="/blogs"
                        :class="$route.name=='blogs' ? 'mobile-menu-items-active':'mobile-menu-items'">
                        <span class="mr-2 text-xl">
                            <NewspaperIcon class="w-4 h-4" />
                        </span> Blogs
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink class="mobile-menu-items" to="/contact"
                        :class="$route.name=='contact' ? 'mobile-menu-items-active':'mobile-menu-items'">
                        <span class="mr-2 text-xl">
                            <PhoneIcon class="w-4 h-4" />
                        </span> Contact
                    </NuxtLink>
                </li>
            </ul>
        </nav>
        <!-- mobile menu end -->
        
    </header>
</template>
<script setup>
import { MoonIcon,StarIcon, SunIcon,MenuIcon, XIcon, HomeIcon, UserIcon ,NewspaperIcon, BriefcaseIcon, IdentificationIcon, PhoneIcon } from "@heroicons/vue/solid";

const showNav = ref(false)
const themeMode = ref('')

const test = () => {
    if(process.client){

        localStorage.setItem("color-themes", "dark")
    }
}

// Light - Dark Mode
const toggleTheme = (isFirstTime = false) => {
    if(process.client){

    
    let theme = window.localStorage.getItem('color-theme') || 'light';
    themeMode.value = theme;

    if (!isFirstTime) {
        theme = theme === 'light' ? 'dark' : 'light';
        themeMode.value = theme;
    }
    window.localStorage.setItem('color-theme', theme);

    if (theme === 'dark') {
        document.querySelector('body').classList.add('dark');
    } else {
        document.querySelector('body').classList.remove('dark');
    }
}
};

toggleTheme(true);

const getTheme = computed(() => {
    if(process.client){

if (localStorage.getItem("color-theme") === "dark" || (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
   document.documentElement.classList.add("dark");
 } else {
     document.documentElement.classList.remove("dark");
 }
}
})

  

</script>

