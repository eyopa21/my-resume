<template>
   
        <!-- PRELOADER -->
        
        <!-- /PRELOADER -->
    
    
        <div class="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
            <div class="z-50">
                <!-- container start -->
                <div class="container">
                    <!-- header start for large screens -->
                    <header class="flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[1111111111]">
                        <div class="flex justify-between w-full px-4 lg:px-0 bg-[#F3F6F6] lg:bg-transparent dark:bg-black">
                            <div class="flex justify-between w-full items-center space-x-4 lg:my-8 my-5">
                                <!-- website logo -->
                                <a class="text-5xl font-semibold" href="index.html">
                                    <img class="h-[26px] lg:h-[32px]" src="images/logo/logo.png" alt="logo">
                                </a>
                                <div class="flex items-center">
                                    <!-- light and dark mode button -->
                                    <button id="theme-toggle-mobile" type="button" class="dark-light-btn lg:hidden w-[44px] h-[44px] ml-2">
                                        <i id="theme-toggle-dark-icon-mobile" class="fa-solid text-xl fa-moon hidden"></i>
                                        <i id="theme-toggle-light-icon-mobile" class="fa-solid fa-sun text-xl"></i>
                                    </button>
                                    <!-- mobile toggle button -->
                                    <button id="menu-toggle" type="button" class="menu-toggle-btn">
                                        <i id="menu-toggle-open-icon" class="fa-solid fa-bars text-xl "></i>
                                        <i id="menu-toggle-close-icon" class="fa-solid fa-xmark text-xl hidden  "></i>
                                    </button>
                                </div>
                            </div>
                        </div>
    
                        <!-- header items two for large screens -->
                        <nav class="hidden lg:block">
                            <ul class="flex my-12">
                                <li>
                                    <a class="menu-item-two-active" href="homePage.html">
                                        <span class="mr-2 text-base">
                                            <i class="fa-solid fa-house"></i>
                                        </span> Home </a>
                                </li>
                                <li>
                                    <a class="menu-item-two" href="aboutTwo.html">
                                        <span class="mr-2 text-base">
                                            <i class="fa-regular fa-user"></i>
                                        </span> About </a>
                                </li>
                                <li>
                                    <a class="menu-item-two" href="resumeTwo.html">
                                        <span class="mr-2 text-base">
                                            <i class="fa-regular fa-file-lines"></i>
                                        </span> Resume </a>
                                </li>
                                <li>
                                    <a class="menu-item-two" href="portfiloTwo.html">
                                        <span class="mr-2 text-base">
                                            <i class="fas fa-briefcase"></i>
                                        </span> Works </a>
                                </li>
                                <li>
                                    <a class="menu-item-two" href="blogTwo.html">
                                        <span class="mr-2 text-base">
                                            <i class="fa-brands fa-blogger"></i>
                                        </span> Blogs </a>
                                </li>
                                <li>
                                    <a class="menu-item-two" href="contactTwo.html">
                                        <span class="mr-2 text-base">
                                            <i class="fa-solid fa-address-book"></i>
                                        </span> Contact </a>
                                </li>
                                <li>
                                    <!-- light and dark mode button -->
                                    <button id="theme-toggle" type="button" class="dark-light-btn w-[44px] h-[44px] ml-2">
                                        <i id="theme-toggle-dark-icon" class="fa-solid text-xl fa-moon hidden"></i>
                                        <i id="theme-toggle-light-icon" class="fa-solid fa-sun text-xl"></i>
                                    </button>
                                </li>
                            </ul>
                        </nav>
    
                        <!-- mobile menu start -->
                        <nav id="navbar" class="hidden lg:hidden">
                            <ul class="block rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#1d1d1d]">
                                <li>
                                    <a class="mobile-menu-items-active" href="homePage.html">
                                        <span class="mr-2 text-xl">
                                            <i class="fa-solid fa-house"></i>
                                        </span> Home </a>
                                </li>
                                <li>
                                    <a class="mobile-menu-items" href="aboutTwo.html">
                                        <span class="mr-2 text-xl">
                                            <i class="fa-regular fa-user"></i>
                                        </span> About </a>
                                </li>
                                <li>
                                    <a class="mobile-menu-items" href="resumeTwo.html">
                                        <span class="mr-2 text-xl">
                                            <i class="fa-regular fa-file-lines"></i>
                                        </span> Resume </a>
                                </li>
                                <li>
                                    <a class="mobile-menu-items" href="portfiloTwo.html">
                                        <span class="mr-2 text-xl">
                                            <i class="fas fa-briefcase"></i>
                                        </span> Works </a>
                                </li>
                                <li>
                                    <a class="mobile-menu-items" href="blogTwo.html">
                                        <span class="mr-2 text-xl">
                                            <i class="fa-brands fa-blogger"></i>
                                        </span> Blogs </a>
                                </li>
                                <li>
                                    <a class="mobile-menu-items" href="contactTwo.html">
                                        <span class="mr-2 text-xl">
                                            <i class="fa-solid fa-address-book"></i>
                                        </span> Contact me </a>
                                </li>
                            </ul>
                        </nav>
                        <!-- mobile menu end -->
                    </header>
                    <!-- header  end -->
    
                    <!-- Home page contant start -->
                    <div class="flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh] xl:h-[71vh] justify-center aos-init aos-animate" data-aos="fade">
                        <!-- personal image -->
                        <img class="rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px]" src="images/about/avatar.jpg" alt="about avatar">
                        <h3 class="mt-6 mb-1 text-5xl font-semibold dark:text-white"> Monalisa Ashley </h3>
                        <p class="mb-4 text-[#7B7B7B]">Ui/Ux Designer</p>
                        <!-- social link and social  buttons -->
                        <div class="flex space-x-3">
                            <!-- facebook link -->
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <span class="socialbtn text-[#1773EA]">
                                    <i class="fa-brands fa-facebook-f"></i>
                                </span>
                            </a>
                            <!-- twitter link -->
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                <span class="socialbtn text-[#1C9CEA]">
                                    <i class="fa-brands fa-twitter"></i>
                                </span>
                            </a>
                            <!-- dribbble icon and link -->
                            <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
                                <span class="socialbtn text-[#e14a84]">
                                    <i class="fa-brands fa-dribbble"></i>
                                </span>
                            </a>
                            <!-- linkedin icon and link -->
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                <span class="socialbtn text-[#0072b1]">
                                    <i class="fa-brands fa-linkedin-in"></i>
                                </span>
                            </a>
                        </div>
                        <!-- dowanload button -->
                        <button class="dowanload-btn">
                            <img src="images/icons/dowanload.png" alt="icon" class="mr-2">Download CV </button>
                    </div>
                    <!-- Home page contant End -->
                </div>
            </div>
        </div>
    
    
        
  
</template>