<template>
  <div class="portofolio">
      <Navbar/>

      <div class="main">
        <div class="wrapper">
            <div class="title">
              <h1>Welcome, Mate</h1>
              <div class="scroll-down">
                <p>Scroll down</p>
                <img class="img-scroll" src="@/assets/frontend/images/logo/scroll_down.webp" alt="">
              </div>
            </div>
            <div class="container mx-auto md:px-20 content">
              <div class="description">
              <h1 class="halo">Hello,</h1>
              <h2 class="saya">I'am Rezki Pratama</h2>
              <h3 class="posisi">Frontend and UI Designer</h3>
              <a href="https://drive.google.com/file/d/1iUN5tl4r6EdSe1EbYkEJhdqsjJky_i-W/view?usp=sharing" target="_blank" class="btn-hubungi">
                Download CV
              </a>
          </div>
          <div class="img-profile">
            <img src="@/assets/frontend/images/rezki_profile2.svg" alt="">
            <div class="contact">
              <a target="_blank" href="https://www.instagram.com/rezkipratama6"><i class="fab fa-instagram"></i></a>
              <a target="_blank" href="https://github.com/Rezki-Pratama"><i class="fab fa-github"></i></a>
              <a target="_blank" href="https://www.linkedin.com/in/rezki-pratama-a858971a5/"><i class="fab fa-linkedin"></i></a>
              <a target="_blank" href="https://www.facebook.com/RezkiPratama6"><i class="fab fa-facebook-square"></i></a>
              <a target="_blank" href="mailto:rezki.pratama7777@gmail.com"><i class="fas fa-envelope"></i></a>
              <a target="_blank" href="https://dribbble.com/RezkiPratama"><i class="fab fa-dribbble"></i></a>
              <a target="_blank" href="https://www.behance.net/rezkipratama"><i class="fab fa-behance-square"></i></a>
            </div>
          </div>
            </div>
          <div class="illustration">
            <div class="container-illustration">
              <div class="container mx-auto md:px-20 content-illustration">
                <img class="text-illustration" src="@/assets/frontend/images/illustration3.svg" alt="">
                <img class="man-illustration" src="@/assets/frontend/images/illustration2.svg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>

      <ShortBiography/>

      <Hobbies/>

      <Works/>

      <Skills/>

      <Footer/>

  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import ShortBiography from '@/components/home/ShortBiography.vue';
import Hobbies from '@/components/home/Hobbies.vue';
import Works from '@/components/home/Works.vue';
import Skills from '@/components/home/Skills.vue';
import Footer from '@/components/Footer.vue';
import { gsap } from "gsap";
export default {
    components: {
        Navbar,
        ShortBiography,
        Hobbies,
        Works,
        Skills,
        Footer
    },
    mounted: function() {
      this.startAnimations();
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      });
    },
    methods: {
      startAnimations: function() {
        let tl = new TimelineMax({onUpdate:updatePercentage})

        tl.to(".title", 1, {opacity: "0"}, 0)
        tl.to(".halo", 1.5, {opacity: "1",transform: "translateX(0)"}, 1)
        tl.to(".saya", 1.5, {opacity: "1",transform: "translateX(0)"}, 2)
        tl.to(".posisi", 2, {opacity: "1",transform: "translateX(0)"}, 3)
        tl.to(".btn-hubungi", 1.5, {opacity: "1",transform: "translateX(0)"}, 4)
        tl.to(".img-profile img", 1.5, {opacity: "1",transform: "scale(1)"}, 2)
        tl.to(".fa-instagram", 1, {opacity: "1",transform: "translateX(0)"}, 2)
        tl.to(".fa-github", 1, {opacity: "1",transform: "translateX(0)"}, 3)
        tl.to(".fa-linkedin", 1, {opacity: "1",transform: "translateX(0)"}, 4)
        tl.to(".fa-facebook-square", 1, {opacity: "1",transform: "translateX(0)"}, 5)
        tl.to(".fa-envelope", 1, {opacity: "1",transform: "translateX(0)"}, 6)
        tl.to(".fa-dribbble", 1, {opacity: "1",transform: "translateX(0)"}, 7)
        tl.to(".fa-behance-square", 1, {opacity: "1",transform: "translateX(0)"}, 8)
        tl.to(".illustration", 2, {height: "100%"}, 9)
        tl.to(".illustration .glasses", 2, {opacity: "1"}, 10)
        tl.to(".illustration .glasses", 2, {rotation: 360, transformOrigin: "center center"}, 10)
        tl.to(".illustration #hand", 2, {opacity: "1"}, 11)
        tl.to(".illustration #hand", 2, {rotation: 360, transformOrigin: "center center"}, 11)
        tl.to(".quote", 2, {opacity: "1"}, 12)
        

        const scene = this.$scrollmagic.scene({
          triggerElement: '.wrapper',
          triggerHook: 0,
          duration: "400%"
        })
        .setPin(".wrapper")
        .setTween(tl)

        this.$scrollmagic.addScene(scene)

        function updatePercentage() {
          tl.progress()
        }
      }
    },
    layout: 'fun',
    transition: 'slide-bottom'
}
</script>

