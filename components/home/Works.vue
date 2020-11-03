<template>
  <div class="works">
        <div class="container mx-auto px-20 title-works">
          <h1>Works</h1>
          <div class="underline-works"></div>
        </div>
        <div class="content-works">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#FFFFFF" fill-opacity="1" d="M0,288L40,272C80,256,160,224,240,229.3C320,235,400,277,480,256C560,235,640,149,720,128C800,107,880,149,960,170.7C1040,192,1120,192,1200,170.7C1280,149,1360,107,1400,85.3L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
            </svg>
            <div class="container mx-auto px-20  list-items">
                <div class="item" id="one">
                    <img src="@/assets/frontend/images/logo/illustration.webp" alt="">
                    <h3>Illustration</h3>
                </div>
                <div class="item" id="two">
                    <img src="@/assets/frontend/images/logo/ui_design.webp" alt="">
                    <h3>UI Design</h3>
                </div>
                <div class="item three">
                    <img src="@/assets/frontend/images/logo/web_design.webp" alt="">
                    <h3>Web Design</h3>
                </div>
                <div class="item four">
                    <img src="@/assets/frontend/images/logo/mobile_app.webp" alt="">
                    <h3>Mobile App</h3>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#FFFFFF" fill-opacity="1" d="M0,160L40,181.3C80,203,160,245,240,245.3C320,245,400,203,480,160C560,117,640,75,720,80C800,85,880,139,960,165.3C1040,192,1120,192,1200,160C1280,128,1360,64,1400,32L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
            </svg>
        </div>
      </div>
</template>

<script>
export default {
    name: 'Works'
}
</script>

<style lang="scss" scoped>

    @import 'assets/frontend/styles/utilities/_utilities';

    .works {
        margin-top: 100px;
        .title-works {
            width: max-content;
            height: max-content;
            h1 {
                text-align: center;
                font-size: 40px;
                font-weight: bold;
                color: $colorBlack;
            }
            .underline-works {
                background-color: $colorSecondary;
                width: 20%;
                height: 5px;
                border-radius: 20px;
            }
        }
        .content-works {
            background-color: #00B4D8;
            // background-image: url('~@/assets/frontend/images/background_works.webp');
            background-repeat: no-repeat;
            background-position: center center;
            height: 100%;

            svg {
                height: 80%;
                width: 100%;
            }
            // object-fit: cover;
            // background-image: linear-gradient(to right, #3093C6 0%, #116D94 100%);
            .list-items {
                padding: 5px 0px;
                display: flex;
                justify-content: space-between;
                .item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    img {
                        width: 115px;
                        height: 115px;
                    }
                    h3 {
                        margin-top: 15px;
                        font-size: 25px;
                        color: $colorPrimary;
                        font-weight: bold;
                    }
                }
            }
        }
    }

    @media only screen and (min-device-width : 360px) and (max-device-width : 640px) {
        .works {
           .content-works {
                margin-top: 30px;
                height: 100%;
                // object-fit: cover;
                // background-image: linear-gradient(to right, #3093C6 0%, #116D94 100%);
                .list-items {
                    padding: 70px 5px;
                    display: flex;
                    justify-content: space-between;
                    .item {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        img {
                            width: 50px;
                            height: 50px;
                        }
                        h3 {
                            margin-top: 15px;
                            font-size: 15px;
                            color: $colorPrimary;
                            font-weight: bold;
                        }
                    }
                }
            }
        }
    }
</style>