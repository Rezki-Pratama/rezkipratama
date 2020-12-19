<template>
  <div class="hobbies" ref="hobbies">
      <div class="container mx-auto md:px-20 content-hobbies">
        <div class="title-hobbies">
          <h1>Hobbies</h1>
          <div class="underline-hobbies"></div>
        </div>
        <div class="football">
            <div class="playing">
                <h2>Playing Football</h2>
                <p>From 6 years old until now i loved football, I always enjoy play
                with my friends and my favorite football club is manchester united.</p>
            </div>
            <div class="content-football">
                <img class="man-soccer" src="@/assets/frontend/images/man_soccer.svg" alt="">
                <img class="ball" src="@/assets/frontend/images/ball.png" alt="">
            </div>
            
        <div class="play-games">
            <div class="games">
                <h2>Playing Games</h2>
                <p>
                    I also like to play games on various platforms
                    both console and pc, my favorite game genre is survival and simulation.
                </p>
            </div>
            <div class="content-games">
                <img class="man-games" src="@/assets/frontend/images/play_games.svg" alt="">
            </div>
        </div>
        </div>
      </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
    name: 'Hobbies',
    mounted: function() {
      this.startAnimations()
    },
    methods: {
        startAnimations: function () {
            let tl = new TimelineMax({onUpdate:updatePercentage})

            tl.to(".title-hobbies", 0.3, {opacity: "1",transform: "translateX(0)"}, 0)
            tl.to(".underline-hobbies", 0.3, {opacity: "1", width: "100%"}, 0)
            tl.to(".playing", 0.5, {opacity: "1", transform: "translateX(0)"}, 0)
            tl.to(".content-football", 0.5, {opacity: "1", transform: "translateX(0)"}, 0)
            tl.to(".ball", 0.7, {transform: "translateX(200%)"}, 0)
            tl.to(".games", 1, {opacity: "1", transform: "translateX(0)"}, 1)
            tl.to(".man-games", 1, {opacity: "1", transform: "translateX(0)"}, 1)
            tl.to(".title-works", 1, {opacity: "1",transform: "translateX(0)"}, 2)
            tl.to(".underline-works", 1, {opacity: "1", width: "100%"}, 2)
            tl.to("#one", 1, {opacity: "1",transform: "scale(1)"}, 3)
            tl.to("#two", 0.5, {opacity: "1",transform: "scale(1)"}, 3)

            const scene2 = this.$scrollmagic.scene({
              triggerElement: '.hobbies',
              triggerHook: 0,
              duration: "150%"

            })
            .setPin(".hobbies")
            .setTween(tl)

            this.$scrollmagic.addScene(scene2)

            function updatePercentage() {
              tl.progress()
            }
        }
    }

}
</script>

<style lang="scss" scoped>

    @import 'assets/frontend/styles/utilities/_utilities';

    .hobbies {
        .content-hobbies {
            padding-top: 100px;
            width: 100%;
            height: max-content;
            .title-hobbies {
                width: max-content;
                height: max-content;
                opacity: 0;
                transform: translateX(30%);
                h1 {
                    font-size: 40px;
                    font-weight: bold;
                    color: $colorBlack;
                }

                .underline-hobbies {
                    background-color: $colorSecondary;
                    width: 20%;
                    height: 5px;
                    border-radius: 20px;
                }
            }

            .football {
                margin-top: 70px;
                display: flex;
                flex-direction: column;

                .playing {
                    margin-bottom: -30px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    opacity: 0;
                    transform: translateX(-10%);

                    h2 {
                        width: 45%; 
                        font-size: 35px;
                        font-weight: bold;
                    }

                    p {
                        width: 45%;
                        font-size: 25px;
                    }
                }

                

                .content-football {
                    margin-top: -70px;
                    display: flex;
                    align-items: center;
                    opacity: 0;
                    transform: translateX(-30px);
                    .man-soccer {
                        width: 500px;
                        height: 400px;
                    }
    
                    .ball {
                        width: 80px;
                        height: 70px;
                        transform: translateX(-20%);
                    }
                }
            }

            .play-games {
                margin-top: 70px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .games {
                    width: max-content;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    opacity: 0;
                    transform: translateX(30%);

                    h2 {
                        width: 70%; 
                        font-size: 35px;
                        font-weight: bold;
                    }

                    p {
                        width: 70%;
                        font-size: 25px;
                    }
                }

                .content-games {
                    .man-games {
                        width: 750px;
                        height: 350px;
                        opacity: 0;
                        transform: translateX(-30%);  
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 768px) {
       .hobbies {
            .content-hobbies {
                .title-hobbies {
                    padding: 0px 10px;
                }
                
                .football {
                    margin-top: 70px;
                    display: flex;
                    flex-direction: column;

                    .playing {
                        margin-bottom: 0px;
                        width: 100%;
                        padding: 0px 10px;
                        align-items: flex-start;

                        h2 {
                            width: 100%; 
                            font-size: 30px;
                            font-weight: bold;
                        }

                        p {
                            width: 100%;
                            font-size: 20px;
                        }
                    }



                    .content-football {
                        margin-top: 0px;
                        .man-soccer {
                            width: 400px;
                            height: 300px;
                        }

                        .ball {
                            display: none;
                        }
                    }
                }

                .play-games {
                    flex-direction: column;
                    justify-content: space-between;
                    .games {
                        width: 100%;
                        padding: 0px 10px;
                        flex-direction: column;
                        align-items: center;

                        h2 {
                            width: 100%; 
                            font-size: 30px;
                            font-weight: bold;
                        }

                        p {
                            width: 100%;
                            font-size: 20px;
                        }
                    }

                    .content-games {
                        .man-games {
                            width: 550px;
                            height: 250px; 
                        }
                    }
                }
            }
       } 
    }
</style>