<style lang="scss" scoped>

  @import 'assets/frontend/styles/utilities/_utilities';

  .portofolio {
    .main {
      .wrapper {
          overflow: hidden;
          position: relative;
          .title {
            margin-top: 15%;
            position: absolute;
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
            text-align: center;
            font-weight: bold;

            h1 {
              font-size: 70px;
            }

            .scroll-down {
              justify-content: center;
              display: flex;

              p {
                font-size: 30px;
              }

              .img-scroll {
                margin-top: 5px;
                width: 50px;
                height: 50px;
                animation: bounce 0.5s infinite alternate;
                -webkit-animation: bounce 0.5s infinite alternate;
              }

              @keyframes bounce {
                from {
                  transform: translateY(0px);
                }
                to {
                  transform: translateY(-10px);
                }
              }
              @-webkit-keyframes bounce {
                from {
                  transform: translateY(0px);
                }
                to {
                  transform: translateY(-10px);
                }
              }
            }
          }
          .content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100vh;
            overflow: hidden;
              .description {
                .halo {
                  font-size: 60px;
                  font-weight: bold;
                  transform: translateX(30%);
                  opacity: 0;
                }
                .saya {
                  font-weight: 600;
                  font-size: 40px;
                  transform: translateX(30%);
                  opacity: 0;
                }
                .posisi {
                  font-size: 30px;
                  transform: translateX(30%);
                  opacity: 0;
                }
                .btn-hubungi {
                  margin-top: 20px;
                  display: inline-block;
                  transform: translateX(30%);
                  padding: 0.5em 1em;
                  border-radius: 10px;
                  font-size: 20px;
                  font-weight: bold;
                  opacity: 0;
                  color: $colorPrimary;
                  background-color: $colorSecondary;

                  &:hover {
                    background-color: $colorStabilo;
                  }
                }
              }

            .img-profile {
              display: flex;
              flex-direction: column;
              align-items: center;

              img {
                height: 400px;
                opacity: 0;
                transform: scale(0.3);
              }

              .contact {
                transform: rotate(-18deg) translateX(10%);
                display: flex;
                justify-content: space-between;
                width: 100%;
                opacity: 1;

                i {
                  font-size: 2.5em;
                  color: $colorSecondary;
                }

                .fa-instagram {
                  transform: translateX(-30%);
                  opacity: 0;

                  &:hover {
                    color: transparent;
                    background: -webkit-radial-gradient(30% 107%, circle, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
                    background: -o-radial-gradient(30% 107%, circle, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
                    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
                    background: -webkit-radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
                    background-clip: text;
                    -webkit-background-clip: text;
                  }
                }

                .fa-github {
                  transform: translateX(-30%);
                  opacity: 0;

                  &:hover {
                    color: #000000;
                  }
                }

                .fa-linkedin {
                  transform: translateX(-30%);
                  opacity: 0;

                  &:hover {
                    color: #0077B9;
                  }
                }

                .fa-facebook-square {
                  transform: translateX(-30%);
                  opacity: 0;

                  &:hover {
                    color: #475A95;
                  }
                }

                .fa-envelope {
                  transform: translateX(-30%);
                  opacity: 0;
                  &:hover {
                    color: #F44933;
                  }
                }

                .fa-dribbble {
                  transform: translateX(-30%);
                  opacity: 0;
                  &:hover {
                    color: #C32361;
                  }
                }

                .fa-behance-square {
                  transform: translateX(-30%);
                  opacity: 0;
                  &:hover {
                    color: #004AB8;
                  }
                }
              }
            }
          }

        .illustration {
          height: 0;
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 0);
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center bottom;
          z-index: 2;

          .container-illustration {
            width: 100%;
            height: 100%;
            padding: 50px 0;
            background-color: $colorSecondary;
            .content-illustration {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 100px;

              .text-illustration {
                  width: 70%;
              }

              .man-illustration {
                  width: 30%;
              }
            }
          }

          

          .quote {
            opacity: 0;
          }

          .glasses {
            opacity: 0;
          }

          #hand {
            opacity: 0;
            transform-origin: center;
          }
        }
      }
    }
  }

  @media only screen and (min-device-width : 360px) and (max-device-width : 640px) {
    .portofolio {
      .main {
        .wrapper {
          .title {
            margin-top: 200px;
            h1 {
              font-size: 40px;
            }

            p {
              font-size: 25px
            }

            .scroll-down {
              p {
                font-size: 25px
              }

              .img-scroll {
                width: 40px;
                height: 40px;
              }
            }
          }

          .content {
            margin-top: 100px;
            flex-direction: column-reverse;
            .description {
                .halo {
                  font-size: 35px;
                }
                .saya {
                  font-size: 30px;
                }
                .posisi {
                  font-size: 30px;
                }
              }

            .img-profile {
              img {
                height: 300px;
              }

              .contact {
                transform: rotate(-18deg) translateX(0);
                width: 90%;

                i {
                  font-size: 2.5em;
                }
              }
            }
          }

          .illustration {
            display: none;
          }
        }
      }
    }
  }

</style>