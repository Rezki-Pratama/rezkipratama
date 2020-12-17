<template>
  <div class="biography">
      <div class="container mx-auto md:px-20 content-biography">
        <div class="title-biography">
          <h1>Short Biography</h1>
          <div class="underline"></div>
        </div>
        <h2 class="born">Born in 1996. Raised in Palembang</h2>
        <h2 class="degree">Bachelor's Degree in Information System</h2>
        <h2 class="coder"> I am an accomplished Design and Programmer</h2>
      </div>
      <img class="ampera-bridge" src="@/assets/frontend/images/ampera_bridge.svg" alt="">
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
    name: 'ShortBiography',
    mounted: function() {
      this.startAnimations()
    },
    methods: {
        startAnimations: function () {
            let tl = new TimelineMax({onUpdate:updatePercentage})

            // tl.to(".biography", 0.2, {opacity: "1"}, 0)
            // tl.to(".title-biography", 0.3, {opacity: "1",transform: "translateX(0)"}, 0)
            // tl.to(".underline", 0.3, {opacity: "1", width: "100%"}, 0)
            // tl.to(".born", 0.5, {opacity: "1", transform: "translateX(0)"}, 0)
            // tl.to(".degree", 0.7, {opacity: "1", transform: "translateX(0)"}, 0)
            // tl.to(".coder", 0.9, {opacity: "1", transform: "translateX(0)"}, 0)
            // tl.to(".ampera-bridge", 0.5, {opacity: "1", transform: "translateX(0)"}, 0)

            const scene = this.$scrollmagic.scene({
              triggerElement: '.biography',
              triggerHook: 0,
              duration: "100%"
            })
            .setPin(".biography")
            .setTween(tl)

            this.$scrollmagic.addScene(scene)

            function updatePercentage() {
              tl.progress()
            }
        }
    }

}
</script>

<style lang="scss" scoped>

    @import 'assets/frontend/styles/utilities/_utilities';

    .biography {
        background-image: url('~@/assets/frontend/images/background_biography.svg');
        background-size: contain;
        background-position: right;
        background-repeat: no-repeat;
        // opacity: 0;

        .content-biography {
            padding-top: 100px;
            width: 100%;
            height: max-content;

            .title-biography {
                width: max-content;
                height: max-content;
                // opacity: 0;
                // transform: translateX(30%);
                h1 {
                    font-size: 40px;
                    font-weight: bold;
                    color: $colorBlack;
                }

                .underline {
                    background-color: $colorSecondary;
                    width: 100%;
                    height: 5px;
                    border-radius: 20px;
                }
            }

            .born {
                margin-top: 20px;
                margin-left: 50px;
                font-size: 30px;
                // opacity: 0;
                // transform: translateX(30%);
            }

            .degree {
                margin-top: 20px;
                margin-left: 100px;
                font-size: 30px;
                // opacity: 0;
                // transform: translateX(30%);
            }

            .coder {
                margin-top: 20px;
                margin-left: 150px;
                font-size: 30px;
                // opacity: 0;
                // transform: translateX(30%);
            }
        }
        .ampera-bridge {
            margin-top: 20px;
            object-fit: contain;
            width: 40%;
            height: 90%;
            // opacity: 0;
            // transform: translateX(-30%);
        }
    }

    @media only screen and (min-device-width : 360px) and (max-device-width : 640px) {
        .biography {
            background-image: none;
           .content-biography {
               .title-biography {
                   padding: 0px 10px;
               }

               .born {
                   font-size: 20px;
               }

               .degree {
                   font-size: 20px;
               }

               .coder {
                   font-size: 20px;
               }
           } 

           .ampera-bridge {
                margin-top: 20px;
                object-fit: contain;
                width: 100%;
                height: 100%;
                opacity: 0;
                transform: translateX(-30%);
            }
        }
    }
</style>