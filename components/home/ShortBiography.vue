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
export default {
    name: 'ShortBiography',
    mounted: function() {
      
    },
    methods: {
       
    }

}
</script>

<style lang="scss" scoped>

    @import 'assets/frontend/styles/utilities/_utilities';

    .biography {
        background-image: url('~@/assets/frontend/images/background_biography3.svg');
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

    @media only screen and (max-width: 768px) {
        .biography {
            background-image: none;
           .content-biography {
               .title-biography {
                   padding: 0px 10px;

                   h1 {
                       font-size: 30px;
                   }
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
                width: 70%;
                height: 100%;
            }
        }
    }
</style>