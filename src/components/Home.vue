<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import UsersList from './UsersList.vue'
</script>

<template>
    <section
        class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-[30px] py-[30px] sm:px-[70px] sm:py-[80px] md:px-[100px] md:py-[80px] lg:px-[100px] xl:px-[240px]"
        id="uvd-robots"   
    >
        <div class="w-full animate-fade-in-down" >
            <p
                class="text-left text-[#5c5c5c] tracking-[-0.29px] pb-[30px]"
                id="paragraf1"
            >
                U jeku trenutne situacije sa Co-vid19, naša je “event” branša
                potpuno zaustavljena. Zaista teško predviđamo početak velikih
                okupljanja i zabava kave priliče ljetu na kakvog smo navikli.
                Unatoč privremenoj stanci cijele event industrije, Vedras ne
                želi stajati po strani i čekati da se ova pandemija sama od sebe
                završi, već smo kao što to uvijek činimo, krenuli u nove
                pothvate i pobjede. Ovoga puta predstavljamo nešto sasvim novo,
                nešto što nije povezano sa našim uobičajenim poslovanjem.
                Predstavljamo nešto što će nam pomoći u borbi protiv ove
                pandemije i učiniti da se svi što prije vratimo normalnom
                životu.
            </p>
            <img src="../assets/UVD-Robots-logo.png" class="pb-[30px]" />
            <img src="../assets/boston-medical-logo.png" />
            <p class="text-left pt-[30px] w-full md:w-[342px]" id="paragraf2">
                Vedras d.o.o. Vas ovim putem želi informirati o dostupnosti
                autonomnog UV-dezinfekcijskog robota tvrtke Blue Ocean Robotics.
            </p>
        </div>
        <div class="w-full translate-x-[100px] my-[30px] md:translate-x-0 animate-fade-in-up">
            <img
                src="../assets/kill-stroj.png"
                class="md:-mt-[50px] mb-[30px] sm:mb-[30px]"
                id="kill-stroj"
            />
            <div
                class="flex items-center h-[176px] w-[336px] bg-[#027fc1] -mt-[100px] lg:-mt-[150px] ml-[30px] px-[30px]" id="uvdRobots"
            >
                <p
                    class="text-left text-white text-[24px] font-bold tracking-[-.43px] leading-[36px]"
                >
                    UBIJA 99,99% MIKROORGANIZAMA
                </p>
            </div>
        </div>
    </section>

    <section>
        <div
            class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:flex items-center justify-between bg-[#027fc1] px-[30px] sm:px-[70px] md:pl-[90px] lg:pl-[240px] md:pr-[80px] py-[80px] w-full "
>
            <div class="basis-1/2 lg:pr-[80px]">
                <p
                    class="text-left text-white text-[36px] font-bold leading-[48px] pb-[30px]"
                >
                    Novo u našoj ponudi!
                </p>
                <p
                    class="text-left text-white text-[16px] leading-[32px] tracking-[-.29px]"
                >
                    Robotska dezinfekcija i sterilizacija prostora s primjenom
                    u:
                </p>
                <ul
                    class="list-disc list-outside text-left text-white text-[16px] font-bold leading-[32px] tracking-[-.29px] pl-[20px]"
                >
                    <li>
                        Turizmu (hoteli, apartmani, kuće za odmor, mobilne
                        kućice...)
                    </li>
                    <li>Industriji (tvornice, skladišta, pogoni...)</li>
                    <li>
                        Javnim mjestima (domovi zdravlja, vrtići, škole,
                        fakulteti, uredi, zračne luke, kolodvori, fitness
                        dvorane, šoping centri...)
                    </li>
                </ul>
                <p
                    class="text-left text-white text-[16px] leading-[32px] tracking-[-.29px] py-[30px] w-[90%]"
                >
                    Roboti konstruirani za čišćenje operacijskih sala i
                    laboratorija, sada dezinficiraju vaše poslovne i privatne
                    prostore.
                </p>
                <a href="https://uvd.blue-ocean-robotics.com/" target="_blank">
                    <p
                        class="text-left text-white font-bold text-[16px] leading-[32px] tracking-[-.29px] hover:underline"
                    >
                        Više detalja o UVD Robots
                    </p></a
                >
            </div>
            <div
                class="flex flex-wrap bg-[url('src/assets/offer.png')] bg-cover h-[36.2vh] w-full lg:h-[574px] lg:w-[42.96vw] mt-[50px] md:mt-[50px]"
                data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-out" data-aos-duration="1500" 
                id="offer" 

            ></div>
        </div>
    </section>

    <section>
        <div
            class="grid grid-cols-1 lg:flex justify-center gap-x-6 gap-y-2 py-[160px] px-[30px] sm:px-[70px] lg:px-[160px]"
        >
            <div
                class="bg-[url('src/assets/covid-free.jpg')] bg-cover w-full h-[42.96vh] lg:h-[464px] lg:w-[695px] min-h-[300px] order-last lg:order-first"
                id="covid"
                data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-out" data-aos-duration="1500" 
            ></div>
            <div
                class="flex flex-col justify-center w-full mb-[50px] lg:h-[464px] lg:w-[695px] px-[80px] py-[50px] lg:ml-[10px]"
                id="covidfree"
                data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-out" data-aos-duration="1500" 
            >
                <p
                    class="text-left text-[#5c5c5c] text-[36px] font-bold leading-[48px] tracking-[-.64px]"
                >
                    #covidfree
                </p>
                <p
                    class="text-left py-[30px] text-[#5c5c5c] text-[16px] tracking-[-.29px]"
                >
                    Primjenom Ultraljubičastog svjetla, (ultravioletnog, UV-c),
                    UVD-robot uništava strukturu DNA u svim mikroorganizmima.
                </p>
                <p
                    class="text-left text-[#5c5c5c] text-[16px] tracking-[-.29px]"
                >
                    Pružamo uslugu čišćenja velikih i malih prostora, uz pomoć
                    robota, koji u najkraćem mogućem roku i autonomno
                    dezinficiraju zatvorene prostore gdje sigurnost i “osjećaj
                    čistoće” mora biti na prvom mjestu.
                </p>
            </div>
        </div>
    </section>

    <section class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:flex">
        <div
            class="bg-[url('src/assets/Group-7.jpg')] bg-cover h-[55vh] md:h-[631px] w-full"

            id="Group7"
        ></div>

        <div
            class="flex items-center bg-[#027fc1] py-[50px] px-[50px] md:px-[100px] lg:py-[100px] lg:px-[100px] w-full order-first lg:order-last"
            
        >
            <p
                class="text-left text-white text-[25px] md:text-[36px] font-bold leading-[32px] md:leading-[55px] tracking-[-.64px]"
            >
                Želite vašim klijentima i zaposlenicima pružiti potpuno čist
                prostor? Kontaktirajte nas odmah, neka vaš prostor bude
                #covidfree!
            </p>
        </div>
    </section>

    <section>
        <div
            class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:flex justify-center py-[50px] px-[20px] sm:px-[80px] sm:py-[120px] md:py-[120px] md:px-[100px] lg:px-[230px] gap-x-8"
        >
            <div
                class="w-full px-[20px] lg:h-[64.26vh] lg:w-[39vw] shadow-[0_2px_32px_0_rgba(0,0,0,14%)] py-[40px] mb-[50px] sm:px-[50px] lg:py-[0px] xl:py-[120px]"
                data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-out" data-aos-duration="1500" 
            >
                <p
                    class="text-left text-[#5c5c5c] text-[25px] leading-[32px] md:text-[36px] font-bold sm:leading-[50px] tracking-[-.64px]"
                >
                    Naše tehničko osoblje spremno je u najkraćem mogućem roku
                    izvršiti uslugu koja uključuje:
                </p>
                <ul
                    class="list-disc line-outside pl-[20px] pb-[50px] pt-[30px] text-left text-[16px] tracking-[-.29px]"
                >
                    <li>dopremu UV-dezinfekcijskog robota</li>
                    <li>mapiranje prostorija predviđenih za dezinfekciju</li>
                    <li>kontrolu rada tijekom dezinfekcije</li>
                    <li>otpremu UV-dezinfekcijskog robota</li>
                </ul>
                <a
                    href="https://vedras.hr/download/Vedras_dezinfekcija_UVD_Robotima.pdf"
                    target="_blank"
                    class="flex"
                >
                    <button
                        class="h-[57px] w-[216px] bg-[#027fc1] hover:bg-transparent border border-[#027fc1]"
                    >
                        <p
                            class="text-center text-white hover:text-[#027fc1] text-[16px] leading-[36px] tracking-[-.29px]"
                        >
                            PREUZMI BROŠURU
                        </p>
                    </button>
                </a>
            </div>
            <div
                class="w-full bg-[url('src/assets/91448396.jpg')] bg-cover h-[64.26vh] sm:w-[50%] sm:mx-auto lg:w-[30.21vw] bg-y-[80%]"
                id="robot"
                data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-out" data-aos-duration="1500" 
            ></div>
        </div>
    </section>

    <section
        class="grid grid-rows-1 sm:grid-rows-1 md:grid-cols-1 lg:grid-cols justify-center bg-[#027fc1] px-[20px] py-[40px] sm:py-[120px]" 
    >
        <div data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-out" data-aos-duration="1500"  >
            <p
                class="text-center text-white text-[25px] md:text-[36px] leading-[32px] sm:leading-[48px] tracking-[-.29px]"
            >
                Za više informacija pišite nam na mail:
            </p>
        </div>
        <div class="lg:flex justify-center" data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-out" data-aos-duration="1500" >
            <a href="mailto:info@vedras.hr">
                <p
                    class="text-center text-white font-bold text-[25px] md:text-[36px] leading-[32px] md:leading-[48px] tracking-[-.29px] hover:underline"
                >
                    info@vedras.hr
                </p></a
            >
            <p
                class="text-center text-white text-[25px] md:text-[36px] leading-[32px] md:leading-[48px] tracking-[-.29px] px-[10px]"
            >
                ili nazovite broj
            </p>
            <a href="te:385989608920">
                <p
                    class="text-center text-white font-bold text-[25px] md:text-[36px] leading-[32px] md:leading-[48px] tracking-[-.29px] hover:underline"
                >
                    +385 98 9608 920
                </p>
            </a>
        </div>
    </section>
    <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600&display=swap');



#app {
    font-family: 'Titillium Web', sans-serif;
    text-align: center;
}

#header {
    color: #fff;
}

#background {
    background-position-x: 50%;
}

#line {
    width: 437px;
    border: 1px solid #fff;
}

#offer {
    transition: all 0.5s;
    background-position-x: 50%;
}

#covid {
    background-position-y: 100%;
}

#Group7 {
    background-position-x: 100%;
}

#covidfree {
    box-shadow: 0 2px 32px 0 rgb(0 0 0 / 14%);
}

#robot {
    background-position-x: 50%;
}
</style>
